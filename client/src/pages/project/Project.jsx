import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import customUrl from "../../basedUrl";
import moment from "moment";
import LandingSkeleton from "../../components/utils/skeleton/LandingSkeleton";
import Loader from "../../components//utils/Loader";

import { AiOutlineSearch } from "react-icons/ai";
import UniqueCategoriesList from "../../components/utils/Categories/UniqueCategoriesList";

const ProjectContainer = styled.article`
  display: grid;
  gap: 1rem;
`;

const Upper = styled.section``;

const Project = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      try {
        const response = await customUrl.get(`/api/projects/project`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  console.log("data:", data);

  return (
    <div className="general-container">
      {/* search input */}
      <aside className="search-container">
        <div className="search-wrapper">
          <input type="text" className="search-bar" placeholder="Search..." />
          <div className="search-icon-holder">
            <AiOutlineSearch className="search-icon" />
          </div>
        </div>
      </aside>

      {/* categories */}
      <UniqueCategoriesList />

      {/* projects */}
      <ProjectContainer>
        {isError ? (
          "Error Occurs "
        ) : isLoading ? (
          <>
            <LandingSkeleton /> 
            <Loader />
          </>
        ) : (
          data?.map((project) => {
            const {
              project_id,
              psudo_name,
              title,
              username,
              description,
              project_img,
              created_date,
              user_profile,
            } = project;
            return (
              <div className="project-container" key={project_id}>
                {/* project profile picture */}
                <section className="project-info">
                  <div className="project-upper-section">
                    <div className="cover-img">
                      <img src={user_profile} alt={username} />
                    </div>

                    <div className="project-description">
                      <div className="project-user-info">
                        <p className="project-creator">
                          <span>{username}</span>
                        </p>

                        <span className="project-duration">
                          {moment(created_date).format("MMMM DD YYYY")} .{" "}
                          {moment(created_date).fromNow()}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Project description */}
                  <p className="project-title">{description}</p>
                </section>
                image
                <div className="project-img">
                  <img src={project_img} alt={title} />
                </div>
              </div>
            );
          })
        )}
      </ProjectContainer>

      {/* <button onClick={nextPage}>Load More</button> */}
    </div>
  );
};

export default Project;
