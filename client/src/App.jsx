import React, { useState } from "react";
import "./index.css";
// import "./styles/general-styles.css";
import {
  // Homepage,
  HomePage,
  AdminPage,
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
  DetailPage,
  Users,
  AdminProject,
  ContentManagement,
  Login, Register
} from "../src/pages";

// import { Login, Register } from "./Authentications/index";
import { Routes, Route } from "react-router-dom";
import "react-toastify/ReactToastify.css";
// import LeftHomeNewSkeleton from "./pages/homepage/homenews/LeftHomeNewSkeleton";
import RequiredAuth from "./components/RequiredAuth";
import { LoginOld } from "./Authentications";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="get-involved" element={<GetInvolve />} />
        <Route path="news" element={<News />} />
        <Route path="project" element={<Project />} />
        <Route path="resources" element={<Resources />} />
        <Route path="/:psudoname/editproifle" element={<EditProfile />} />
        <Route path="profile/:psudoname" element={<Profile />} />
        <Route path="video" element={<Video />} />
        <Route path="/skeleton" element={<LandingSkeleton />} />
        <Route path="admin" element={<AdminPage />} />

        {/* Admin routes */}
        <Route element={<RequiredAuth />}>
          {/* <Route path="admin" element={<Admin />} /> */}
          <Route path="admin/users" element={<Users />} />
          <Route path="projects" element={<AdminProject />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Route>
      {/* global routes */}
        <Route path="/eginews" element={<DetailPage />} />
        // <Route path="/news/:eid" element={<DetailPage />} />
      <Route path="content" element={<ContentManagement />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="loginOld" element={<LoginOld />} />
      {/* if route is not found */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
