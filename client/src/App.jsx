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
  LandingSkeleton,
  Profile,
} from "../src/pages";

import { Login, Register } from "./Authentications/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import LeftHomeNewSkeleton from "./pages/homepage/homenews/LeftHomeNewSkeleton";

// fetch a user from the database

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "what-we-do", element: <Homepage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "get-involved", element: <GetInvolve /> },
      { path: "news", element: <News /> },
      { path: "projects", element: <Project /> },
      { path: "resources", element: <Resources /> },
      { path: "profile/:psudoname", element: <Profile /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/skeleton", element: <LeftHomeNewSkeleton /> },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
