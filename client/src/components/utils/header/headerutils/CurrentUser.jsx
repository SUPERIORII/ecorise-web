import React, { useEffect, useRef } from "react";
import { useAuthContext } from "../../../../context/AppContext";
import styled from "styled-components";
import { FaBell, FaChevronDown } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

import { BsPersonFill, Bs0Circle, BsPersonCircle } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.section`
  max-width: 1000px;
  padding: 0.5rem;
  width: 100%;
  /* background-color: lightblue; */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  position: relative;

  .userProfile {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  .bell-icon {
    font-size: 23px;
    margin-right: 20px;
  }

  .icon {
    font-size: 2px;
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
    right: 0%;
    top: 20%;
    transform: translateY(30%);
    width: 150%;
    background-color: var(--background-100);
    padding: 0.9rem;
    transition: 20s ease-in-out;
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

  console.log(currentUser);

  return (
    <Wrapper>
      <ToastContainer position="top-center" />
      <FaBell className="bell-icon" />
      <FaBell className="bell-icon" />
      <FaBell className="bell-icon" />
      <div className="profile-container" onClick={useToggle}>
        {!user_profile ? (
          <CurrentUserPorfile>
            <BsPersonCircle className="profile" />
          </CurrentUserPorfile>
        ) : (
          <img className="userProfile" src={user_profile} alt="user" />
        )}

        <div className="chevot">
          <FaChevronDown className="dropdown-icon" />
        </div>
      </div>

      <div>
        {/* Showing the user more information about themselve */}
        {toggleState && (
          <section className="moreInfoProfile" ref={toggleRef}>
            <div className="currentUserWrapper">
              {!user_profile ? (
                <CurrentUserPorfile>
                  <BsPersonCircle className="profile" />
                </CurrentUserPorfile>
              ) : (
                <img className="userProfile" src={user_profile} alt="user" />
              )}

              <span>{username.toUpperCase()}</span>
            </div>

            <div className="account">
              <BsPersonFill className="icon" />
              <span>Account</span>
            </div>

            <div className="account" onClick={handleLogOut}>
              <AiOutlineLogout className="icon" />
              <span>Logout</span>
            </div>
          </section>
        )}
      </div>
    </Wrapper>
  );
};

export default CurrentUser;
