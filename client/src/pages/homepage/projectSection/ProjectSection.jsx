import React from "react";
import "./ProjectSection.css";
import Title from "../../../components/utils/title/Title";
import { useQuery } from "@tanstack/react-query";
import customUrl from "../../../basedUrl";
import LandingSkeleton from "../../../components/utils/skeleton/LandingSkeleton";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["getPost"],
    queryFn: async () => {
      const response = await customUrl.get("/api/projects/fetchProject");
      return response.data;
    },
  });

  return (
    <div className="ergi-project-container">
      <Title title="Our Projects" />

      {isError ? (
        "Something went wrong"
      ) : isLoading ? (
        <LandingSkeleton />
      ) : (
        <section className="project-wp">
          {data.result.map((project) => {
            const {
              projectId,
              username,
              userProfile,
              projectImg,
              createdAt,
              description,
              psudoName,
              userId,
              relativeDuration,
              title,
            } = project;

            return (
              <div className="project-container" key={projectId}>
                {/* project profile picture */}
                <section className="project-info">
                  <div className="project-upper-section">
                    <Link to={`/profile/${psudoName}`}>
                      <div className="cover-img">
                        {userProfile ? (
                          <img
                            src={"../public/upload/" + userProfile}
                            alt={username}
                          />
                        ) : (
                          <BsPersonCircle className="profile" />
                        )}
                      </div>
                    </Link>

                    <div className="project-description">
                      <div className="project-user-info">
                        <Link to={`/profile/${psudoName}`}>
                          <p className="project-creator">
                            <span>{username}</span> created a new Project
                          </p>
                        </Link>
                        <span className="project-duration">
                          {" "}
                          {createdAt} . {relativeDuration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project description */}
                  <p className="project-title">{title}</p>
                </section>

                {/* image */}
                <div className="project-img">
                  <img src={projectImg} alt="img" />
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
