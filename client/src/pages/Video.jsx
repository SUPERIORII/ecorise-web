import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeDown,
  FaVolumeUp,
} from "react-icons/fa";
import {
  BiFullscreen,
  BiExitFullscreen,
  BiCaptions,
  BiVolumeMute,
  BiVolumeFull,
  BiVolumeLow,
} from "react-icons/bi";
import Header from "../components/utils/header/Header";

const VideoContainer = styled.div`
  max-width: 1000px;
  max-height: 450px;
  width: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  position: relative;
  color: white;
  background-color: black;

  .video-control-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 70px;
    /* opacity: 0; */
    transition: 150ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.3rem;
    background-color: rgba(0, 0, 0, 0.1);

    padding: 0 10px;
  }

  .video-control-container .btn-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding: 0, 2rem;
    width: 100%;
  }

  .left-controls,
  .middle-controls,
  .right-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & .video-control-container button {
    width: 30px;
    height: 30px;
    background: none;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .video-icon {
    font-size: 15px;
  }

  &:hover .video-control-container,
  &:focus-within .video-control-container {
    opacity: 1;
  }

  /* controls styles */
  &.paused .play-icon {
    display: none;
  }
  &:not(.paused) .pause-icon {
    display: none;
  }

  /* fullscreen style */
  .caption,
  .wide,
  .small {
    font-size: 24px;
  }

  &.fullscreen {
    max-width: initial;
    width: 100%;
  }

  &.fullscreen {
    max-height: 80vh;
  }

  .timeline-container {
    height: 7px;
    margin-inline: 0.5rem;
    cursor: pointer;
    display: flex;
    width: 100%;
    align-items: center;
  }

  .timeline {
    height: 3px;
    background-color: rgba(100, 100, 100, 0.5);
    width: 100%;
    border-radius: 5px;
    position: relative;
  }

  .timeline-container:hover .timeline {
    height: 100%;
  }

  .timeline:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: calc(100% - var(--preview-position, 0.5) * 100%);
    border-radius: 5px;
    display: none;

    background-color: rgb(150, 150, 150);
  }

  .timeline-container:hover .timeline:before {
    display: block;
  }

  .timeline:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: calc(100% - var(--progress-position) * 100%);
    background-color: var(--color-success);
  }

  .timeline-container .thumbnail-pointer {
    /* scale: 1; */
    position: absolute;
    height: 200%;
    top: -50%;
    transform: translateX(50%) scale(scale);
    left: calc(var(--progress-position) * 100%);
    background-color: var(--color-success);
    aspect-ratio: 1/1;
    border-radius: 50%;
    z-index: 1000;
  }

  /* volume-container */

  .left-controls:hover .volumecontrol {
    display: block;
  }

  .volumecontrol {
    width: 90px;
    height: 5px;
    border-radius: 1px;
    background-color: aliceblue;
    position: relative;
    /* display: none; */
    transition: 2s ease-in-out;
  }

  .volumecontrol::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;

    left: 0;
    right: calc(100% - var(--volume-level, 1) * 100%);
    background-color: var(--color-success);
  }

  .volume-indicator {
    scale: 1;
    position: absolute;
    height: 200%;
    top: -50%;
    left: calc(var(--volume-level, 1) * 100%);
    /* transform: translate(50%) scale(scale); */
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: var(--color-success);
  }

  .volume-muted-icon,
  .volume-low-icon,
  .volume-high-icon {
    font-size: 24px;
    display: none;
  }

  &[data-volume-level="muted"] .volume-muted-icon {
    display: block;
  }
  &[data-volume-level="low"] .volume-low-icon {
    display: block;
  }
  &[data-volume-level="high"] .volume-high-icon {
    display: block;
  }

  /* fullscreen */
  &.fullscreen .wide {
    display: none;
  }
  &:not(.fullscreen) .small {
    display: none;
  }

  /* thumbnail image */
  .preview-img {
    position: absolute;
    border: 2px solid white;
    aspect-ratio: 15/8;
    height: 5rem;
    top: -1rem;
    transform: translate(-50%, -100%);
    border-radius: 0.25rem;
    left: calc(var(--preview-position) * 100%);

    display: none;
  }

  .timeline-container:hover .preview-img {
    display: block;
  }
  /* video style*/
  video {
    width: 100%;
    /* border-radius: 10px; */
    background: none;
  }
`;

