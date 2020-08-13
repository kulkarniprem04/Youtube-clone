import React from "react";
import "./Videos.css";

function Videos({
  darkmode,
  handleSelectedVideo,
  video,
  thumbnail,
  title,
  channelname,
  timestamp,
  description
}) {
  return (
    <>
      <div
        onClick={() => handleSelectedVideo(video)}
        className={`videos_content ${darkmode === true && "darkmode"}`}
      >
        <div>
          <img
            className="video_thumbnail"
            alt="video_thumbnail"
            src={thumbnail}
          />
        </div>
        <div className="video_info">
          <h4>{title}</h4>
          <p>{channelname}</p>
          <p className="video_timestamp">{timestamp}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Videos;
