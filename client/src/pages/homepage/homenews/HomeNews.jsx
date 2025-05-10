import React from "react";
import "../homenews/HomeNews.css";
import { useQuery } from "@tanstack/react-query";
import customUrl from "../../../basedUrl";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

const HomeNewsList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

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
    padding: .8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    font-size: clamp(12px, 2vw, 14px);
  }

  @media screen and (min-width: 275px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HomeNews = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["homeNews"],
    queryFn: async () => {
      const response = await customUrl.get("api/news/getnews");
      return response.data;
    },
  });

  console.log(data);

  return (
    <div className="">
      <p className="news-title">{"LATEST NEWS".toUpperCase()}</p>
      {isError ? (
        "error occur"
      ) : isLoading ? (
        "loading"
      ) : (
        <HomeNewsList>
          {data.map((news) => {
            return (
              <section className="home-news" key={news.news_id}>
                <div className="homenews-img-preview">
                  <img src={news.news_img} alt="img" />
                </div>

                <div className="latest-info">
                  <span>#{news.category}</span>

                  <h4 className="preview-title">{news.title}</h4>

                  <p className="homenews-preview-duration">
                    {moment(news.created_date).format("MMMM DD YYYY")} &#126;
                    {moment(news.created_date).fromNow()}
                  </p>
                </div>

                <Link to={`/news/${news.news_id}`}>
                  <button>View Detail</button>
                </Link>
              </section>
            );
          })}
        </HomeNewsList>
      )}
    </div>
  );
};

export default HomeNews;
