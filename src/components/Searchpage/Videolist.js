import React from "react";
import "./Videolist.css";
import Videos from "./Videos.js";

function Videolist({
  videocount,
  subscribercount,
  viewcount,
  darkmode,
  handleSelectedVideo,
  videos
}) {
  return (
    <div>
      {videos.map((video) => (
        <div key={video.etag}>
          <Videos
            videocount={videocount}
            subscribercount={subscribercount}
            viewcount={viewcount}
            kind={video.id.kind}
            darkmode={darkmode}
            handleSelectedVideo={handleSelectedVideo}
            video={video}
            thumbnail={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            channelname={video.snippet.channelTitle}
            timestamp={video.snippet.publishedAt}
            description={video.snippet.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Videolist;
