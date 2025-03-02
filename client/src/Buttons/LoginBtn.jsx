import React from "react";
import { useAuthContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { LoginButton } from "./Buttons";


const LoginBtn = ({ inputs }) => {
  const { login } = useAuthContext();

  // fetch users info
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await login(inputs);
      setTimeout(() => {
        location.href = "/";
      }, 3000);
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  // console.log(inputs);

  return <LoginButton onClick={handleClick}>Login</LoginButton>;
};

export default LoginBtn;
