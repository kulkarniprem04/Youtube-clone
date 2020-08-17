import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from "./MenuIcon.js";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";

function Header({ handleFormSubmit, darkmode, clicked, menuIconSelect }) {
  const [inputsearch, setInputsearch] = useState("");

  const handleSubmit = () => {
    handleFormSubmit(inputsearch);
  };

  return (
    <div className={`header ${darkmode === true && "darkmode"}`}>
      <div className="header_left">
        <MenuIcon
          darkmode={darkmode}
          clicked={clicked}
          click={menuIconSelect}
        />
        <Link to="/">
          <img
            className="youtube_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
            alt="logo"
          />
        </Link>
      </div>

      <div className="searchbar">
        <input
          onChange={(e) => setInputsearch(e.target.value)}
          value={inputsearch}
          placeholder="Search"
          type="text"
        />
        <Link className="link" to={`/search`}>
          <SearchIcon
            onClick={() => handleSubmit()}
            className="header_searchicon"
          />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar alt="profile_pic" src="./prem.png" className="header_icon" />
      </div>
    </div>
  );
}

export default Header;
