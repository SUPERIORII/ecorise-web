import React, { useState } from "react";
import styled from "styled-components";
import UniqueCategories from "./UniqueCategories";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const UniqueCategoriesList = () => {
  // const uniqueCategory = ["all", ...new Set(data.map((c) => c.category))];


  return (
    <CategoryContainer>
      <FaChevronLeft className="global-icon" />
      <UniqueCategories />

      <FaChevronRight className="global-icon" />
    </CategoryContainer>
  );
};

export default UniqueCategoriesList;
