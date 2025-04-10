import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../context/AppContext";

// import {
//   AiOutlineLogout,
//   AiOutlineBell,
// } from "react-icons/ai";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 2rem;

  /* ========Middle Lower Header */
  .middle-section {
    padding: 1.2rem;
    justify-content: center;
    transition: 0.9s ease-in-out;

    margin-top: 1rem;
    font-size: 19px;
    /* background-color: lightblue; */
    max-width: 400px;
    width: 100%;
    flex: 1;
  }

  .input-wrapper {
    display: flex;
    position: relative;
  }
  .input-wrapper input {
    width: 100%;
    border-radius: 20px;
    max-width: 700px;
    outline: none;
    background-color: var(--white-200);
    padding: 0.7rem;
    font-size: 15px;
    padding-left: 50px;

    border: none;
  }

  .input-wrapper input:focus {
    outline: 1px solid var(--color-primary);
  }

  .position {
    position: absolute;
    left: 25px;
    top: 12px;
    font-size: 20px;
  }

  /* Right Lower Header */

  .search-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .search-icon {
    display: none;
  }

  .search-menu-icon {
    /* display: none; */
    font-size: 2rem;
  }

  @media screen and (min-width: 300px) {
    .donate-btn {
      display: none;
    }

    .search-icon {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    .donate-btn {
      display: block;
    }

    .search-icon {
      display: block;
    }
  }
`;

const LowerHeader = () => {
  const [selected, setIsSelected] = useState(null);
  const [showMenu, setShowmenu] = useState(false);

  const { currentUser } = useAuthContext();

  // open email box

  // toogling the close and menu icons

  const getId = (id) => {
    // get the id
    setIsSelected(id);
    setShowmenu(false);
  };

  return (
    <Wrapper className="lowerHeader">
      ============MIDDLE LOWER HEADER==================
      <section className="middle-section">
        <div className="input-wrapper">
          <FaSearch className="icon position" />
          <input type="text" placeholder="search..." />
        </div>
      </section>
      {/* =================right middle header===================== */}
      {/* <section className="right-section">
        <div className="social-icons">
          <FaSearch className="extra search-icon" />

          <AiOutlineMail className="extra" />
          <AiOutlineFacebook className="extra" />

          <AiOutlineWhatsApp className="extra" />
        </div>
        <CurrentUser />
        <button className="donate-btn">Donate Now</button>
      </section> */}
    </Wrapper>
  );
};

export default LowerHeader;
