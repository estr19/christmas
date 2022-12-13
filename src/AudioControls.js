import React from "react";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => (
  <div className="audio-controls">
    <button
      onClick={onPrevClick}
      className="prev"
    >
      <span className="material-symbols-outlined">skip_previous</span>
    </button>
    {isPlaying ? (
      <button
        onClick={() => onPlayPauseClick(false)}
        className="pause"
      >
        <span className="material-symbols-outlined">pause_circle_outline</span>
      </button>
    ) : (
      <button
        onClick={() => onPlayPauseClick(true)}
        className="play"
      >
        <span className="material-symbols-outlined">play_circle</span>
      </button>
    )}
    <button
      onClick={onNextClick}
      className="next"
    >
      <span className="material-symbols-outlined">skip_next</span>
    </button>
  </div>
);

export default AudioControls;
