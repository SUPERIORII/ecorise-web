import React, { useState } from "react";
import "../news/News.css";
import { useQuery } from "@tanstack/react-query";
import customUrl from "../../basedUrl";
import UniqueCategoriesList from "../../components/utils/Categories/UniqueCategoriesList";
import moment from "moment";
import LandingSkeleton from "../../components/utils/skeleton/LandingSkeleton";
import SearchForm from "../../components/utils/SearchForm";
import { useAuthContext } from "../../context/AppContext";
import {Link} from "react-router-dom"

const News = () => {
  const {searchTerms} = useAuthContext()

  console.log("searchTerms:", searchTerms);
  
  const { isError, isLoading, data } = useQuery({
    queryKey: ["news", searchTerms],
    queryFn: async () => {
      const response = await customUrl.get(
        `/api/news/fetch-news/search?s=${searchTerms}`
      );

      return response.data;
    },
  });

  return (
    <div className="general-container">
      <SearchForm />

      {searchTerms && (
            <span>
              Search Match:
              {data?.totalSearch}
            </span>
          )}

      <p className="news-title">{"LATEST NEWS".toUpperCase()}</p>

      <div className="news-wrapper">
        {isError ? (
          "Error fetching news..."
        ) : isLoading ? (
          <LandingSkeleton />
        ) : data && data.result.length > 0 ? (
          data.result.map((news) => {
            const { id, category, news_img, created_date, title } = news;

            return (
              <section className="news-preview-list" key={id}>
                <Link to={`/news/${id}`}>
                  <div className="news-preview-img">
                    <img src={news_img} alt="img" />
                  </div>
                </Link>

                <div className="latest-info">
                  <span>#{category}</span>

                  <h4 className="preview-title">{title}</h4>

                  <p className="news-preview-duration">
                    {moment(created_date).format("MMMM DD YYYY")} &#126;{" "}
                    {moment(created_date).fromNow()}
                  </p>
                </div>
              </section>
            );
          })
        ) : (
          "news not found"
        )}
      </div>
    </div>
  );
};

export default News;
