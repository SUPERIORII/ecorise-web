import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";

const EmailWrapper = styled.div`
  .email-container {
    position: absolute;

    margin-left: 10px;
    /* width: 300px; */
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    z-index: 1000;
    min-width: 200px;
  }

  .notification-container h5 {
    font-size: 18px;
  }
`;

const Email = ({ handleDropDown, dropDown, setDropDown }) => {
  return (
    <EmailWrapper>
      <AiOutlineMail
        className="extra"
        onClick={() => handleDropDown("email")}
      />

      {dropDown.email && <div className="email-container">email</div>}
    </EmailWrapper>
  );
};

export default Email;
