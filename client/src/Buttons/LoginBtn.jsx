import React, { useState } from "react";
import { useAuthContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { LoginButton } from "./Buttons";
import Loader from "../components/utils/Loader";
import { useNavigate } from "react-router-dom";

const LoginBtn = ({ inputs }) => {
  const [isLoading, setIsloading] = useState(false);
  const { login, currentUser } = useAuthContext();
  console.log(isLoading);
  const navigate = useNavigate();

  // fetch users info
  const handleClick = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      toast.error(err.response.data);
    }
    setIsloading(false);
  };
  // console.log(inputs);

  return (
    <LoginButton onClick={handleClick} disabled={isLoading}>
      {isLoading ? <Loader /> : "Login"}
    </LoginButton>
  );
};

export default LoginBtn;
