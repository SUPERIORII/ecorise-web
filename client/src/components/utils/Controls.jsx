import React from "react";

import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

const ControlsWrapper = styled.div`
  /* controls */
  .controls {
    position: absolute;
    bottom: 350px;
    top: 0px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .controls button {
    background: none;
    border: none;
    outline: none;
    width: 40px;
    height: 40px;
    /* padding: 1rem; */
    color: white;
    cursor: pointer;
  }
`;

const Controls = ({ isFullScreen, setisFullScreen }) => {
  const handleFullscreen = () => {
    setisFullScreen(!isFullScreen);
  };
  return (
    <ControlsWrapper>
      <div className="controls">
        {/* close button */}
        <button>
          <AiOutlineClose className="icon" />
        </button>

        {/* fullscreen button  */}
        <div className="control-btn">
          <button className="" onClick={handleFullscreen}>
            <BsFullscreen className="icon wide" />
            <BsFullscreenExit className="icon small" />
          </button>
        </div>
      </div>
    </ControlsWrapper>
  );
};

export default Controls;
