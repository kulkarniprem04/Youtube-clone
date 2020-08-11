import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Recommended from "./Recomended.js";
import Searchpage from "./Searchpage";
//import youtube from './youtube.js';

function App() {
  const API_KEY = "AIzaSyAlnrOCW5kTF67bddvxA8boYmrFi3-3jNA";
  const [clicked, setClicked] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const [videos, setVideos] = useState([]);

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
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?${params.toString()}&q=${searchterm}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideos(data.items);
      });
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
          <Route path="/search/:searchTerm">
            <div className="App_page">
              <Sidebar
                darkmode={darkmode}
                toggleChecked={toggleChecked}
                clicked={clicked}
              />
              <Searchpage videos={videos} />
            </div>
          </Route>
          <Route path="/">
            <div className="App_page">
              <Sidebar
                darkmode={darkmode}
                toggleChecked={toggleChecked}
                clicked={clicked}
              />
              <Recommended darkmode={darkmode} clicked={clicked} />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
