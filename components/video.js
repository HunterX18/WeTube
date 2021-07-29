const Video = ({video, videoSrc}) => {
    // console.log(videoSrc);
	return (
		<div className="card border-0 mr-3" style={{ maxWidth: "60vw" }}>
			<iframe
				frameBorder="0"
				src={videoSrc}
				style={{ overflow: "hidden", height: "70vh", width: "100%" }}
				height="100%"
				width="100%"
			/>
			<div className="card-body" style={{ background: "#181818" }}>
				<h5 className="card-title" style={{ color: "#e8f3fe" }}>
					{video.snippet.title}
				</h5>
				<p className="card-text" style={{ color: "#e8f3fe" }}>
					{video.snippet.channelTitle}
				</p>
				<p style={{ color: "#e8f3fe" }}>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default Video;
