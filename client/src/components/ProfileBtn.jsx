import React from "react";
import styled from "styled-components";
import { BsPenFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const ProfileButton = styled.button`
  color: var(--color-light);
  background-color: var(--color-success);
  border: none;
  outline: none;
`;

const ProfileBtn = ({ psudoname }) => {

  return (
    <Link to={`/${psudoname}/editproifle`}>
      <ProfileButton>
        <BsPenFill /> Edit profile
      </ProfileButton>
    </Link>
  );
};

export default ProfileBtn;
