import React from "react";
import AudioPlayer from "./AudioPlayer";
import { tracks } from  './tracks';

function App() {
  return (
    <div className="d-flex justify-content-md-center align-items-center vh-100">
      <div>
        <h1 className="display-4 fw-bold lh-1"><span className="opaque">Merry Chrsitmas and Happy New Year!</span></h1>
        <br></br>
        <br></br>
        <p><span className="opaque">Some of my all-time favorites - old and new, English and Russian, Christmas and New Year!</span></p>
        <br></br>
        <AudioPlayer tracks={tracks} />
      </div>
    </div>
  );
}

export default App;
