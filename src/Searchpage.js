import React from "react";
import "./searchpage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import Videolist from "./Videolist.js";
import ResponsivePlayer from "./VideoPlayer.js";

function Searchpage({
  videocount,
  subscribercount,
  viewcount,
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
          videocount={videocount}
          subscribercount={subscribercount}
          viewcount={viewcount}
          darkmode={darkmode}
          handleSelectedVideo={handleSelectedVideo}
          videos={videos}
        />
      </div>
    </div>
  );
}

export default Searchpage;
