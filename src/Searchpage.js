import React from "react";
import "./searchpage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import Videolist from "./Videolist.js";
import ResponsivePlayer from "./VideoPlayer.js";

function Searchpage({
  isselected,
  selectedvideo,
  handleSelectedVideo,
  videos
}) {
  return (
    <div className="searchpage">
      <div className="searchpage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      {isselected === true && (
        <ResponsivePlayer selectedvideo={selectedvideo} />
      )}
      <div>
        <Videolist handleSelectedVideo={handleSelectedVideo} videos={videos} />
      </div>
    </div>
  );
}

export default Searchpage;
