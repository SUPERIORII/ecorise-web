import React, { useEffect, useRef } from "react";
import { AiOutlineBell } from "react-icons/ai";
import styled from "styled-components";

const NotificationWrapper = styled.div`
  position: relative;

  .notification-container {
    position: absolute;
    top: 65px;
    right: -70px;
    width: 26rem;
    /* width: 300px; */
    height: 550px;
    /* min-width: 200px; */
    bottom: -70px;
    box-shadow: 0 0px 5px rgba(56, 29, 29, 0.2);
    background-color: white;
    padding: 20px;
    z-index: 1000;
    border-radius: 20px;
    /* overflow:hidden; */
  }

  .notification-container h5 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 640px) {
    .tification-container {
      width: 300px;
      height: 500px;
    }

    .notification-skeleton {
      display: flex;
      gap: 1rem;
    }

    .notification-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
    }

    .notification-content {
      font-size: 18px;
    }
    .notification-content span {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const Notification = ({ handleDropDown, dropDown, setDropDown }) => {
  const notificationRef = useRef(null);

  return (
    <NotificationWrapper>
      <AiOutlineBell
        className="extra"
        // onClick={() => handleDropDown("notification")}
        onClick={() => handleDropDown("notification")}
      />

      {dropDown.notification && (
        <div className="notification-container" ref={notificationRef}>
          <h5>Notification</h5>
          {/* <NotificatoinSkeleton /> */}
          <div>
            <div className="notification-skeleton">
              <img
                className="notification-img skeleton"
                src="http://localhost:5173/src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
                alt="notification img"
              />
              <div>
                <div className="notification-content">
                  {" "}
                  <span>James</span> account has been created ffferf rrfrf fr
                </div>
                <div className="notification-content skeleton"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </NotificationWrapper>
  );
};

// notification skeleton

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .notification-skeleton {
    display: flex;
  }
  .img-skeleton {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .notification-content {
    /* font-size: 18px; */
    border-radius: 10px;
    height: 10px;
    width: 200px;
    margin-bottom: 10px;
  }

  .notification-content:last-child {
    width: 100px;
  }
`;

export const NotificatoinSkeleton = () => {
  return (
    <SkeletonWrapper>
      <div className="notification-skeleton">
        <div className="img-skeleton skeleton"></div>
        <div>
          <div className="notification-content skeleton"></div>
          <div className="notification-content skeleton"></div>
        </div>
      </div>

      <div className="notification-skeleton">
        <div className="img-skeleton skeleton"></div>
        <div>
          <div className="notification-content skeleton"></div>
          <div className="notification-content skeleton"></div>
        </div>
      </div>

      <div className="notification-skeleton">
        <div className="img-skeleton skeleton"></div>
        <div>
          <div className="notification-content skeleton"></div>
          <div className="notification-content skeleton"></div>
        </div>
      </div>

      <div className="notification-skeleton">
        <div className="img-skeleton skeleton"></div>
        <div>
          <div className="notification-content skeleton"></div>
          <div className="notification-content skeleton"></div>
        </div>
      </div>

      <div className="notification-skeleton">
        <div className="img-skeleton skeleton"></div>
        <div>
          <div className="notification-content skeleton"></div>
          <div className="notification-content skeleton"></div>
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default Notification;
