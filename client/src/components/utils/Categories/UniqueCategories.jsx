import React from "react";
import styled from "styled-components";

const CategoryWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.5rem;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    outline: none;
  }
`;

const UniqueCategories = () => {
  return (
    <CategoryWrapper>
      <button className="global-btn">heee </button>
    </CategoryWrapper>
  );
};

export default UniqueCategories;
