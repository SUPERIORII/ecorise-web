import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/utils/header/Header";
import styled from "styled-components";
import LeftSidebar from "../components/utils/sidebars/LeftSidebar";
import RightSidebar from "../components/utils/sidebars/RightSidebar";


const LayoutWrapper = styled.main`

  @media screen and (min-width: 475px) {
    /* margin-left: 0px;
    margin-right: 0px; */
  }
  @media screen and (min-width: 1024px) {
    margin-left: 240px;
    margin-right: 400px;
  }
`;

const HomeLayout = () => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <LeftSidebar />
        <Outlet />
        <RightSidebar/>
      </LayoutWrapper>

      {/* <footer>Footer</footer> */}
    </>
  );
};

export default HomeLayout;
