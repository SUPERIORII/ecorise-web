import React, { useState } from "react";
import { useAuthContext } from "../context/AppContext";
import { toast, ToastContainer } from "react-toastify";
import { LoginButton } from "./Buttons";
import Loader from "../components/utils/Loader";

const LoginBtn = ({ inputs }) => {
  const [isLoading, setIsloading] = useState(false);
  const { login, currentUser } = useAuthContext();
  console.log(isLoading);

  // fetch users info
  const handleClick = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      await login(inputs);
      setTimeout(() => {
        currentUser.user_role
          ? (location.href = "/admin")
          : (location.href = "/");
        console.log(currentUser);
      }, 3000);
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
