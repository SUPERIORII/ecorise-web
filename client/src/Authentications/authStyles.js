import styled from "styled-components";

const ButtonWrapper = styled.main`
  background-image: url("../src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg");
  background-size: cover;
  /* background-position: center; */

  height: 100vh;
  width: 100%;
  /* max-width: 100rem; */

  @media screen and (max-width: 475px) {
    background-image: none;
  }

  form {
    background-color: var(--color-light);
    max-width: 45%;
    height: 94%;
    border-radius: 30px;
    margin-inline: 1rem;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    padding-top: 3rem;
  }

  .logo-container img {
    max-width: 20%;
  }
  .logo-container span {
    font-size: 30px;
    font-weight: bold;
  }

  @media screen and (max-width: 475px) {
    form {
      margin-inline: auto;
      max-width: 100%;
      height: 100vh;
    }
  }
  @media screen and (max-width: 768px) {
    form {
      /* margin-inline: auto; */
      max-width: 100%;
      height: 100vh;
    }
  }
`;

// title
const Heading = styled.h3`
  font-size: 25px;
  text-align: center;
  margin-top: 2rem;

  @media screen and (max-width: 475px) {
    font-size: 20px;
  }
`;

const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 4rem;

  input {
    padding: 0.9rem;
    border-radius: 22px;
    font-size: 18px;
    outline: none;
    width: 100%;
  }

  .pw-ic-wrapper {
    position: relative;
  }

  .pw-ic-wrapper .eye-btn {
    background: none;
    width: 30px;
    height: 30px;
    font-size: 30px;
    position: absolute;
    top: 0;
    right: 4%;
    top: 20%;
  }

   a {
    font-size: 18px;
    
  }
   @media screen and (max-width: 475px) {
    padding: 0 2rem;
  }
`;

export { ButtonWrapper, FormWrapper, Heading };
