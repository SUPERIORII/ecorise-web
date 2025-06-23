import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar";
import { Navbar } from "../components/layout";
import Sidebar from "../components/Sidebar/Sidebar";

const HomeLayout = () => {
  const sidebarRef = useRef(null);

  return (
    <>
      {/* sidebar component */}
      <Navbar sidebarRef={sidebarRef} />
      <Sidebar sidebarRef={sidebarRef} />
      <div className="lg:px-8 pt-20">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
