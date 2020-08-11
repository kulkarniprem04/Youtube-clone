import React from "react";
import "./searchpage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import Videolist from "./Videolist.js";

function Searchpage({ videos }) {
  return (
    <div className="searchpage">
      <div className="searchpage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <div>
        <Videolist videos={videos} />
      </div>
    </div>
  );
}

export default Searchpage;
