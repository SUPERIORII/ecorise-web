import React, { useEffect, useRef } from "react";
import { useAuthContext } from "../../../../context/AppContext";
import styled from "styled-components";
import { FaBell, FaChevronDown, FaMailBulk } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineBell,
} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

import { BsPersonFill } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const Wrapper = styled.section`
  max-width: 1000px;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  /* background-color: lightblue; */
  font-weight: 700;

  .userProfile {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  /* .bell-icon {
    font-size: 23px;
    margin-right: 20px;
  } */

  .icon {
    font-size: 25px;
  }

  .moreInfo {
    background-color: #f7f7f7;
    /* padding: 1rem; */
    position: absolute;
    left: 50px;
    right: 0;
    top: 65px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  .moreInfo .span {
    font-size: 18px;
  }

  .account {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding: 0.5rem;
  }

  .account span {
    font-size: 20px;
  }

  .account:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .profile-container {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .chevot {
    position: absolute;
    right: -5px;
    bottom: -5px;
    /* top: 0; */
    padding: 0.1rem;
    /* padding-left: .2rem;
    padding-right: .2rem; */
    background: rgba(182, 182, 182, 0.9);
    border: 2px solid white;
    border-radius: 50%;
    color: black;
  }

  .dropdown-icon {
    font-size: 1rem;
  }

  .moreInfoProfile {
    position: absolute;
    /* left: 0%; */
    right: -10px;
    top: 20%;
    transform: translateY(30%);
    width: 300px;
    background-color: var(--background-100);
    padding: 0.9rem;
    transition: 20s ease-in-out;
  }

  .notifications {
    position: absolute;
    left: 0;
  }

  .currentUserWrapper {
    /* background-color: wjote; */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid rgba(182, 182, 182, 0.9);
    padding: 1rem;
    box-shadow: var(--box-shadow);
    border-radius: 10px;
    cursor: pointer;
  }

  .currentUserWrapper:hover {
    opacity: 0.9;
  }

  .notification-wrapper {
    position: relative;
    cursor: pointer;
  }

  .notification-wrapper span {
    /* position: absolute; */
    /* top: 2px;
    right: 5px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    margin: 0 auto;
    border: 2px solid white; */
  }

  .notification {
    position: absolute;
  }
`;

const CurrentUserPorfile = styled.div`
  width: 40px;
  height: 40px;

  .profile {
    cursor: pointer;
    height: 100%;
    width: 100%;
  }

  .donate-btn-container {
    position: relative;
  }
`;

// const

const CurrentUser = () => {
  const { currentUser, useToggle, toggleState, setToggleState, logOut } =
    useAuthContext();
  const psudoName = currentUser.shadowname;

  const navigate = useNavigate();
  const toggleRef = useRef(null);

  const handleToggle = (e) => {
    if (toggleRef.current && !toggleRef.current.contains(e.target)) {
      setToggleState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleToggle);

    return () => document.removeEventListener("mousedown", handleToggle);
  }, []);

  const { user_profile, username } = currentUser;

  const handleLogOut = async () => {
    try {
      await logOut();

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <ToastContainer position="top-center" />

      <div className="notification-wrapper">
        <span></span>
        {/* 
        <section className="notification" ref={toggleRef}>
          <Link to={`/profile/${psudoName}`}>
            <div className="currentUserWrapper">
              <img
                className="userProfile"
                src={"/upload/" + user_profile}
                alt="user"
              />

              <span>{username.toUpperCase()}</span>
            </div>
          </Link>

          <div className="account" onClick={handleLogOut}>
            <AiOutlineLogout className="icon" />
            <span>Logout</span>
          </div>
        </section> */}
      </div>

      <div className="profile-container" onClick={useToggle}>
        <img
          className="userProfile"
          src={"/upload/" + user_profile}
          alt="user"
        />

        <div className="chevot">
          <FaChevronDown className="dropdown-icon" />
        </div>

        {/* <section className="moreInfoProfile" ref={toggleRef}>
          <Link to={`/profile/${psudoName}`}>
            <div className="currentUserWrapper">
              <img
                className="userProfile"
                src={"/upload/" + user_profile}
                alt="user"
              />

              <span>{username.toUpperCase()}</span>
            </div>
          </Link>

          <div className="account" onClick={handleLogOut}>
            <AiOutlineLogout className="icon" />
            <span>Logout</span>
          </div>
        </section> */}
      </div>
    </Wrapper>
  );
};

export default CurrentUser;
