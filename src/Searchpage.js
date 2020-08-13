import React from "react";
import "./searchpage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import Videolist from "./Videolist.js";
import ResponsivePlayer from "./VideoPlayer.js";

function Searchpage({
  darkmode,
  isselected,
  selectedvideo,
  handleSelectedVideo,
  videos
}) {
  return (
    <div className={`searchpage ${darkmode === true && "darkmode"}`}>
      <div className="searchpage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      {isselected === true && (
        <ResponsivePlayer selectedvideo={selectedvideo} />
      )}
      <div>
        <Videolist
          darkmode={darkmode}
          handleSelectedVideo={handleSelectedVideo}
          videos={videos}
        />
      </div>
    </div>
  );
}

export default Searchpage;
