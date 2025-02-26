import styled from "styled-components";



const Wrapper = styled.aside`
  .about-us-section {
    display: grid;
    grid-template-columns: 1fr 40%;
    margin-bottom: 30px;
  }

  .aboutUsInfo {
    padding: 5rem;
  }

  .aboutUsInfo h1 {
    color: var(--color-primary);
    font-size: 2rem;
    text-transform: capitalize;
  }

  .aboutUsInfo span {
    color: var(--title-color);
    font-size: 1.3rem;
  }

  .img-wrapper {
    width: 100%;
    height: 70%;
    background-color: var(--background-100);
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
    /* max-height: 230px; */
  }

  /* ====================objective style================================== */
  .ecorise-objectives {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem;

    margin-bottom: 30px;
  }

  .ecorise-objectives a {
    text-decoration: none;
  }

  .objective {
    background-color: var(--background-100);
    max-width: 20em;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em;
    border-radius: 30px;

    position: relative;
  }

  .icon-box {
    position: absolute;
    background-color: var(--white-100);
    top: -20px;
    bottom: 70px;
    text-align: center;
    /* border: 1px solid black; */
    padding: 1em;

    border-radius: 50%;
    box-shadow: var(--box-shadow);

    margin-bottom: 30px;
  }

  .objective-icon {
    width: 100%;
    height: 100%;
    color: var(--color-primary);
  }

  .icon {
    width: 50px;
    height: 50px;
    color: var(--color-primary);
  }

  .objective h1 {
    color: var(--color-primary);
    margin-top: 18px;
  }

  /* ==================Our mision======================== */

  .mission-section {
    display: grid;
    grid-template-columns: 1fr 40%;
    margin-bottom: 30px;
  }

  .objective-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .missionInfo {
    padding: 5rem;
  }

  .missionInfo h1 {
    color: var(--color-primary);
    font-size: 2rem;
    text-transform: capitalize;
  }

  .missionInfo span {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .img-wrapper {
    width: 100%;
    background-color: var(--background-100);
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
  }

  /* ==================Our mision======================== */

  .purpose-section {
    display: grid;
    grid-template-columns: 40% 1fr;
    margin-bottom: 30px;
  }

  .objective-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .missionInfo {
    padding: 5rem;
  }

  .missionInfo h1 {
    color: var(--color-primary);
    font-size: 2rem;
    text-transform: capitalize;
  }

  .missionInfo span {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .img-wrapper {
    width: 100%;
    background-color: var(--background-100);
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
  }

  /* =====================Our Team========================= */

  .members {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-content: center;
    padding: 3rem;
    gap: 2rem;
  }

  .members img {
    width: 200px;
    height: 200px;

    border-radius: 50%;
  }

  .members span {
    text-align: center;
  }

  /* ==================Media Queries============================== */
  @media screen and (max-width: 640px) {
    .about-us-section {
      grid-template-columns: 1fr;
    }

    .aboutUsInfo {
      padding: 2rem;
    }

    .ecorise-objectives {
      grid-template-columns: 1fr;
      padding: 2rem;
    }

    .objective {
      max-width: 100%;
    }

    .mission-section,
    .purpose-section {
      grid-template-columns: 1fr;
    }

    .missionInfo {
      padding: 2rem;
    }

    .members {
      grid-template-columns: 1fr;
      place-items: center;
      text-align: center;
    }
  }

  @media screen and (min-width: 640px) {
    .about-us-section {
      grid-template-columns: 1fr;
    }

    .aboutUsInfo {
      padding: 2rem;
    }

    .ecorise-objectives {
      grid-template-columns: 1fr;
      padding: 2rem;
    }

    .objective {
      max-width: 100%;
    }

    .objective h1 {
      font-size: 1.2rem;
    }

    .mission-section,
    .purpose-section {
      grid-template-columns: 1fr;
    }

    .missionInfo {
      padding: 2rem;
    }

    .members {
      grid-template-columns: 1fr;
      place-items: center;
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    .about-us-section {
      grid-template-columns: repeat(2, 1fr);
    }

    .aboutUsInfo {
      padding: 2rem;
    }

    .ecorise-objectives {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 2rem;
    }

    .objective h1 {
      font-size: 1.2rem;
    }

    .mission-section,
    .purpose-section {
      grid-template-columns: 1fr 1fr;
    }

    .members {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 1024px) {
    .members {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;



export default Wrapper;