import React, { useState } from "react";
import LeftHeader from "./LeftHeader";
import MiddleHeader from "./MiddleHeader";
import RightHeader from "./RightHeader";
import { Link } from "react-router-dom";

// import Wrapper from "../../styles/Header";
import styled from "styled-components";

const Wrapper = styled.header`
  border-bottom: 1px solid #eeeeee;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--white-100);
  z-index: 2000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
`;

const Header = () => {
  return (
    <Wrapper>
      <LeftHeader />
      {/*<MiddleHeader />*/}
      <RightHeader />
      {/* <LowerHeader /> */}
      <Link to="/login">login</Link>
    </Wrapper>
  );
};

export default Header;
