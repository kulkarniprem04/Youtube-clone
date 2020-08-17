import React from 'react';
import './SidebarRow.css';


function SidebarRow({ darkmode, clicked, Selected, Icon, Title }) {
    return (
        <div className={`sidebarrow ${Selected && "selected"} ${clicked === true && "sidebarrow_clicked"} ${darkmode === true && "darkmode"}`}>
            <Icon className="sidebarrow_icon"/>
            <h2 className="sidebarrow_text">{Title}</h2>
        </div>
    )
}

export default SidebarRow
