import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import customUrl from "../basedUrl";
import { useQuery } from "@tanstack/react-query";

const AuthContexProvider = createContext(null);

const AppContext = ({ children }) => {
  const [toggleState, setToggleState] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerms, setSearchTerms] = useState("")

  //checking the user cerdentials again the system
  const login = async (input) => {
    const response = await customUrl.post("/api/auth/login", input);
    toast.success(response.data);
  };

  // toogle State
  const useToggle = () => {
    const newState = !toggleState;
    setToggleState(newState);
  };

  // fetching the user
  // const user = useQuery({
  //   queryKey: ["user"],
  //   queryFn: () => {
  //     customUrl.get("/api/find/user").then((response) => {
  //       return response.data
  //     });
  //   },
  // });

  // console.log(user);

  // logout user function
  const logOut = async () => {
    const response = await customUrl.post("/api/auth/logout");

    if (response.status === 200) {
      toast.success(response.data);
    }

    console.log(response);
  };

  //

  useQuery({
    queryKey: ["currentuser"],
    queryFn: async () => {
      const response = await customUrl.get("/api/user");
      setCurrentUser(response.data);
      return response.data;
    },
  });



  return (
    <AuthContexProvider.Provider
      value={{
        login,
        currentUser,
        toggleState,
        setToggleState,
        useToggle,
        logOut,
        searchTerms, 
        setSearchTerms
      }}
    >
      {children}
    </AuthContexProvider.Provider>
  );
};

export default AppContext;

export const useAuthContext = () => useContext(AuthContexProvider);
