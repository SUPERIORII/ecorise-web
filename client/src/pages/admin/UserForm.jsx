import React, { useState } from "react";
// connst

import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import customUrl from "../../basedUrl";
import { toast, ToastContainer } from "react-toastify";

const UserFormWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  max-width: 700px;
  width: 100%;
  margin-inline: auto;
  padding: 20px;
  /* opacity: 0; */

  form {
    background-color: var(--white-100);
    padding: 3rem;
    border-radius: 10px;
  }

  input,
  select {
    padding: 0.5rem;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
    width: 100%;
  }

  .back {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 16px;
    margin-bottom: 20px;
  }

  /* role style */

  /* Dropdown Container */
  .dropdown {
    position: relative;
  }

  /* Selected Item */
  .dropdown-header {
    background-color: #ffffff;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s;
    width: 100%;
  }

  .dropdown-header:hover {
    background-color: #f0f0f0;
  }

  /* Arrow indicator */
  .arrow {
    transition: transform 0.3s ease;
  }

  /* Rotate arrow when open */
  .dropdown.open .arrow {
    transform: rotate(180deg);
  }

  /* Dropdown list */
  .dropdown-list {
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transform: translateY(-20px);
    transition: max-height 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
    z-index: 999;
  }

  /* Show dropdown when open */
  .dropdown.open .dropdown-list {
    max-height: 500px; /* large enough to show all options */
    opacity: 1;
    transform: translateY(0);
  }

  /* List Items */
  .dropdown-list li {
    padding: 15px 20px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .dropdown-list li:hover {
    background-color: #f0f0f0;
  }

  /* Optional: Selected item style */
  .selected {
    font-weight: bold;
    color: #007bff;
  }
`;

const UserForm = ({ openUserForm, setOpenUserForm }) => {
  // user role
  const userRole = [
    { id: 1, role: "Admin" },
    { id: 2, role: "Super Admin" },
  ];

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [roleError, setRoleError] = useState("");
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("");

  const fullInputValue = { ...inputValue, role };

  const handleChange = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openRoles = () => {
    setOpen(!open);
  };
  const handleOpenRoles = (role) => {
    setRole(role.toLowerCase());
    setOpen(false);
  };
  console.log(open);

  // react query mutation function
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (userInfo) => {
      try {
        const response = await customUrl.post("api/user", userInfo);
        toast.success(response.data);
      } catch (error) {
        toast.error(error.response.data);
        console.log(error.response.data);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userList"]);
    },
  });

  const handleUserForm = (e) => {
    e.preventDefault();

    if (
      !fullInputValue.username ||
      !fullInputValue.email ||
      !fullInputValue.password ||
      !fullInputValue.role
    ) {
      setRoleError("field can not be empty");
      return;
    }

    mutation.mutate(fullInputValue);
    // setOpenUserForm(false)

    // console.log(inputValue);
  };

  return (
    <UserFormWrapper>
      <ToastContainer position="top-center" />
      <form className="user-form" onClick={() => {}}>
        <div className="back">
          <BiArrowBack onClick={() => setOpenUserForm(false)} />
          <h3>Add a New User</h3>
        </div>
        <div className="username">
          <label htmlFor="username">username:</label> <br />
          <input
            type="text"
            id="username"
            name="username"
            placeholder=""
            onChange={handleChange}
            value={inputValue.username}
          />
        </div>
        <br />
        {/* email */}
        <div className="email">
          <label htmlFor="email">Email:</label> <br />
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            value={inputValue.email}
          />
        </div>
        <br />
        {/* password */}
        <div className="password">
          <label htmlFor="password">Password:</label> <br />
          <input
            type="password"
            id="password"
            placeholder=""
            name="password"
            value={inputValue.password}
            onChange={handleChange}
          />
          {!inputValue.password && (
            <strong style={{ color: "red", textTransform: "capitalize" }}>
              {roleError}
            </strong>
          )}{" "}
        </div>
        <br />
        {/* role */}
        <div
          className={open ? "dropdown open" : "dropdown"}
          id="customDropdown"
        >
          <label htmlFor="role">Select a Role:</label> <br />
          <div className="dropdown-header">
            <span id="selectedItem">{role}</span>

            <FaChevronDown className="arrow" onClick={openRoles} />
          </div>
          <ul className="dropdown-list" id="dropdownList">
            {userRole.map((role) => {
              return (
                <li key={role.id} onClick={() => handleOpenRoles(role.role)}>
                  {role.role}
                </li>
              );
            })}
          </ul>
        </div>
        {roleError && <strong style={{ color: "red" }}>{roleError}</strong>}
        <br /> <br />
        <button onClick={handleUserForm}>Add New User</button>
      </form>
    </UserFormWrapper>
  );
};

export default UserForm;
