import React, { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import CurrentUser from "./headerutils/CurrentUser";
import styled from "styled-components";
import Notification from "./RightHeaderUtils/Notification";
import Email from "./RightHeaderUtils/Email";
import DonateBtn from "./RightHeaderUtils/DonateBtn";

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: 40px;

  .social-icons {
    display: flex;
    margin-left: 20px;
  }
`;

const RightHeader = () => {
  const [dropDown, setDropDown] = useState({
    notification: false,
    email: false,
  });

  const handleDropDown = (type) => {
    setDropDown((prev) => ({ ...prev, [type]: !prev[type] }));
  };
  

  return (
    <RightWrapper>
      <div className="social-icons">
        <FaSearch className="extra search-icon" />
        <Email
          handleDropDown={handleDropDown}
          dropDown={dropDown}
          setDropDown={setDropDown}
        />
        <AiOutlineFacebook className="extra" />

        <AiOutlineWhatsApp className="extra" />
        <Notification
          handleDropDown={handleDropDown}
          dropDown={dropDown}
          setDropDown={setDropDown}
        />
      </div>
      {/* <CurrentUser /> */}
      <DonateBtn />
    </RightWrapper>
  );
};

export default RightHeader;
