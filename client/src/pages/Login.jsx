import React, { useState } from "react";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";
import { useAuthContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {login, currentUser} = useAuthContext()
  const user  = currentUser()
  const navigate = useNavigate()
  // changing input state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  // error state
  const [err, setErr] = useState(false);

  //
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // fetch users info
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await login(inputs)
      // navigate('/')
     const result = await user
     console.log(result);
     
      
    } catch (err) {
      console.log("Axios error:", err);
      setErr(err);
      toast.error(err.response.data);
    }
  };
  
  // console.log(user);
  // console.log(err);

  return (
    <div>
      <ToastContainer position="top-center" />;
      <form>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={inputs.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={inputs.password}
        />
        <button type="submit" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
