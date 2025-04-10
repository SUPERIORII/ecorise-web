import React from "react";
import styled from "styled-components";

const DonateButton = styled.button`
  border: 1px solid #8b4513;
  border-bottom: 3px solid #8b4513;
  border-radius: 6px;
  padding: 0.6em 1em;
  background-color: rgb(243, 243, 243);
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;

  @media screen and (min-width: 300px) {
    display: none;

    .search-icon {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const DonateBtn = () => {
  return <DonateButton>Donate Now</DonateButton>;
};

export default DonateBtn;
