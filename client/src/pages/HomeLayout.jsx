import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/utils/header/Header";
import styled from "styled-components";

const LayoutWrapper = styled.main`
  width: 100%;
`;

const HomeLayout = () => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>

      {/* <footer>Footer</footer> */}
    </>
  );
};

export default HomeLayout;
