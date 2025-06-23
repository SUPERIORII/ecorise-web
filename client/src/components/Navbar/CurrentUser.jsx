import React, { useRef, useState } from "react";
import { AiFillBell, AiFillSetting } from "react-icons/ai";
import { BiChevronDown, BiLogOut } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { useAuthContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const CurrentUser = () => {
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const { currentUser, logOut } = useAuthContext();
  const [logoutModal, setLogoutModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

  const showProfile = () => {
    profileRef.current.classList.toggle("show-modal");
  };

  const showNotification = () => {
    notificationRef.current.classList.toggle("show-modal");
    setNotificationModal((prevState) => (prevState = !prevState));
  };
  console.log(notificationModal);

  return (
    <div className="flex items-center">
      <div className="cursor-pointer mr-5 relative" title="Notifications">
        <AiFillBell className="text-xl" onClick={showNotification} />

        {/* notifications container */}
        <div
          className="absolute -top-2 -right-1 w-4 h-4 text-sm
        flex items-center justify-center bg-red-600 rounded-full"
        >
          3
        </div>

        {/* notification dropdown */}
        <div
          className={`
          py-4 px-5 absolute right-0
          top-10 bg-base-300
          rounded-lg
        
           min-w-80
          h-96
          shadow-lg
          translate-y-4
          overflow-auto
         
          ${notificationModal ? "block transition-all duration-300" : "hidden"}
        `}
          ref={notificationRef}
        >
          <div className="mb-3 flex gap-5">
            <div className="w-8 h-8">
              <img
                className="avatar avatar-online rounded-full"
                src="../src/assets/profilePictures/img-7.jpg"
                alt="Profile"
              />
            </div>
            <div>
              <h3>Abraham Johnson</h3>
              <span>adukuly461@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* User profile */}
      <div className="profile flex" title="Admin Profile" onClick={showProfile}>
        <img
          className="av"
          src={"/upload/" + currentUser?.user_profile}
          alt="Profile"
        />
        <span>
          <BiChevronDown />
        </span>

        {/* profile dropdown */}
        <div
          className=" py-4 px-5 absolute right-0
          top-10 bg-base-300
          rounded-lg
          hidden
          min-w-80
          h-96
          shadow-lg
          translate-y-4
          overflow-auto"
          ref={profileRef}
        >
          <div
            className="flex gap-6"
            style={{ borderBottom: "1px solid green", marginBottom: "12px" }}
          >
            <img
              className="avatar avatar-online rounded-full w-8 h-8"
              src={"/upload/" + currentUser?.user_profile}
              alt="Profile"
            />
            <div>
              <h3>{currentUser?.username}</h3>
              <span>{currentUser?.email}</span>
            </div>
          </div>

          <div className="flex items-center" id="viewProfile">
            <BsPerson className="text-3xl" />
            Account
          </div>
          <div className="dropdown-item" id="settings">
            <AiFillSetting className="icon" />
            Settings
          </div>
          <div
            className="dropdown-item"
            id="logout"
            onClick={() => setLogoutModal(true)}
          >
            <BiLogOut className="icon" />
            Logout
          </div>
        </div>
      </div>

      {/* modal */}
      {logoutModal && (
        <LogoutModal setLogoutModal={setLogoutModal} logOut={logOut} />
      )}
    </div>
  );
};

// user logout modal component
export const LogoutModal = ({ setLogoutModal, logOut }) => {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logOut();
    console.log("user has been log out");
    navigate("/login");
  };
  return (
    <>
      {/* logout modal */}
      <div className="logout-modal">
        <div
          className="modal"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="" style={{ color: "black" }}>
            Are you show you want to logout
          </p>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <p className="btn" onClick={handleLogOut}>
              yes
            </p>{" "}
            <p className="btn" onClick={() => setLogoutModal(false)}>
              no
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentUser;
