import React from "react";
import { useAuthContext } from "../context/AppContext";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = () => {
  const { currentUser } = useAuthContext();
  const location = useLocation()

  
  // return currentUser ? (
  //   <Navigate to="/admin" replace />
  // ) : (
  //   <Navigate to="/" state={{from: location}} replace />
  // );

 
};

export default RequiredAuth;
