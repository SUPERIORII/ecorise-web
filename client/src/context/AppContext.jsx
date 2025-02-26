import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import customUrl from "../basedUrl";

const AuthContexProvider = createContext(null);

const AppContext = ({ children }) => {
  //checking the user cerdentials again the system
  const login = async (input) => {
    const response = await customUrl.post("/api/auth/login", input);
    toast.success(response.data);
  };

  const currentUser = async () => {
    const userData = await customUrl.get("/api/find/user");
     return await userData.data;
  };

  
  // checking if the user session is valid

  return (
    <AuthContexProvider.Provider value={{ currentUser, login }}>
      {children}
    </AuthContexProvider.Provider>
  );
};

export default AppContext;

export const useAuthContext = () => useContext(AuthContexProvider);
