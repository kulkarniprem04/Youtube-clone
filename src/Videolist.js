import React from "react";
import "./Videolist.css";
import Videos from "./Videos.js";

function Videolist({ handleSelectedVideo, videos }) {
  return (
    <div>
      {videos.map((video) => (
        <Videos
          handleSelectedVideo={handleSelectedVideo}
          video={video}
          thumbnail={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          channelname={video.snippet.channelTitle}
          timestamp={video.snippet.publishedAt}
          description={video.snippet.description}
        />
      ))}
    </div>
  );
}

export default Videolist;
