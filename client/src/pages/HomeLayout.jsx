import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/utils/header/Header";
import styled from "styled-components";
import LeftSidebar from "../components/utils/sidebars/LeftSidebar";
import RightSidebar from "../components/utils/sidebars/RightSidebar";

const LayoutWrapper = styled.main`
  @media screen and (min-width: 768px) {
    margin-left: 9%;
    margin-right: 90px;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 220px;
    margin-right: 360px;
  }
`;

const HomeLayout = () => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <LeftSidebar />
        <Outlet />
        <RightSidebar />
      </LayoutWrapper>

      {/* <footer>Footer</footer> */}
    </>
  );
};

export default HomeLayout;
