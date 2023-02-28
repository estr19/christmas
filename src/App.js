import React, {useState} from 'react';
import {useEffect} from 'react';
import AudioPlayer from "./AudioPlayer";
import { tracks } from  './tracks';

function App() {
  let showDate = new Date("January 1, 2024 00:00"); //
  const [showTime, setShowTime] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showDiscussion, setShowDiscussion] = useState(false);
  
  const meetingCountdown = () => {
    let newObjects = [];
    const today = new Date();
    const difference = showDate - today;
    
    let displayDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    let displayHours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let displayMinutes = Math.floor((difference / 1000 / 60) % 60);
    let displaySeconds = Math.floor((difference / 1000) % 60);
    
    if (displayDays < 10) displayDays = "0" + displayDays;
    if (displayHours < 10) displayHours = "0" + displayHours;
    if (displayMinutes < 10) displayMinutes = "0" + displayMinutes;
    if (displaySeconds < 10) displaySeconds = "0" + displaySeconds;

    if (difference > 0) {
      newObjects = {
        days: displayDays,
        hours: displayHours,
        minutes: displayMinutes,
        seconds: displaySeconds,
      }
    } else {
      setShowDiscussion(true);
    }
    return (
      setShowTime(newObjects),
      setLoading(false)
    )
  }

  useEffect(() => {
    const tick = setTimeout(() => {
      meetingCountdown();
    }, 1000);
    return () => clearInterval(tick);
  });

  return (
    <div>
      <div id="stickyTop">
        {isLoading ? 'Loading . . . ' : 
        <p className='mb-0'>
        {showDiscussion ? (
          <p className='mb-0'>
            Happy New Year! Happy New Year!
          </p>
        ) : (
          <p className='mb-0'>
            Countdown until January 1st, 2024: &nbsp; <span className='text-light'>{showTime.days}</span> &nbsp; days, &nbsp; <span className='text-light'>{showTime.hours}</span> &nbsp; hours, &nbsp; <span className='text-light'>{showTime.minutes}</span> &nbsp; minutes, &nbsp; <span className="pulse">{showTime.seconds}</span> &nbsp; seconds left.
          </p>
        )}</p>}
      </div>
      <div className="d-flex row mt-5 p-4 pe-lg-0 pt-lg-5 justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center mt-5 p-5">
          <h1 className="display-4 fw-bold lh-1">
            &nbsp; My Favorite Holiday Playlist &nbsp;
          </h1>
          <br></br>
          <br></br>
          <p className="opaque fs-6 text fw-light">
            Some of my all-time favorites - old and new, English and Russian,
            Christmas and New Year!
          </p>
          <br></br>
          <AudioPlayer tracks={tracks} />
        </div>
        <br></br>
        <div id="list" className="opaque" style={{ display: "none" }}>
          {tracks.map((element) => {
            const { title, artist, audioSrc } = element;
            return (
              <li key={audioSrc + artist}>
                <b>"{title}"</b> by <i>{artist}</i>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
