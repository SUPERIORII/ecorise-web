import React, { useState } from "react";
import { FaVideo, FaPlay, FaCashRegister } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import customUrl from "../../basedUrl";
import styled from "styled-components";

const ResourcesRapper = styled.div`
  .resource-nav-container {
    position: sticky;
    top: 100px;
    padding: 1rem;
    margin-bottom: 20px;
    background-color: white;
    /* border-bottom: 1px solid var(--color-primary); */
    z-index: 99;
    display: flex;
    gap: 3rem;
  }

  .nav-item {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
  }

  .nav-icon {
    font-size: 20px;
    color: var(--color-primary);
    cursor: pointer;
  }

  .nav-item .nav-desc {
    font-size: 20px;
    color: var(--color-primary);
  }
`;

const Resources = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["latestResources"],
    queryFn: async () => {
      const response = await customUrl.get("/api/resource/full-resources");
      return response.data;
    },
  });
  console.log(data);

  return (
    <ResourcesRapper>
      <nav className="resource-nav-container">
        {/* article */}
        <div className="nav-item">
          <FaVideo className="nav-icon" />

          <div className="nav-desc">Articles</div>
        </div>

        {/* video */}
        <div className="nav-item">
          <FaPlay className="nav-icon" />

          <div className="nav-desc">Video</div>
        </div>

        {/* case study */}
        <div className="nav-item">
          <FaCashRegister className="nav-icon" />

          <div className="nav-desc">Case study</div>
        </div>
      </nav>

      {/* Resources List */}
      <section className="resource-flex">
        {isError
          ? "Error occur"
          : isLoading
          ? "Loading..."
          : data.map((resources) => {
              console.log(resources);

              return (
                <div className="resource-list" key={resources.id}>
                  <img
                    src={resources.resources_thumbnail}
                    alt={resources.category}
                  />

                  <div className="resource-desc">
                    <span className="title">{resources.category}</span>
                    <p className="resources-desc">{resources.description}</p>

                    <button>
                      {resources.category === "article"
                        ? "view article"
                        : resources.category === "video"
                        ? "watch the video"
                        : "See the case study"}
                    </button>
                  </div>
                </div>
              );
            })}
      </section>
    </ResourcesRapper>
  );
};

export default Resources;
