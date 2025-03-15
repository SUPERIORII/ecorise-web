import styled from "styled-components";

const Wrapper = styled.header`
  border-bottom: 1px solid #eeeeee;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--white-100);
  z-index: 100;

  padding-top: 1rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  /* border: 1px solid red; */

  /* upper Header */
  .upperHeader {
    display: none;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
  .icon {
    width: 30px;
    height: 30px;
  }

  .middleUpperHeader {
    display: flex;
    font-weight: 700;
  }

  .ergi-menu,
  .ergi-menu-close {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: 1000s ease-in-out;
  }

  .mail-warpper,
  .phone-warpper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 40px;
  }

  .leftUpperHeader span {
    font-size: 18px;
    font-weight: 700;
  }

  /* Right upper header */
  .rightUpperHeader {
    width: 30%;
  }

  .social-icons {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
  }

  .social-link-icon {
    width: 30px;
    height: 30px;
    color: #4caf50;
  }

  /*=========== Lower Header =================*/
  /* 
  .wrapper {
    display: flex;
    justify-content: space-between;
  } */

  .left-lower-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
  }

  .nav-menu-icon,
  .nav-close-icon {
    font-size: 2rem;
    margin-right: 1rem;
    transition: 0.8s ease-in-out;
    cursor: pointer;
  }

  .nav-menu-icon:hover,
  .nav-close-icon:hover {
    transform: rotate(90deg);
  }

  .nav-left {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .logo {
    width: 40px;
    height: 40px;
  }

  .left-lower-header h3 {
    color: #4caf50;
    font-size: 1rem;
  }

  /* ========Middle Lower Header */

  .middle-lower-header {
    padding: 1.2rem;
    justify-content: center;
    transition: 0.9s ease-in-out;
    transform: translateX(-700px);
    visibility: hidden;
    margin-top: 1rem;
    font-size: 19px;
  }

  .middle-lower-header.show {
    transform: translateX(0px);
    /* transition: 2s ease-in-out; */
    visibility: visible;
  }

  .middle-lower-header a {
    list-style: none;
    text-decoration: none;
    letter-spacing: 2;
    padding: 0.5rem 1rem;
    margin-bottom: 10px;
    color: #243932;
  }

  .tracker-wrapper {
    position: relative;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    /* background-color: lightblue; */
  }

  .tracker-wrapper a {
    font-weight: 700;
  }

  .tracker-wrapper.active a {
    color: #8b4513;
    /* background-color: #8b4513; */
  }

  .tracker-wrapper.active .tracker {
    color: #8b4513;
  }

  /* Right Lower Header */

  .search-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .search-icon {
    font-size: 2rem;
    cursor: pointer;
  }

  .search-menu-icon {
    /* display: none; */
    font-size: 2rem;
  }

  /* .donate-btn-container {
    display: none;
  } */

  .donate-btn {
    border: 1px solid #8b4513;
    border-bottom: 3px solid #8b4513;
    border-radius: 6px;
    padding: 0.6em 1em;
    background-color: rgb(243, 243, 243);
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  @media (min-width: 200px) {
    /* .search-menu-icon {
    display: none;
  } */

    .middle-lower-header {
      position: absolute;
      top: 60px;
      bottom: 0;
      left: 0;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: var(--color-light);
      /* box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5); */
    }

    .lowerHeader {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      /* padding: 0 5px; */
      margin-top: 25px;
      position: relative;
    }
  }

  @media (min-width: 1024px) {
    .middle-lower-header {
      position: static;
      flex-direction: row;
      background: none;
      transform: translateX(0) !important;
      visibility: visible !important;
      font-size: 19px;
    }

    .lowerHeader {
      display: flex;
      flex-direction: row !important;
      justify-content: space-between;
      align-items: center;
      padding: 0 60px;
      margin-top: 25px;
      position: relative;
    }

    .nav-menu-icon,
    .nav-close-icon {
      display: none;
    }

    .tracker-wrapper {
      font-size: 0.8rem;
      padding: 0;
    }


    /* =========bigger screen=========== */

    .tracker-wrapper.active .tracker {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 20px;
      background-color: #8b4513;
    }
  }
`;

export default Wrapper;
