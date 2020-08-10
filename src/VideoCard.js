import React from 'react'
import './VideoCard.css'
import Avatar from '@material-ui/core/Avatar';

function VideoCard({ darkmode, image, Title, ChannelName, Text, Channelimage}) {
    return (
                <div className={`video_card ${darkmode === true && "darkmode"}`}>
                    <img className="videocard_thumbnail" alt="thumbnail" src={image} />
                    <div className="videocard_info">
                        <Avatar
                            className="videocard_avatar"
                            alt="channel_image"
                            src={Channelimage} 
                            />
                        <div className="videocard_text">
                            <h4>{Title}</h4>
                            <p>{ChannelName}</p>
                            <p>{Text}</p>
                        </div>
                    </div>
                </div>
    )
}

export default VideoCard