const Video = () => {
  const [isPlaying, setPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const timelineContainerRef = useRef(null);
  const playbackRateRef = useRef(null);
  const mutedBtnRef = useRef(null);
  const volumecontrolRef = useRef(null);
  let isScrubbing = false;
  let isTimelineScrubbing = false;

  // function to muted the video
  const handleMuted = (e) => {
    // mute or give the video sound
    videoRef.current.muted = !videoRef.current.muted;
    let volumeLevel;

    // get the video volume level the slider
    timelineContainerRef.current.style.setProperty(
      "--volume-level",
      volumeLevel
    );
    if (videoRef.current.muted) {
      volumecontrolRef.current.style.setProperty("--volume-level", 0);
      if (videoRef.current.muted || videoRef.current.volume === 0) {
        volumeLevel = "muted";
      }
    } else {
      volumecontrolRef.current.style.setProperty("--volume-level", 1);

      if (videoRef.current.volume >= 0.5) {
        volumeLevel = "high";
      } else {
        volumeLevel = "low";
      }
    }

    videoContainerRef.current.dataset.volumeLevel = volumeLevel;
    console.log(videoRef.current.muted);

    // let percent =  ;

    // if(percent === 0) {
    //   console.log(percent = 1);

    // } else {
    //   console.log(percent = 0);

    // }
  };

  const handleVolumeChange = (e) => {
    const rect = volumecontrolRef.current.getBoundingClientRect();

    let percent =
      Math.min(Math.max(0, e.pageX - rect.x), rect.width) / rect.width;
    const videoVolume = (videoRef.current.volume = percent);
    const videoMuted = (videoRef.current.muted = percent === 0);
    let volumeLevel;

    if (videoRef.current.muted || videoRef.current.volume === 0) {
      volumeLevel = "muted";
    } else if (videoRef.current.volume >= 0.5) {
      volumeLevel = "high";
    } else {
      volumeLevel = "low";
    }

    videoContainerRef.current.dataset.volumeLevel = volumeLevel;
    console.log("video Muted:", videoMuted, "video Volume:", videoVolume);
  };

  // volume slider function
  const handleVolumeSlider = (e) => {
    const rect = volumecontrolRef.current.getBoundingClientRect();
    let percent =
      Math.min(Math.max(0, e.pageX - rect.x), rect.width) / rect.width;

    isTimelineScrubbing = (e.buttons & 1) === 1;

    console.log(percent);

    if (isTimelineScrubbing) {
      volumecontrolRef.current.style.setProperty("--volume-level", percent);
      handleVolumeChange(e);
    }
  };

  // playing and pausing video function
  const handlePlay = () => {
    setPlaying((prev) => !prev);

    // play and pause the video and toggle the pause class on the video container
    if (isPlaying) {
      videoRef.current.play();
      videoContainerRef.current.classList.add("paused");
    } else {
      videoRef.current.pause();
      videoContainerRef.current.classList.remove("paused");
    }
  };

  // video duration functionality
  const handleTimeUpdata = () => {
    if (videoRef.current) {
      setCurrentTime(formatDuration(videoRef.current.currentTime));
    }
    const percent = videoRef.current.currentTime / videoRef.current.duration;

    timelineContainerRef.current.style.setProperty(
      "--progress-position",
      percent
    );
  };
  const handleLoadedData = () => {
    if (videoRef.current)
      return setTotalTime(formatDuration(videoRef.current.duration));
  };

  const leadingZero = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });
  // format the video time
  const formatDuration = (time) => {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 3600);

    return `${leadingZero.format(hours)} : ${leadingZero.format(
      minutes
    )} : ${leadingZero.format(seconds)}`;
  };

  // fullscreen functionality
  const handleFullScreen = () => {
    if (document.fullscreenElement === null) {
      videoContainerRef.current.requestFullscreen();
      videoContainerRef.current.classList.add(
        "fullscreen",
        document.fullscreenElement
      );
    } else {
      document.exitFullscreen();
      videoContainerRef.current.classList.remove(
        "fullscreen",
        !document.fullscreenElement
      );
    }
  };

  // timeline container
  const handleTimline = (e) => {
    const rect = timelineContainerRef.current.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, e.pageX - rect.x), rect.width) / rect.width;

    timelineContainerRef.current.style.setProperty(
      "--preview-position",
      percent
    );

    if (isScrubbing) {
      e.preventDefault();
      // thumbnailImg = previewImg.src

      timelineContainerRef.current.style.setProperty(
        "--progress-position",
        percent
      );
    }
  };

  let wasPaused;
  // iscrubbing class
  const handleScrubbling = (e) => {
    const rect = timelineContainerRef.current.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, e.pageX - rect.x), rect.width) / rect.width;

    isScrubbing = (e.buttons & 1) === 1;

    console.log(isScrubbing);

    if (isScrubbing) {
      wasPaused = videoRef.current.paused;
      videoRef.current.pause();
    } else {
      videoRef.current.currentTime = percent * videoRef.current.duration;
      if (!wasPaused) videoRef.current.play();
    }

    handleTimline(e);
  };

  document.addEventListener("mouseup", (e) => {
    if (isScrubbing) handleScrubbling(e);
  });

  document.addEventListener("mousemove", (e) => {
    if (isScrubbing) handleTimline(e);
  });

  const handlePlayBack = () => {
    let newPlayBackRate = videoRef.current.playbackRate + 0.25;

    if (newPlayBackRate > 2) newPlayBackRate = 0.25;
    videoRef.current.playbackRate = newPlayBackRate;
    playbackRateRef.current.textContent = `${newPlayBackRate}x`;
    console.log(newPlayBackRate);
  };

  // switch statement
  return (
    <section className="general-container">
      {/* header */}
      <Header />
      <VideoContainer
        className="video-container "
        // onClick={handlePlay}
        ref={videoContainerRef}
        data-volume-level="high"
      >
        <div className="video-control-container">
          {/* timeline */}
          <div
            className="timeline-container"
            ref={timelineContainerRef}
            onMouseMove={(e) => handleTimline(e)}
            onMouseDown={(e) => handleScrubbling(e)}
          >
            <div className="timeline">
              <img className="preview-img" />
              <div className="thumbnail-pointer"></div>
            </div>
          </div>
          {/* thumbnail */}
          <div className="btn-controls">
            {/* volume container */}
            <div className="left-controls">
              <button
                className="volume-btn"
                onClick={handleMuted}
                ref={mutedBtnRef}
              >
                <BiVolumeMute className="volume-muted-icon video-icon" />
                <BiVolumeLow className="volume-low-icon video-icon" />
                <BiVolumeFull className="volume-high-icon video-icon" />
              </button>

              <div
                className="volumecontrol"
                ref={volumecontrolRef}
                onMouseMove={handleVolumeSlider}
              >
                <div className="volume-indicator"></div>
              </div>
              {/* <input type="range" /> */}
            </div>

            {/* duration */}
            <div className="middle-controls">
              <div className="current-time">
                {currentTime === 0 ? "00:00:00" : currentTime}
              </div>
              <button className="play-pause-btn" onClick={handlePlay}>
                <FaPlay className="play-icon video-icon" />
                <FaPause className="pause-icon video-icon" />
              </button>

              <div className="full-time">
                {/* 00:00 */}
                {totalTime}
              </div>
            </div>

            <div className="right-controls">
              {/*  caption btn*/}
              <button
                className="caption-btn"
                ref={playbackRateRef}
                onClick={handlePlayBack}
              >
                <span>1x</span>
              </button>

              <button className="caption-btn">
                <BiCaptions className="caption video-icon" />
              </button>

              {/*  fullscreen btn*/}
              <button
                className="fullscreen-btn"
                onClick={(e) => handleFullScreen(e)}
              >
                <BiFullscreen className="wide video-icon" />
                <BiExitFullscreen className="small video-icon" />
              </button>
            </div>
          </div>
        </div>

        <video
          src="../src/assets/video.mp4"
          ref={videoRef}
          onTimeUpdate={handleTimeUpdata}
          onLoadedData={handleLoadedData}
          // onVolumeChange={handleVolumeChange}
        ></video>
      </VideoContainer>
    </section>
  );
};

export default Video;
