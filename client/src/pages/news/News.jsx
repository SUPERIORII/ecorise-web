import React from "react";
import "../news/News.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import customUrl from "../../basedUrl";
//

const News = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["latestnews"],
    queryFn: async () => {
      const response = await customUrl.get("/api/news/fetch-news");
      return response.data;
    },
  });

  console.log(isError, isLoading, data);

  return (
    <div className="general-container">
      <aside className="search-container">
        <div className="search-wrapper">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for News..."
          />
          <div className="search-icon-holder">
            <AiOutlineSearch className="search-icon" />
          </div>
        </div>
      </aside>

      <div className="cartgory-btn-wrapper">
        <button>#Climate</button>
        <button>#Environment</button>
        <button>#Climate</button>
        <button>#Climate</button>
        <button>#Climate</button>
      </div>

      <p className="news-title">{"LATEST NEWS".toUpperCase()}</p>

      <div className="news-wrapper">
        {isError
          ? "Error fetching news..."
          : isLoading
          ? "Loading..."
          : data && data.length > 0
          ? data.map((news) => {
              const {
                newsId: id,
                newsImg,
                title,
                category,
                relativeTime,
                createdDate,
              } = news;
              return (
                <section className="news-preview-list" key={id}>
                  <div className="news-preview-img">
                    <img src={newsImg} alt="img" />
                  </div>

                  <div className="latest-info">
                    <span>#{category}</span>

                    <h4 className="preview-title">{title}</h4>

                    <p className="news-preview-duration">
                      {createdDate} &#126; {relativeTime}
                    </p>
                  </div>
                </section>
              );
            })
          : "news not found"}
      </div>
    </div>
  );
};

export default News;
