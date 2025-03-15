import React from "react";
import "./ProjectSection.css";
import Title from "../../../components/utils/title/Title";
import { useQuery } from "@tanstack/react-query";
import customUrl from "../../../basedUrl";
import LandingSkeleton from "../../../components/utils/skeleton/LandingSkeleton";
import { BsPerson, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["getPost"],
    queryFn: async () => {
      const response = await customUrl.get("/projects/fetchProject");
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
        <section className="project-wrapper">
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

            console.log(project);

            return (
              <div className="project-preview" key={projectId}>
                <div className="project-img-container">
                  <img src={projectImg} alt="img" />
                </div>

                {/* project profile picture */}
                <section className="project-info">

                  <div className="project-profile">
                    <Link to={`/profile/${psudoName}`}>
                      <div className="cover-img">
                        {userProfile ? (
                          <img src={userProfile} alt={username} />
                        ) : (
                          <BsPersonCircle className="profile" />
                        )}
                      </div>
                    </Link>
                  </div>

                  {/* Project description */}
                  <div className="project-desc">
                    <p className="project-title">{title}</p>
                    <div className="project-user-info">
                      <span className="project-creator">{username}</span>
                      <span className="project-duration">
                        {createdAt} . {relativeDuration}
                      </span>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default ProjectSection;
