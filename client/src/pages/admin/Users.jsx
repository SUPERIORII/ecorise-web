import React, { useState } from "react";
import {
  AiOutlineArrowDown,
  AiTwotonePlusCircle,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styled from "styled-components";
import UserList from "./UserList";
import UserForm from "./UserForm";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

const AdminUsers = styled.section`
  padding: 0 3rem;
  .upper-controls {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 30px;
  }

  .upper-controls button {
    font-size: 16px;
    border: none;
    outline: none;
    width: 160px;
    height: 40px;
    padding: 0 20px;
  }

  .create-user-btn {
    background: var(--color-primary);
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .icon {
    font-size: 25px;
    outline: none;
    border: none;
  }

  .btn {
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  }

  .filter-container {
    position: relative;
    transition: all 0.5s ease-in-out;
  }

  .filter-wrapper {
    content: "";
    position: absolute;
    top: 45px;
    left: 0;
    right: 0;
    background-color: white;
    padding: 0.5rem;
    opacity: 0;
    display: none;
    transition: opacity 0.5s ease-in-out;
  }

  .filter-wrapper li {
    list-style: none;
    /* background-color:; */
    margin-bottom: 10px;
    padding: 0.5rem;
    cursor: pointer;
  }

  .filter-container.option .open-icon {
    display: none;
  }
  .filter-container:not(.option) .close-icon {
    display: none;
  }

  .option {
    opacity: 1;
    display: block;
  }

  /* INPUT STYLE */
  .input-wrapper {
    position: relative;
    background-color: lightblue;
  }

  .user-search {
    width: 100%;
    padding: 8px 12px;
    border-radius: 20px;
  }
  .search-icon {
    position: absolute;
    left: 0;
  }

  .userform-overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    transition: all 2.5s ease-in-out;
  }
`;

const Users = () => {
  const [option, setOption] = useState(false);
  const [openUserForm, setOpenUserForm] = useState(false);

  const handleOption = () => {
    setOption(!option);
  };

  // open model

  return (
    <AdminUsers className="users">
      <section className="user-list">
        <div className="upper-controls">
          <h3>Users & Admins</h3>
          <div className="upper-controls">
            {/* create a user button */}
            <button
              className="create-user-btn"
              onClick={() => setOpenUserForm(true)}
            >
              <AiTwotonePlusCircle className="icon" />
              <span>Add Users</span>
            </button>
          </div>
        </div>
        {/* user  */}
        <ToastContainer position="top-center" />
        <div className="upper-controls">
          <h3>Users & Admins</h3>
          <div className="upper-controls">
            {/* create a user button */}
            <div className="input-wrapper">
              <input className="user-search" placeholder="Search..." />
              <BiSearch className="icon search-icon" />
            </div>

            {/* filter user by condition */}

            <aside
              className={
                option ? `filter-container option` : "filter-container"
              }
            >
              <button className="btn">
                <span>All User</span>

                <FaChevronDown className="open-icon" onClick={handleOption} />
                <FaChevronUp className="close-icon" onClick={handleOption} />
              </button>

              <div
                className={option ? "filter-wrapper option" : "filter-wrapper"}
              >
                <li>All Users</li>
                <li>Muted Users</li>
                <li>Activated Users</li>
                <li>Deactivated Users</li>
              </div>
            </aside>
          </div>
        </div>
        <UserList />
      </section>
      {/* users tables list */}
      {openUserForm && (
        // className="userform-overlay"

        <div className="userform-overlay">
          <UserForm
            className="user-form"
            openUserForm={openUserForm}
            setOpenUserForm={setOpenUserForm}
          />
        </div>
      )}
    </AdminUsers>
  );
};

export default Users;
