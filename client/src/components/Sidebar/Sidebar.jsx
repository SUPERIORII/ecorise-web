import React, { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./sidebar.css";
import logo from "../../assets/logo.png";

import {
  BiHome,
  BiNews,
  BiExport,
  BiBookmarks,
  BiBroadcast,
  BiAbacus,
  BiSolidDashboard,
} from "react-icons/bi";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import customUrl from "../../basedUrl";
import MiniTitle from "../MiniTitle";
import { useAuthContext } from "../../context/AppContext";

const Sidebar = ({ sidebarRef }) => {
  const { currentUser } = useAuthContext();
  // const { toggleState, setToggleState } = useAuthContext();

  const hideSidebar = () => {
    const sidebar = sidebarRef.current;
    sidebar.classList.remove("show");
  };

  const Icons = {
    BiHome: <BiHome />,
    BiSolidDashboard: <BiSolidDashboard />,
    BiNews: <BiNews />,
    BiExport: <BiExport />,
    BiBookmarks: <BiBookmarks />,
    BiAbacus: <BiAbacus />,
    BiBroadcast: <BiBroadcast />,
    AiOutlineUser: <AiOutlineUser />,
  };

  const { isError, isLoading, data } = useQuery({
    queryKey: ["links"],
    queryFn: async () => {
      const response = await customUrl.get("/api/links");
      return response.data;
    },
  });

  console.log(data);

  return (
    <div
      className=" transition-all duration-300 fixed top-0 bottom-0 w-64 bg-base-300 -left-72 z-[100] "
      ref={sidebarRef}
    >
      <div
        className="top text-base font-bold
       bg-egi-background-color p-4 flex items-center
       justify-between"
      >
        {/* Logo and close icon */}
        <div className="logo flex items-center gap-4">
          <NavLink to="/">
            <img className="w-12 h-12" src={logo} alt="Ecorise Logo" />
          </NavLink>
          <h2 className="text-xl">
            Eco<span className="text-primary">rise</span>
          </h2>
        </div>
        <AiOutlineClose
          className="close icon text-3xl cursor-pointer"
          onClick={hideSidebar}
        />
      </div>
      {/* sidebar links */}
      <ul className="menu menu-focus menu-horizontal flex flex-col mt-10 px-6 transition-all duration-300">
        <MiniTitle title="Menu" />
        
        <NavLink
          to="/about-us"
          className="flex gap-4 items-center h-12 transition-all duration-300 ease-in"
        >
          <BiAbacus className="text-2xl" />
          <h3 className="font-medium text-base">About Us</h3>
        </NavLink>

        <NavLink
          to="/project"
          className="flex gap-4 items-center h-12 transition-all duration-300 ease-in"
        >
          <BiBookmarks className="text-2xl" />
          <h3 className="text-base font-medium">Projects</h3>
        </NavLink>

        <NavLink
          to="/news"
          className="flex gap-4 items-center h-12 transition-all duration-300 ease-in"
        >
          <BiNews className="text-2xl" />
          <h3 className="font-medium text-base">News</h3>
        </NavLink>

        <NavLink
          to="/get-involved"
          className="flex gap-4 items-center h-12 transition-all duration-300 ease-in"
        >
          <BiNews className="text-2xl" />
          <h3 className="text-base font-medium">Get Involved</h3>
        </NavLink>
      </ul>
      {/* admin  */}
      {currentUser && (
        <div>
          <MiniTitle title="" />
          <NavLink
            to="/"
            className="flex gap-4 items-center h-12 transition-all duration-300 ease-in"
          >
            <BiAbacus className="sidebar-icon" />
            <h3 className="font-medium">Dashboard</h3>
          </NavLink>

          <NavLink
            to="/content"
            className="flex gap-4 items-center h-12 transition-all duration-300 ease-in"
          >
            <BiNews className="sidebar-icon" />
            <h3>Manage Contents</h3>
          </NavLink>

          <NavLink
            to="#"
            className="flex gap-4 items-center h-12 transition-all duration-300 ease-in"
          >
            <BiSolidDashboard className="sidebar-icon" />
            <h3>Dashboard</h3>
            <span className="message-count">23</span>
          </NavLink>
        </div>
      )}
    </div>
    // <aside

    //   {/* Admin sidebar access*/}
    //   {currentUser && (
    //     <div className="sidebar-links">
    //       <MiniTitle title="" />
    //       <a href="#" className="active">
    //         <BiSolidDashboard className="sidebar-icon" />

    //         <h3>Dashboard</h3>
    //       </a>

    //       <a href="#" className="">
    //         <BiSolidDashboard className="sidebar-icon" />
    //         <h3>Dashboard</h3>
    //         <span className="message-count">23</span>
    //       </a>

    //     </div>
    //   )}
    //   {/* <div className="sidebar active">
    //       {isError
    //         ? "error showing menus"
    //         : isLoading
    //         ? "Loading menu..., please wait"
    //         : data.map((link) => {
    //             const { id, menu_name, link: url } = link;

    //             return (
    //               <div key={id}>
    //                 <NavLink className="nav-menu" to={url}>
    //                   <span className="icon">{Icons[link.icon]}</span>
    //                   <span>{menu_name}</span>
    //                 </NavLink>
    //               </div>
    //             );
    //           })}
    //     </div> */}
    // </aside>
  );
};

export default Sidebar;
