import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import {
  BiHome,
  BiNews,
  BiExport,
  BiBookmarks,
  BiBroadcast,
  BiAbacus,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import customUrl from "../../../basedUrl";
import MiniTitle from "../title/MiniTitle";
import { useAuthContext } from "../../../context/AppContext";

const Leftbar = styled.aside`
  position: fixed;
  height: 100%;
  top: 15%;
  width: 200px;
  left: -300px;
  transition: 0.5s ease-in-out;

  background-color: white;
  border-right: 1px solid var(--white-300);
  padding: 1rem;
  z-index: 3000;

  &.show {
    left: 0px;
    visibility: visible;
  }

  @media screen and (min-width: 1024px) {
    left: 0px;
    opacity: 1;
    visibility: visible;
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

const LeftSidebar = () => {
  const { toggleState, setToggleState } = useAuthContext();
  const sideBarWidth = useRef(null);


  const Icons = {
    BiHome: <BiHome />,
    BiNews: <BiNews />,
    BiExport: <BiExport />,
    BiBookmarks: <BiBookmarks />,
    BiAbacus: <BiAbacus />,
    BiBroadcast: <BiBroadcast />,
  };

  const { isError, isLoading, data } = useQuery({
    queryKey: ["links"],
    queryFn: async () => {
      const response = await customUrl.get("/api/links");
      return response.data;
    },
  });

  return (
    <Leftbar className={toggleState ? "show" : null} ref={sideBarWidth}>
      <div className="menu items">
        <MiniTitle title="Menu" />
        <div className="nav-menu-wrapper">
          {/* menu */}

          {isError
            ? "error showing menus"
            : isLoading
            ? "Loading menu..., please wait"
            : data.map((link) => {
                const { id, name, link: url } = link;

                return (
                  <div key={id}>
                    <NavLink className="nav-menu" to={url}>
                      <span className="icon">{Icons[link.icon]}</span>
                      <span>{name}</span>
                    </NavLink>
                  </div>
                );
              })}
        </div>
      </div>
    </Leftbar>
  );
};

export default LeftSidebar;
