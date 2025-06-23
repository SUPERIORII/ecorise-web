import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import styled from "styled-components";
import customUrl from "../../basedUrl";
import { useAuthContext } from "../../context/AppContext";

const UserLists = styled.section`
  /* User table section */
  overflow: hidden;
  .content {
    padding: 20px;
    overflow-y: auto;
    width: 100%;
  }

  h3 {
    margin-bottom: 15px;
  }

  /* Table styling */
  table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border-radius: 8px;
    /* overflow: hidden; */
  }

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: #e8f5e9;
    font-weight: 600;
  }

  /* Action buttons */
  .btn {
    padding: 5px 10px;
    border: none;
    /* color: #fff; */
    cursor: pointer;
    font-size: 0.9em;
    background: none;
  }

  /* .btn.edit {
    background-color: #2196f3;
  }

  .btn.delete {
    background-color: #f44336;
  } */

  /* Status labels */
  .status {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.8em;
    color: #fff;
  }

  .status.active {
    background-color: #4caf50;
  }

  .status.inactive {
    background-color: #f44336;
  }

  /* custom */

  .action-controls-wrapper {
    position: relative;
  }

  .action-controls {
    position: absolute;
    top: -10px;
    right: 30px;
    background: lightgreen;

    background-color: white;
    padding: 0.5rem;
  }

  .action-btn {
    background-color: lightgray;
    font-size: 20px;
  }

  .user-info {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    background-color: white;
    align-self: center;
    gap: 2.5rem;
    padding: 1rem;
    margin-bottom: 10px;
  }

  .table-colum {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    body {
      flex-direction: column;
    }
    .sidebar {
      width: 100%;
    }
    .main {
      flex: none;
    }
  }
`;

const UserList = () => {
  const { currentUser } = useAuthContext();

  const { isLoading, data, isError } = useQuery({
    queryKey: ["userList"],
    queryFn: async () => {
      const response = await customUrl.get("/api/getusers");
      return response.data;
    },
  });

  const [action, setAction] = useState(false);

  const handleAction = () => {
    setAction(!action);
  };
  return (
    // <!-- Content -->
    <UserLists className="content">
      <h3>Members</h3>
      <table>
        <thead>
          <tr className="table-colum">
            <th>Photo</th>
            <th>Member Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>

      {/* map over the data */}

      {isError
        ? "Error Loading Users"
        : isLoading
        ? "Loading ..."
        : data && data.length !== 0
        ? data.map((users) => {
            const {
              id,
              first_name,
              username,
              email,
              user_role,
              user_profile,
              create_at,
            } = users;

            return (
              <tr className="user-info" key={id}>
                {/* user profile */}
                <div>
                  <img
                    src={
                      user_profile
                        ? "/upload/user-solid.svg"
                        : "/upload/" + user_profile
                    }
                    alt="avatar"
                    style={{
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      border: "1px solid grey"
                    }}
                  />
                </div>
                {/* user full name */}
                <div>{username}</div>
                {/* user number */}
                <div>+3 215 23 62</div>
                {/* user email */}
                <div>{email}</div>
                {/* user status */}
                <div>
                  <span className="status active">{user_role}</span>
                </div>
                {/* user action buttons */}

                {currentUser?.user_role === "super admin" ? (
                  <div className="action-controls-wrapper">
                    <BsThreeDots
                      className="action-btn"
                      onClick={handleAction}
                    />

                    {action && (
                      <div className="action-controls">
                        <button className="btn edit">Edit</button>
                        <button className="btn delete">Delete</button>
                      </div>
                    )}
                  </div>
                ) : (
                  " No available action"
                )}
              </tr>
            );
          })
        : "NO user found"}

      {/* <!-- Add more user rows as needed --> */}
    </UserLists>
  );
};

export default UserList;
