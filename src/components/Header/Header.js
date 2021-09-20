import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import MenuIcon from "./MenuIcon.js";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import ytLogo from "../../assets/YouTube_Logo.svg";

function Header({ handleFormSubmit, darkmode, clicked, menuIconSelect }) {
  const [inputsearch, setInputsearch] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    handleFormSubmit(inputsearch);
  };

  const handlekeyDown = event => {
    if (event.key === "Enter") {
      handleFormSubmit(inputsearch);
      history.push("/search");
    }
  };

  return (
    <div className={`header ${darkmode === true && "darkmode"}`}>
      <div className="header_left">
        <MenuIcon
          darkmode={darkmode}
          clicked={clicked}
          click={menuIconSelect}
        />
        {darkmode ? (
          <Link to="/">
            <img className="youtube_logo" src={ytLogo} alt="logo" />
          </Link>
        ) : (
          <Link to="/">
            <img className="youtube_logo" src={ytLogo} alt="logo" />
          </Link>
        )}
      </div>

      <div className="searchbar">
        <input
          onChange={e => setInputsearch(e.target.value)}
          value={inputsearch}
          placeholder="Search"
          type="text"
          onKeyDown={handlekeyDown}
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
