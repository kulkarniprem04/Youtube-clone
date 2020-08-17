import React from "react";
import "./MenuIcon.css";

function MenuIcon({ darkmode, clicked, click }) {
  return (
    <div>
      <button
        onClick={click}
        className={`toggle_button ${darkmode === true && "darktheme"}`}
      >
        {/* {console.log(clicked)} */}
        <div className="toggle_button_line"></div>
        <div className="toggle_button_line"></div>
        <div className="toggle_button_line"></div>
      </button>
    </div>
  );
}

export default MenuIcon;
