import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  gap: 0.5rem;
  height: 100%;
  width: 100%;

  .upload-profile {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
 


  @media screen and (min-width: 1024px) {
    .sidebar {
      display: block;
    }
  }
`;

const SecondSection = styled.section` 
  padding-top: 120px;

  .cover-wrapper {
    /* background-color: lightcyan; */
  }

  .cover-wrapper img {
    max-height: 250px;
    width: 100%;
  }

  /* sub profile */
  .subProfile {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -100px;
    background-color: var(--white-100);
    margin-top: 105px;
    border-radius: var(--radius-20);
  }

  .image-wrapper {
    position: relative;
  }

  .camera-icon-wrapper {
    position: absolute;
    bottom: 10%;
    right: 0;
  }

  .image-wrapper img,
  .default-profile-picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .default-profile-picture {
    background-color: var(--color-light);
    border: 3px solid var(--color-success);
  }

  .camera-icon {
    background-color: var(--icon-bg);
    padding: 0.5rem;
    border-radius: 50%;
    z-index: 100;
    width: 40px;
    height: 40px;
    color: black;
    cursor: pointer;
  }

  .username {
    font-size: 25px;
  }

  .profile-info-middle {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    gap: 1rem;
  }

  .si {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    z-index: 100;
    transition: 0.5s ease-in-out;
  }

  .icon:hover {
    background-color: var(--icon-bg);
  }

  .profile-info button {
    background-color: blue;
    color: var(--color-light);
  }

  /* @media screen and (max-width:768px) {
    .subProfile {
      flex-direction: column;
    }
  } */
  /* @media screen and (max-width: 640px) {
    .profile-info {
      flex-direction: column;
    }
  } */
`;

// website and location style
const LocationWebSite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 5px;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export { Wrapper, SecondSection, LocationWebSite };
