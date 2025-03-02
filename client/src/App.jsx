import React, { useState } from "react";
import "./App.css";
import "./index.css";
import {
  Homepage,
  AboutUs,
  GetInvolve,
  News,
  Project,
  Resources,
  HomeLayout,
  PageNotFound,
  
} from "../src/pages";

import {Login,Register,} from "./Authentications/index"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/ReactToastify.css";


// fetch a user from the database

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "what-we-do", element: <Homepage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "get-involved", element: <GetInvolve /> },
      { path: "news", element: <News /> },
      { path: "projects", element: <Project /> },
      { path: "resources", element: <Resources /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>

  )
}

export default App;
