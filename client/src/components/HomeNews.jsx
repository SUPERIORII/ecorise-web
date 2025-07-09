import React from "react";
import { useQuery } from "@tanstack/react-query";
// import customUrl from "../basedUrl";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import { ElementGrid, SectionTitle } from "./common";
import { API_BASE_URL, ENDPOINTS } from "../constants/Constants";

const HomeNewsList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  .home-news {
    background-color: var(--white-100);
    padding: 0.5rem;
    border-radius: 10px;
  }

  .home-news .homenews-img-preview img {
    aspect-ratio: 7 / 5;
    /* object-fit: cover; */
    object-fit: cover;
    border-radius: 10px;
    object-position: top;
    width: 100%;
    /* height: 300px; */
  }

  .homenews-preview-duration {
    color: var(--color-duration);
    margin-top: 15px;
    font-size: clamp(12px, 2vw, 14px);
  }

  button {
    color: var(--white-100);
    background-color: var(--color-primary);
    border: none;
    padding: 0.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    font-size: clamp(12px, 2vw, 14px);
  }
`;

const HomeNews = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["homeNews"],
    queryFn: async () => {
      const response = await API_BASE_URL.get(`${ENDPOINTS.LATEST_NEWS}`);
      return response.data;
    },
  });


  return (
    <>
      <div className="">
        <SectionTitle Title="Latest News" />
        {isError ? (
          "error occur"
        ) : isLoading ? (
          "loading"
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.map((news) => {
              return (
                <div key={news.id}>
                  <ElementGrid
                    url={ENDPOINTS.SPECIFIC_QUERY_NEWS + news.news_slug}
                    {...news}
                  />
                </div>
                // <section className="home-news" key={news.news_id}>
                //   <div className="homenews-img-preview">
                //     <img src={news.news_img} alt="img" />
                //   </div>

                //   <div className="latest-info">
                //     <span>#{news.category}</span>

                //     <h4 className="preview-title">{news.title}</h4>

                //     <p className="homenews-preview-duration">
                //       {moment(news.created_date).format("MMMM DD YYYY")} &#126;
                //       {moment(news.created_date).fromNow()}
                //     </p>
                //   </div>

                //   <Link to={`/news/${news.news_id}`}>
                //     <button>View Detail</button>
                //   </Link>
                // </section>
              );
            })}
          </div>
        )}
      </div>

      <ElementGrid
        url="/profile"
        category="Movie"
        description="this is a description"
        news_img="./src/assets/images/img-5.jpg"
        title="Title"
        key={1}
      />
    </>
  );
};

export default HomeNews;
