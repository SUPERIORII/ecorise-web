import React from "react";
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
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index:true , element: <Homepage /> },
      { path:"what-we-do" , element: <Homepage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "get-involved", element: <GetInvolve /> },
      { path: "news", element: <News /> },
      { path: "projects", element: <Project /> },
      { path: "resources", element: <Resources /> },
    ],
  },
  { path: "*", element: <PageNotFound/> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
