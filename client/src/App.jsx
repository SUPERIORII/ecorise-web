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
  EditProfile,
  Admin,
  Video,
  DetailPage
  
} from "../src/pages";

import { Login, Register } from "./Authentications/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import LeftHomeNewSkeleton from "./pages/homepage/homenews/LeftHomeNewSkeleton";
// fetch a user from the database

// console.log(currentUser);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "get-involved", element: <GetInvolve /> },
      { path: "news", element: <News /> },
      { path: "projects", element: <Project /> },
      { path: "resources", element: <Resources /> },
      { path: "/:psudoname/editproifle", element: <EditProfile /> },
    ],
  },
  { path: "profile/:psudoname", element: <Profile /> },
  { path: "/news/:eid", element: <DetailPage /> },
  { path: "/admin", element: <Admin /> },
  { path: "/video", element: <Video /> },
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
