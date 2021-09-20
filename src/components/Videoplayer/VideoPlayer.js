import { Grid } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";
import CloseIcon from "@material-ui/icons/Close";

// class Wrapper extends React.Component {
//   render() {
//     return (
//       <Grid container>
//         <CloseIcon />
//       </Grid>
//     );
//   }
// }

function ResponsivePlayer({ selectedvideo }) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/embed/${selectedvideo}`}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
}

export default ResponsivePlayer;
