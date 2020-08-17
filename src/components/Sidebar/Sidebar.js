import React from 'react';
import SidebarRow from './SidebarRow.js';
import DarkTheme from './DarkTheme.js';
import './sidebar.css';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import VideolibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutLinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar({ darkmode, toggleChecked, clicked }) {
    return (
        <div className={`sidebar ${clicked === true && "sidebar_clicked"} ${darkmode === true && "darkmode"}`}>
            {
                clicked === true
                ?<div>
                    <SidebarRow darkmode={darkmode} clicked={clicked} Selected Icon={HomeIcon} Title="Home"/>
                    <SidebarRow darkmode={darkmode} clicked={clicked} Icon={WhatshotIcon} Title="Trending"/>
                    <SidebarRow darkmode={darkmode} clicked={clicked} Icon={SubscriptionsIcon} Title="Subscriptions"/>
                    <SidebarRow darkmode={darkmode} clicked={clicked} Icon={VideolibraryIcon} Title="Library"/>
                </div>
                :<div>
                    <SidebarRow darkmode={darkmode} Selected Icon={HomeIcon} Title="Home"/>
                    <SidebarRow darkmode={darkmode} Icon={WhatshotIcon} Title="Trending"/>
                    <SidebarRow darkmode={darkmode} Icon={SubscriptionsIcon} Title="Subscriptions"/>
                    <hr/>
                    <SidebarRow darkmode={darkmode} Icon={VideolibraryIcon} Title="Library"/>
                    <SidebarRow darkmode={darkmode} Icon={HistoryIcon} Title="History"/>
                    <SidebarRow darkmode={darkmode} Icon={OndemandVideoIcon} Title="Your videos"/>
                    <SidebarRow darkmode={darkmode} Icon={WatchLaterIcon} Title="Watch Later"/>
                    <SidebarRow darkmode={darkmode} Icon={ThumbUpAltOutLinedIcon} Title="Liked Videos"/>
                    <SidebarRow darkmode={darkmode} Icon={ExpandMoreOutlinedIcon} Title="Show More"/>
                    <DarkTheme darkmode={darkmode} toggleChecked={toggleChecked}/>
                </div>
            }
            
        </div>
    )
}

export default Sidebar
