import React from "react";
// import "./ProjectSection.css";
import "../styles/homepage.css";
import Title from "./Title";
import { Link } from "react-router-dom";
import moment from "moment";
import customUrl from "../basedUrl";
import { useQuery } from "@tanstack/react-query";
import LandingSkeleton from "./utils/skeleton/LandingSkeleton";
import Loader from "./utils/Loader";

// api/projects/fetchProject

const ProjectSection = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["homeproject"],
    queryFn: async () => {
      const response = await customUrl.get("api/project");
      return response.data;
    },
  });

  return (
    <div className="ergi-project-container">
      <Title title="Our Projects" />

      {isError ? (
        "error occurs"
      ) : isLoading ? (
        <>
          <LandingSkeleton />
          <Loader />
        </>
      ) : (
        <section className="project-wp">
          {data.map((project) => {
            return (
              <div className="project-card" key={project.project_id}>
                {/* project profile picture */}
                <section className="project-info">
                  <div className="project-upper-section">
                    <Link to={`/profile/${project.psudo_name}`}>
                      <div className="cover-img">
                        <img
                          src={"../upload/" + project.user_profile}
                          alt="ddd"
                        />
                      </div>
                    </Link>

                    <div className="project-description">
                      <div className="project-user-info">
                        <Link to={`/profile/${project.psudo_name}`}>
                          <p className="project-creator">
                            <span>{project.username}</span> created a new
                            Project
                          </p>
                        </Link>
                        <span className="project-duration">
                          {moment(project.created_date).format("MMMM D, YYYY")}

                          {moment(project.created_date).fromNow()}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Project description */}
                  <p className="project-title">{project.description}</p>
                </section>
                {/* image */}
                <div className="project-img">
                  <img src={project.project_img} alt="img" />
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default ProjectSection;
