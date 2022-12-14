import React from "react";
import AudioPlayer from "./AudioPlayer";
import { tracks } from  './tracks';

function App() {
  return (
    <div className="d-flex justify-content-md-center align-items-center vh-100">
      <div className="centered">
        <h1 className="display-4 fw-bold lh-1 glow">Merry Chrsitmas and Happy New Year!</h1>
        <br></br>
        <br></br>
        <p className="opaque">Some of my all-time favorites - old and new, English and Russian, Christmas and New Year!</p>
        <br></br>
        <AudioPlayer tracks={tracks} />
      </div>
    </div>
  );
}

export default App;
