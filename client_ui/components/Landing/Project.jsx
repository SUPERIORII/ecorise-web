import React from "react";
// import "../styles/homepage.css";
// import moment from "moment";
import baseUrl from "@/lib/baseUrl";
import { useQuery } from "@tanstack/react-query";
import { ProjectGrid } from "../customUi";
ProjectGrid;

// api/projects/fetchProject

const Project = () => {
  // const { isError, isLoading, data } = useQuery({
  //   queryKey: ["homeproject"],
  //   queryFn: async () => {
  //     const response = await customUrl.get("api/project");
  //     return response.data;
  //   },
  // });

  return <ProjectGrid />;
};

export default Project;
