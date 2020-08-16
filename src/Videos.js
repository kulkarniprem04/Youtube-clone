import React from "react";
import "./Videos.css";
import { Avatar } from "@material-ui/core";

function Videos({
  videocount,
  subscribercount,
  viewcount,
  kind,
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
    <div className={`videos_content ${darkmode === true && "darkmode"}`}>
      {kind === "youtube#channel" ? (
        <>
          <div className="channel_info">
            <Avatar
              className="channel_image"
              alt="channel_image"
              src={thumbnail}
            />
            <div className="channel_text">
              <h2>{title}</h2>
              <div className="channel_subviews">
                <p>
                  {subscribercount} Subscribers . {viewcount} Views
                </p>
                <p>{videocount} Videos</p>
              </div>
              <p className="channel_description">{description}</p>
            </div>
          </div>
          <hr />
        </>
      ) : (
        <div onClick={() => handleSelectedVideo(video)} className="videos_list">
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
      )}
    </div>
  );
}

export default Videos;
