import { getSession, signOut } from "next-auth/client";
import { useEffect, useState } from "react";
import VideoDetails from "../components/videoDetails";
import Video from "../components/video";
import youtube from "../public/youtube3.png";
import signout from "../public/signout.png";
import Image from "next/image";

export default function Home({ data, name }) {
	const [search, setSearch] = useState("");
	const [items, setItems] = useState();
	const [video, setVideo] = useState(data.items[0]);
	const [videoSrc, setVideoSrc] = useState(
		`https://youtube.com/embed/${data.items[0].id.videoId}`
	);
	useEffect(() => {
		setItems(data.items);
	}, []);

	const handleSearch = async () => {
		const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&contentDetails%2Cstatistics&maxResults=5&q=${search}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`;
		const result = await fetch(url);
		const res = await result.json();
		console.log(res.items);
		setItems(res.items);
		setVideo(res.items[0]);
		setVideoSrc(`https://youtube.com/embed/${res.items[0].id.videoId}`);
	};

	const handleSelect = (item) => {
		console.log(item.id);
		setVideo(item);
		setVideoSrc(`https://youtube.com/embed/${item.id.videoId}`);
	};

	if (typeof window == undefined && loading) return <h1> loading.. </h1>;
	return (
		<>
			<div
				className="d-flex p-2 px-5 justify-content-between align-items-center"
				style={{ background: "#202020" }}
			>
				<div className="d-flex">
					<Image src={youtube} width="50rem" height="10rem" />
					<h4 className="m-0" style={{ color: "#ffffff" }}>
						YouTube
					</h4>
				</div>
				<div className="d-flex">
					<input
						type="text"
						className="form-control"
						placeholder="Search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						style={{ background: "#121212", color: "#e8f3fe", width: "50vw" }}
					/>
					<button
						className="btn btn-outline-secondary"
						style={{ color: "#e8f3fe" }}
						onClick={handleSearch}
					>
						Search
					</button>
				</div>
				<h5 style={{ color: "white", fontWeight: "lighter" }}>
					Welcome {name}
				</h5>
				<button
					className="btn"
					onClick={(e) => {
						signOut({ callbackUrl: "http://localhost:3000/Signin" });
					}}
				>
					<Image src={signout} width="30rem" height="30rem" />
				</button>
			</div>
			<div className="container-l px-5 py-3" style={{ background: "#181818" }}>
				<div className="d-flex">
					<Video video={video} videoSrc={videoSrc} />
					<div className="card border-0" style={{ background: "#181818" }}>
						{items &&
							items.map((item, ind) => {
								return (
									<div key={ind} onClick={() => handleSelect(item)}>
										<VideoDetails video={item} />
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
}

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx);
	if (!session) {
		return {
			redirect: {
				permanent: false,
				destination: "/Signin",
			},
		};
	}
	const { name } = session.user;
	const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&contentDetails%2Cstatistics&maxResults=5&q=csgo&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`;
	const data = await fetch(url);
	const jsonData = await data.json();
	return {
		props: { data: jsonData, name: name },
	};
};
