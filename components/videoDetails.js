const VideoDetails = ({ video }) => {
	const image = video.snippet.thumbnails.high.url;
	return (
		<>
			<a href="#" style={{ textDecoration: "none" }}>
				<div
					className="d-flex m-3 mt-0"
					style={{
						width: "30rem",
						height: "10rem",
						overflow: "hidden",
					}}
				>
					<div className="card border-0 p-0" style={{ width: "15rem" }}>
						<img src={image} className="img-fluid rounded-start" />
					</div>
					<div
						className="card border-0"
						style={{ width: "15rem", background: "#181818" }}
					>
						<div className="card-body">
							<small
								className="card-title text-break"
								style={{ color: "#e8f3fe", fontWeight: "bold" }}
							>
								{video.snippet.title}
							</small>
							<p className="card-text">
								<small style={{ color: "#939393", fontWeight: "bold" }}>
									{video.snippet.channelTitle}{" "}
								</small>
							</p>
						</div>
					</div>
				</div>
			</a>
		</>
	);
};

export default VideoDetails;
