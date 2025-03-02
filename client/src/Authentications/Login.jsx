import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import LoginBtn from "../Buttons/LoginBtn";
import { ButtonWrapper, FormWrapper, Heading } from "./authStyles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuthContext } from "../context/AppContext";

// Login Component
const Login = () => {
  // changing input state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { toggleState, useToggle } = useAuthContext();

  //
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <ButtonWrapper>
      <ToastContainer position="top-center" />;
      <form>
        <div className="logo-container">
          <img src="../src/assets/logo.png" alt="Logo" />
          <span>EGI</span>
        </div>

        <FormWrapper>
          <Heading className="heading">Admin Login panel</Heading>
          <input
            className="email"
            type="text"
            placeholder="Email address"
            name="email"
            onChange={handleChange}
            value={inputs.email}
          />

          {/* Password */}
          <section className="pw-ic-wrapper">
            <input
              className="input"
              type={toggleState ? "text" : "password"}
              name="password"
              onChange={handleChange}
              placeholder="Password"
              value={inputs.password}
            />

            <a href="#" className="forgetPassword">Foget Password?</a>

            <div className="eye-btn" onClick={useToggle}>
              {toggleState ? (
                <AiOutlineEyeInvisible className="icon" />
              ) : (
                <AiOutlineEye className="icon" />
              )}
            </div>
          </section>

          <LoginBtn inputs={inputs} />
        </FormWrapper>
      </form>
    </ButtonWrapper>
  );
};

export default Login;
