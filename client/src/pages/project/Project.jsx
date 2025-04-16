import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.article``;

const Upper = styled.section``;

const Project = () => {
  return (
    <div className="general-container">
      <ProjectContainer>
        <div className="project-container">
          {/* project profile picture */}
          <section className="project-info">
            <div className="project-upper-section">
              <div className="cover-img">
                <img
                  src="../src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
                  alt="abraham"
                />
              </div>

              <div className="project-description">
                <div className="project-user-info">
                  <p className="project-creator">
                    <span>Abraham</span> created a new Project
                  </p>

                  <span className="project-duration">
                    April 10, 2025 . 2 hours ago
                  </span>
                </div>
              </div>
            </div>

            {/* Project description */}
            <p className="project-title">Going up is the best thing to note</p>
          </section>

          {/* image */}
          <div className="project-img">
            <img
              src="../src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
              alt="img"
            />
          </div>
        </div>
      </ProjectContainer>
    </div>
  );
};

export default Project;
