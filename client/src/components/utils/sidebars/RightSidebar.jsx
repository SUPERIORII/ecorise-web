import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import customUrl from "../../../basedUrl";
import MiniTitle from "../title/MiniTitle";
import { useAuthContext } from "../../../context/AppContext";
import classNames from "classnames";

const Rightbar = styled.aside`
  position: fixed;
  height: 100%;
  top: 15%;
  width: 250px;
  /* transform: translateX(-300px); */
  right: -300px;
  background-color: white;
  border-right: 1px solid var(--white-300);
  padding: 1rem;
  transition: 0.5s ease-in-out;

  &.show {
    opacity: 1;

    /* transform: translateX(0); */
    left: 0px;

    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    /* transform: translateX(0); */
    right: 0px;

    /* opacity: 1; */
  }
  .nav-menu-wrapper {
    margin-top: 20px;
  }

  .nav-menu > a {
    color: #555555;
    text-decoration: none;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.7rem;
    cursor: pointer;
    margin-bottom: 0.5rem;
    text-decoration: none;
  }

  .nav-menu > span {
    color: #555555;
    font-weight: 600;
  }

  .nav-menu:hover {
    background-color: var(--white-200);
  }

  .nav-menu .icon {
    font-size: 23px;
  }
`;


const RightSidebar = () => {
  return <Rightbar>RightSideBar</Rightbar>;
};

export default RightSidebar;
