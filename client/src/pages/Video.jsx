import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeDown,
  FaVolumeUp,
} from "react-icons/fa";
import { BiFullscreen, BiExitFullscreen, BiCaptions,  BiVolumeMute, BiVolumeFull, BiVolumeLow } from "react-icons/bi";

const VideoContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin-inline: auto;

  position: relative;

  .video-control-container {
    position: absolute;
    bottom: 0;
    left: 0;
    top: 90%;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    transition: all 0.5s ease-in-out;
    /* opacity: 0; */

    display: flex;
    align-items: center;
    }

  .all-controls {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
  }

  .video-control-container .all-controls button {
    background: none;
    outline: none;
    border: none;
    color: white;
    width: 50px;
    height: 50px;
    font-size: 20px;
    padding: 0.5rem;
    cursor: pointer;
  }

  &:hover .video-control-container {
    opacity: 1;
  }
  &:focus-within .video-control-container {
    opacity: 1;
  }

  /* play and pause button */
  .play-icon,
  .paused-icon {
    display: none;
  }

  &.paused .play-icon {
    display: block;
  }
  &:not(.paused) .paused-icon {
    display: block;
  }

  /* volume controls */
  .muted,
  .low,
  .high {
    display: none;
  }

  &[data-volume="muted"] .muted {
    display: block;
  }
  &[data-volume="low"] .low {
    display: block;
  }
  &[data-volume="high"] .high {
    display: block;
  }

  /* full screen  and mini screen*/
  .full-screen,
  .mini-screen {
    width: 100%;
  }
  &.full-screen {
    min-height: 100%;
  }

  &.mini-screen {
    min-height: 90%;
  }

  /* full screen style */
  &.full-screen .close-icon {
    display: none;
  }
  &:not(.full-screen) .open-icon {
    display: none;
  }

  video {
    width: 100%;
  }
`;

const Video = () => {
  const [isPlaying, setPlaying] = useState(true);

  const videoRef = useRef(null);

  // playing and pausing video function
  const handlePlay = () => {
    setPlaying((prev) => !prev);
    console.log(isPlaying);

    console.log(videoRef.current);

    isPlaying ? videoRef.current.play() : videoRef.current.pause();
  };
  // switch statement

  return (
    <VideoContainer className="video-container full-screen" data-volume="high">
      <BiVolumeMute/>, <BiVolumeFull/>, <BiVolumeLow/>
      <div className="video-control-container">
        <div className="all-controls">
          {/* play pause icons */}
          <button className="play-paused-btn" onClick={handlePlay}>
            <FaPlay className="play-icon" />
            <FaPause className="paused-icon" />
          </button>

          {/* full sceen icons */}
          <button className="fullscreen-btn">
            <BiFullscreen className="open-icon" />
            <BiExitFullscreen className="close-icon" />
          </button>
          {/* volume icon */}
          <button className="volume-btn">
            <FaVolumeMute className="muted" />
            <FaVolumeDown className="low" />
            <FaVolumeUp className="high" />
          </button>

          {/* caption-icon */}
          <button className="caption-btn">
            <BiCaptions className="" />
          </button>
        </div>
      </div>
      <video src="../src/assets/video.mp4" ref={videoRef}></video>
    </VideoContainer>
  );
};

export default Video;
