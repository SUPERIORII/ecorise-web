import React, { useEffect } from "react";
import { useAuthContext } from "../../../../context/AppContext";
import styled from "styled-components";
import { FaBell, FaChevronDown } from "react-icons/fa";
import { BsPersonFill, Bs0Circle, BsPersonCircle } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";


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
`;

const CurrentUserPorfile = styled.div`
  width: 30px;
  height: 30px;

  .profile {
    cursor: pointer;
    height: 100%;
    width: 100%;
  }

  .detail {
  }
`;

// const

const CurrentUser = () => {
  const { currentUser, useToggle, toggleState, logOut} = useAuthContext();

  
const navigate = useNavigate()
  const { user_profile, username } = currentUser;

  const handleLogOut =async()=>{
    try {
      await logOut()
      
       setTimeout(() => {
         navigate("/login");
       }, 5000);

    } catch (err) {
      console.log(err);
      
    }
  

}

  



  console.log(currentUser);

  return (
    <Wrapper>
      <ToastContainer position="top-center"/>
      <FaBell className="bell-icon" />
      <div className="profile-constainer" onClick={useToggle}>
        {!user_profile ? (
          <CurrentUserPorfile>
            <BsPersonCircle className="profile" />
          </CurrentUserPorfile>
        ) : (
          <img className="userProfile" src={user_profile} alt="user" />
        )}
      </div>
      <span>{username.toUpperCase()}</span>

      <div>
        <FaChevronDown className="" />

        {/* Showing the user more information about themselve */}
        {toggleState && (
          <div className="moreInfo">
            <div className="account">
              <BsPersonFill className="icon" />
              <span>Account</span>
            </div>

            <div className="account" onClick={handleLogOut}>
              <Bs0Circle className="icon" />
              <span>Logout</span>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default CurrentUser;
