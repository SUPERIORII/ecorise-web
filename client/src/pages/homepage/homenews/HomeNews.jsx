import React from "react";
import "../homenews/HomeNews.css";
import { useQuery } from "@tanstack/react-query";
import customUrl from "../../../basedUrl";
import LeftHomeNewSkeleton from "./LeftHomeNewSkeleton";
import RightHomeNewSkeleton from "./RightHomeNewSkeleton";

const HomeNews = () => {
  // latest news
  const latestNews = useQuery({
    queryKey: ["latestNews"],
    queryFn: async () => {
      const response = await customUrl.get("/api/news/latest-news");
      return response.data;
    },
  });

  // all News
  const allNews = useQuery({
    queryKey: ["allNews"],
    queryFn: async () => {
      const response = await customUrl.get("/api/news/fetch-news");
      return response.data;
    },
  });

  console.log(allNews.data);

  return (
    <div className="news-ergi-container">
      <p className="news-title">{"LATEST NEWS".toUpperCase()}</p>

      <div className="ergi-news-wrapper">
        {/* latest news */}
        {latestNews.isError ? (
          "Something went wrong"
        ) : latestNews.isLoading ? (
          <LeftHomeNewSkeleton />
        ) : (
          latestNews.data.map((latestnew) => {
            const {
              newsId,
              userId,
              title,
              description,
              newsImg,
              createdDate,
              relativeTime,
              newsTime,
            } = latestnew;

            return (
              <section className="left-section" key={newsId}>
                <div className="latest-img-wrapper">
                  <img src={newsImg} alt={title} />
                </div>

                <div className="latest-info">
                  <p className="lt-section-category">
                    category: <span>Climate</span>
                  </p>
                  <h4>{title}</h4>

                  <p className="duration">
                    {createdDate} @{newsTime} &#00; {relativeTime}
                  </p>
                </div>
              </section>
            );
          })
        )}

        {/* all news */}

        <section className="rigt-section">
          {allNews.isError ? (
            "error loading all news"
          ) : allNews.isLoading ? (
            <RightHomeNewSkeleton />
          ) : (
            allNews.data.map((news) => {
              return (
                <div className="right-section-list" key={news.newsId}>
                  <div className="">
                    <img src={news.newsImg} alt={news.title} />
                  </div>

                  <div className="latest-info">
                    <p className="rt-section-category">
                      category: <span>Climate</span>
                    </p>
                    <h4 className="rt-section-title">{news.title}</h4>

                    <p className="rt-section-duration">
                      {news.createdDate} &#00; {news.relativeTime}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </section>
      </div>
    </div>
  );
};

export default HomeNews;
