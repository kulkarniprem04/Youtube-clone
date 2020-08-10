import axios from "axios";
//const KEY = 'AIzaSyBO_F93b9bqvrnpXYsVsJvJ1dr-ouT8PHY';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: "AIzaSyBO_F93b9bqvrnpXYsVsJvJ1dr-ouT8PHY"
  }
});
