import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Recommended from './Recomended.js';
import Searchpage from './Searchpage';
import youtube from './youtube.js';

function App() {
  const [clicked, setClicked] = useState(false)
  const [darkmode, setDarkmode] = useState(false) 

  const menuIconSelect = () => {
    setClicked(!clicked)
  }

  const toggleChecked = () => {
    setDarkmode((prev) => !prev);
  };

  const handleFormSubmit = async (searchterm) => {
    const response = await youtube.get('/search', {
        params: {
            q: searchterm
        }
    })

    console.log(response)
}

  return (
          <>
            <Router>
              <Header handleFormSubmit={handleFormSubmit} darkmode={darkmode} clicked={clicked} menuIconSelect={menuIconSelect}/>
              <Switch>
                <Route path="/search/:searchTerm">
                <div className="App_page">
                  <Sidebar darkmode={darkmode} toggleChecked={toggleChecked} clicked={clicked} />
                  <Searchpage />    
                </div>
                </Route>
                <Route path="/">
                <div className="App_page">
                  <Sidebar darkmode={darkmode} toggleChecked={toggleChecked} clicked={clicked} />
                  <Recommended darkmode={darkmode} clicked={clicked}/>    
                </div>
                </Route>
              </Switch>
            </Router>



            
          </>
        
  );
}

export default App;
