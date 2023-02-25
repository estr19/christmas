import React from "react";

const AudioControls = ({
  onListClick,
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => (
  <div className="audio-controls">
    <button
      onClick={onListClick}
      className="songlist opaque"
    >
      <span className="material-symbols-outlined">menu</span>
    </button>
    <button
      onClick={onPrevClick}
      className="prev opaque"
    >
      <span className="material-symbols-outlined">skip_previous</span>
    </button>
    {isPlaying ? (
      <button
        onClick={() => onPlayPauseClick(false)}
        className="pause opaque"
      >
        <span className="material-symbols-outlined">pause</span>
      </button>
    ) : (
      <button
        onClick={() => onPlayPauseClick(true)}
        className="play opaque"
      >
        <span className="material-symbols-outlined">play_arrow</span>
      </button>
    )}
    <button
      onClick={onNextClick}
      className="next opaque"
    >
      <span className="material-symbols-outlined">skip_next</span>
    </button>
    <button
      className="shuffle opaque"
    >
      <span className="material-symbols-outlined">shuffle</span>
    </button>
  </div>
);

export default AudioControls;
