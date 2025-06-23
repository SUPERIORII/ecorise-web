import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-weight: 700;
`;
const MiniTitle = ({ title }) => {
  return <Title>{title? title: "Title"}</Title>;
};

export default MiniTitle;
