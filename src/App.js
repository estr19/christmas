import React from "react";
import AudioPlayer from "./AudioPlayer";
import { tracks } from  './tracks';

function App() {
  return (
    <div className="d-flex row mt-5 p-4 pe-lg-0 pt-lg-5 justify-content-center align-items-center">
      <div className="d-flex flex-column align-items-center mt-5 p-5">
        <h1 className="display-4 fw-bold lh-1">Merry Christmas and Happy New Year!</h1>
        <br></br>
        <br></br>
        <p className="opaque fs-6 text fw-light">Some of my all-time favorites - old and new, English and Russian, Christmas and New Year!</p>
        <br></br>
        <AudioPlayer tracks={tracks} />
      </div>
      <br></br>
      <div id="list" className='opaque' style={{display: 'none'}}>
        {tracks.map((element => {
          const {title, artist, audioSrc} = element;
          return (
            <li key={audioSrc}>"{title}" by <i>{artist}</i></li>
          )
        }))}
      </div>
    </div>
  );
}

export default App;
