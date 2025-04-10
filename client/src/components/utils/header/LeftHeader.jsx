import React from "react";
import logo from "/src/assets/logo.png";

import { useAuthContext } from "../../../context/AppContext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const Leftheader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.2rem 1rem;

  .nav-menu-icon,
  .nav-close-icon {
    font-size: 2rem;
    margin-right: 1rem;
    transition: 0.8s ease-in-out;
    cursor: pointer;
  }

  .nav-menu-icon:hover,
  .nav-close-icon:hover {
    transform: rotate(90deg);
  }

  .nav-left {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .logo {
    width: 40px;
    height: 40px;
  }

  .nav-left h3 {
    color: #4caf50;
    font-size: 1rem;
    margin-left: 10px;
  }

  @media screen and (min-width: 1024px) {
    .menu-icon {
      display: none;
    }
  }
`;

const LeftHeader = () => {
  const { toggleState, setToggleState } = useAuthContext();

  const displayIcon = () => {
    const newState = !toggleState;
    setToggleState(newState);
  };

  return (
    <Leftheader>
      <div className="menu-icon">
        {toggleState ? (
          <AiOutlineClose className="nav-close-icon" onClick={displayIcon} />
        ) : (
          <AiOutlineMenu className="nav-menu-icon" onClick={displayIcon} />
        )}
      </div>

      {/* ===============Logo=============  */}

      <div className="nav-left">
        <img className="logo" src={logo} alt="Logo" />
        <h3>EGI</h3>
      </div>
    </Leftheader>
  );
};

export default LeftHeader;
