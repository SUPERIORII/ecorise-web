import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CurrentUser from "../Navbar/CurrentUser";
import logo from "../../assets/logo.png";

import {
  AiOutlineMenu,
  AiFillFacebook,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaHome, FaBookmark, FaSearch } from "react-icons/fa";
// import "./navbar.css";
import { useAuthContext } from "../../context/AppContext";
import { navLinks, socialIcon } from "../../sources";
import Links from "../features/Links";

const Navbar = ({ sidebarRef }) => {
  const { currentUser } = useAuthContext();
  const showSidebar = () => {
    const sidebar = sidebarRef.current;
    sidebar.classList.add("show");
  };

  return (
    <header className="fixed left-0 right-0 h-16 bg-base-300 flex justify-between items-center z-[100] px-6">
      <div className="cursor-pointer transition-opacity duration-300 z-50">
        <NavLink to="/">
          <img src={logo} className="h-12 hidden lg:block" alt="Ecorise Logo" />
        </NavLink>
        <AiOutlineMenu className="text-3xl lg:hidden" onClick={showSidebar} />
      </div>

      {/* NAVBAR */}
      <ul className="menu menu-focus menu-horizontal hidden lg:flex items-center justify-center gap-8">
        {/* NAVLINKS */}
        <Links links={navLinks} />
      </ul>

      {/* right header */}
      {/* dynamic side */}
      <div className="flex items-center">
        {!currentUser ? (
          <div className="flex items-center text-lg menu-xl">
            <Links links={socialIcon} />

            <NavLink to="/login" className="btn btn-primary">
              Login Now
            </NavLink>
          </div>
        ) : (
          <CurrentUser />
        )}
        {/* Login User*/}
      </div>
    </header>
  );
};

export default Navbar;
