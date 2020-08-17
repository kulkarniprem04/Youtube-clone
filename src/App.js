import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Recommended from "./components/Recomended/Recomended.js";
import Searchpage from "./components/Searchpage/Searchpage.js";
//import youtube from './youtube.js';

function App() {
  const API_KEY = "AIzaSyAlnrOCW5kTF67bddvxA8boYmrFi3-3jNA";
  const [clicked, setClicked] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedvideo, setSelectedvideo] = useState("");
  const [isselected, setIsselected] = useState(false);
  const [recomended_selected, setRecomended_selected] = useState(false);
  const [viewcount, setViewcount] = useState("");
  const [subscribercount, setSubscribercount] = useState("");
  const [videocount, setVideocount] = useState("");

  const menuIconSelect = () => {
    setClicked(!clicked);
  };

  const toggleChecked = () => {
    setDarkmode((prev) => !prev);
  };

  const params = new URLSearchParams({
    part: "snippet",
    maxResults: 10,
    key: API_KEY
  });

  const handleFormSubmit = async (searchterm) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?${params.toString()}&q=${searchterm}`
    );
    const data = await response.json();
    // console.log(data);
    setVideos(data.items);
    //console.log(videos)

    if(data.items[0].id.channelId) {
      const resp = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${data.items[0].id.channelId}&key=${API_KEY}`
      );
      const channeldata = await resp.json();
      // console.log(channeldata);
      setViewcount(channeldata.items[0].statistics.viewCount);
      setSubscribercount(channeldata.items[0].statistics.subscriberCount);
      setVideocount(channeldata.items[0].statistics.videoCount);
    }
    
  };

  // useEffect(() => {
  //   console.log(videos);
  //   console.log(selectedvideo);
  // }, [videos, selectedvideo]);

  const handleSelectedVideo = (video_selected) => {
    setSelectedvideo(video_selected.id.videoId);
    setIsselected(true);
  };

  return (
    <>
      <Router>
        <Header
          handleFormSubmit={handleFormSubmit}
          darkmode={darkmode}
          clicked={clicked}
          menuIconSelect={menuIconSelect}
        />
        <Switch>
          <Route path="/search">
            <div className="App_page">
              <Sidebar
                darkmode={darkmode}
                toggleChecked={toggleChecked}
                clicked={clicked}
              />
              <Searchpage
                videocount={videocount}
                subscribercount={subscribercount}
                viewcount={viewcount}
                darkmode={darkmode}
                isselected={isselected}
                selectedvideo={selectedvideo}
                handleSelectedVideo={handleSelectedVideo}
                videos={videos}
              />
            </div>
          </Route>
          <Route path="/">
            <div className="App_page">
              <Sidebar
                darkmode={darkmode}
                toggleChecked={toggleChecked}
                clicked={clicked}
              />
              <Recommended
                selectedvideo={selectedvideo}
                setSelectedvideo={setSelectedvideo}
                recomended_selected={recomended_selected}
                setRecomended_selected={setRecomended_selected}
                darkmode={darkmode}
                clicked={clicked}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
