import React from "react";
import "./css/music-player.css";

import { useSelector } from "react-redux";

const MusicPlayer = () => {
  const selectedTrack = useSelector((state) => state.player.selectedTrack);
  
  return (
    <div className="music-player">
      <div className="controls">
        <div className="left">Previous</div>
        <div className="play">Play</div>
        <div className="right">Next</div>
      </div>
      {selectedTrack ? (
        <div className="artist-details">
          <p className="track-name">{selectedTrack.title}</p>
          <p className="artist-name">{selectedTrack.artist.name}</p>
        </div>
      ) : null}
    </div>
  );
};

export default MusicPlayer;
