import React, { useState, useRef, useEffect } from "react";
import AudioControls from "./AudioControls";

const AudioPlayer = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, artist, audioSrc } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));
  const isReady = useRef(false);

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const toPreviousTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      isReady.current = true;
    }
  }, [audioSrc]);

  return (
    <div className="audio-player centered">
      <p className="title"><span className="opaque">"{title}"</span></p>
      <p className="artist"><span className="opaque">{artist}</span></p>
      <AudioControls
        isPlaying={isPlaying}
        onPlayPauseClick={setIsPlaying}
        onNextClick={toNextTrack}
        onPrevClick={toPreviousTrack}
      />
    </div>
  );
};

export default AudioPlayer;