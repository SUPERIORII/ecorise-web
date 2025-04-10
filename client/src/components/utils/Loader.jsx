import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top: 4px solid white;
  animation: loader 1s linear infinite;
  margin: 0 auto;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return <Wrapper></Wrapper>;
};

export default Loader;
