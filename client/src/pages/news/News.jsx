import React, { useState } from "react";
import "../news/News.css";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useAuthContext } from "../../context/AppContext";
import { API_BASE_URL, ENDPOINTS } from "../../constants/Constants";
import { ElementGrid } from "../../components/common";

const News = () => {
  const { searchTerms } = useAuthContext();

  const { isError, isLoading, data } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const response = await API_BASE_URL.get(`${ENDPOINTS.GET_NEWS}`);

      return response.data;
    },
  });

  return (
    <div className="grid  gap-4 md:grid-cols-2 lg:grid-cols-3">
      {isError
        ? "Error Getting news"
        : isLoading
        ? "Loading..."
        : data.map((news) => {
            return (
              <ElementGrid
                url={ENDPOINTS.SPECIFIC_QUERY_NEWS + news.news_slug}
                {...news}
              />
            );
          })}
    </div>
  );
};

export default News;
