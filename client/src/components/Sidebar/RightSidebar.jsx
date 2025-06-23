import React from "react";

import styled from "styled-components";
import MiniTitle from "../utils/title/MiniTitle";
import { useQuery } from "@tanstack/react-query";
import customUrl from "../../basedUrl";

const Rightbar = styled.aside`
  /* position: fixed; */
  height: 100%;
  top: 15%;
  width: 350px;
  right: 0px;
  border-right: 1px solid var(--white-300);
  padding: 0.5rem 0.5rem;
  transition: opacity 0.5s ease-in-out;

  @media screen and (max-width: 1024px) {
    display: none;
  }
  .nav-menu-wrapper {
    margin-top: 20px;
  }

  .nav-menu > a {
    color: #555555;
    text-decoration: none;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.7rem;
    cursor: pointer;
    margin-bottom: 0.5rem;
    text-decoration: none;
  }

  .nav-menu > span {
    color: #555555;
    font-weight: 600;
  }

  .nav-menu:hover {
    background-color: var(--white-200);
  }

  .nav-menu .icon {
    font-size: 23px;
  }
`;

// latest activities styles
const LatestActivities = styled.div`
  background-color: var(--white-100);

  min-height: 200px;
  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: var(--box-shadow-10);
  padding: 1em;

  .activities-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  span {
    font-weight: 300;
    font-size: 13px;
  }

  span .username {
    font-weight: 700;
  }
`;

// latest news styles

const LatestNews = styled.div`
  background-color: var(--white-100);

  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: var(--box-shadow);
  padding: 1em;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .title {
    font-weight: 700;
  }
`;
const LatestProject = styled.div`
  background-color: var(--white-100);

  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: var(--box-shadow);
  padding: 1em;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding-top: 15px;
  max-height: 140px;
  overflow: hidden;

  .content {
    display: flex;
    align-items: center;
    gap: 0.9rem;

    width: 100%;
    /* background-color: green; */
  }
`;

const RightSidebar = () => {
  // fetching latest News
  const {
    isError: NewsError,
    isLoading: LoadingNews,
    data: latestNews,
  } = useQuery({
    queryKey: ["latestNews"],
    queryFn: async () => {
      const response = await customUrl.get("/api/news/latest-news");
      return response;
    },
  });

  // fetching latest projects
  const {
    isError: projectError,
    isLoading: LoadingProject,
    data: latestProjects,
  } = useQuery({
    queryKey: ["latestProject"],
    queryFn: async () => {
      const response = await customUrl.get("/api/projects/latest-projects");
      return response.data;
    },
  });

  return (
    <div className="activity">
      <Rightbar>
        {/* latest activities */}
        <LatestActivities>
          <MiniTitle title="Latest Activities" />
          <ContentContainer>
            <div className="activities-content">
              <img
                src="../src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
                alt="ff"
              />
              <span>
                <span className="username">Abraham</span> posted a new project.
              </span>

              <span>1 min agos</span>
            </div>

            <div className="activities-content">
              <img
                src="../src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
                alt="ff"
              />
              <span>
                <span className="username">Abraham</span> posted a new project.
              </span>

              <span>1 min agos</span>
            </div>

            <div className="activities-content">
              <img
                src="../src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
                alt="ff"
              />
              <span>
                <span className="username">Abraham</span> posted a new project.
              </span>

              <span>1 min agos</span>
            </div>
          </ContentContainer>
        </LatestActivities>

        {/* Latest News */}
        <LatestNews>
          <MiniTitle title="Latest News for you" />
          <ContentContainer>
            {NewsError
              ? "Error loading latest news"
              : LoadingNews
              ? "loading lates news..."
              : latestNews && latestNews.length > 0
              ? latestNews.map((news) => {
                  const { newsId: id, newsImg: img, title } = news;

                  return (
                    <div className="content" key={id}>
                      <img src={img} alt="news img" />
                      <span className="title">{title}</span>
                    </div>
                  );
                })
              : "news not found"}
          </ContentContainer>
        </LatestNews>

        {/* Latest projects */}
        <LatestProject>
          <MiniTitle title="Latest Peojects" />
          <ContentContainer>
            {projectError
              ? "Error loading project"
              : LoadingProject
              ? "loading latest projects..."
              : latestProjects && latestProjects.length > 0
              ? latestProjects.map((project) => {
                  const { id, title, project_img: img } = project;

                  return (
                    <div className="content" key={id}>
                      <img src={img} alt="image" />
                      <span>{`${title.slice(0, 35)}...`}</span>
                    </div>
                  );
                })
              : "No project found"}
          </ContentContainer>
        </LatestProject>
      </Rightbar>
    </div>
  );
};

export default RightSidebar;
