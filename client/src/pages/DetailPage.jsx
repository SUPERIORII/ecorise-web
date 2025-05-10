import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useFetch from "../components/Services/useFetch";
import LandingSkeleton from "../components/utils/skeleton/LandingSkeleton";
import moment from "moment";
import styled from "styled-components";
import Header from "../components/utils/header/Header";
import RelatedThumbnail from "./RelatedThumbnail";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Controls from "../components/utils/Controls";

const DetailPageWrapper = styled.div`
  padding-top: 80px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  height: calc(100vh - 300px);

  .img-wrapper {
    background-color: rgb(0, 0, 0);
    max-width: 2000px;
    overflow: hidden;
    margin-inline: auto;

    display: flex;
    justify-content: center;
    position: relative;
  }

  .img-wrapper img {
    width: 80%;
    height: 400px;
    border-radius: 10px;
    z-index: 1000;
    /* aspect-ratio: 5/10; */
  }

  &.fullscreen .img-wrapper {
    width: initial;
    min-height: 86vh;
  }
  &.fullscreen .img-wrapper img {
    /* width: initial; */
    min-height: 86vh;
  }

  &.fullscreen .detail-desc {
    display: none;
  }

 &.fullscreen .wide {
    display: none;
  }

 &:not(.fullscreen) .small {
    display: none;
  }

  /* controls ends */

  /* arrow */
  .arrows {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
  }

  .icon {
    font-size: 25px;
  }

  .detail-desc {
    padding: 1rem;
  }

  .detail-desc .detail-category {
    font-size: 18px;
    font-weight: bold;
  }

  .detail-desc .formated-time {
    font-size: 15px;
    color: #363636;
    margin-bottom: 30px;
    margin-top: 5px;
  }

  span {
    font-weight: bold;
    font-size: 17px;
  }

  /* controls container style */

  .controls-container {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 400px;
  }
`;

const DetailPage = () => {
  const { eid } = useParams();
  const [isFullScreen, setisFullScreen] = useState(false);

  const { isError, isLoading, data } = useQuery({
    queryKey: ["detailnews"],
    queryFn: () => useFetch(`/api/news/singlenews/?id=${eid}`),
  });

  // Getting all related projects
  const {
    isError: isRelatedError,
    isLoading: isRelatedLoading,
    data: isRelatedData,
  } = useQuery({
    queryKey: ["relatednews"],
    queryFn: () => useFetch(`/api/news/fetch-news/search?s=movies`),
  });

  // getting only the related news to the current news where their id do match

  const relatedNews = isRelatedData?.result?.filter(
    (project) =>
      data?.category === project.category && project.id !== parseInt(eid)
  );
  console.log(relatedNews);

  // showing the fullscreen mold

  return (
    <div className="detail-page">
      <Header />
      {isError ? (
        "Error Loading the page"
      ) : isLoading ? (
        <LandingSkeleton />
      ) : (
        <DetailPageWrapper className={isFullScreen ? "fullscreen" : null}>
          <div>
            <aside className="img-wrapper">
              {/* image controls */}

              <img
                src="http://localhost:5173/src/assets/img-2.jpg"
                alt={data.title}
              />

              <Controls
                setisFullScreen={setisFullScreen}
                isFullScreen={isFullScreen}
              />
              {/* arrow left */}
              <div className="arrows">
                <FaChevronLeft className="global-icon" />
                <FaChevronRight className="global-icon" />
              </div>
            </aside>

            {/* details  */}
            <aside className="detail-desc">
              <div className="detail-category">category - {data.category}</div>
              <div className="formated-time">
                Time: {moment(data.created_date).format("MMMM D YYYY")} @{" "}
                {moment(data.created_date).fromNow()}
              </div>

              {/* title */}
              <div>
                <span>Title</span>: <br /> {data.title}
              </div>
              <br />

              {/* description */}
              <div>
                <span>Description</span>: <br /> {data.description}
              </div>
            </aside>
          </div>

          <aside
            style={{
              backgroundColor: "white",
              padding: "1rem",
              borderRadius: "10px",
              height: "100%",
            }}
            className="related-news"
          >
            <h3>Related news</h3>

            <RelatedThumbnail
              isRelatedError={isRelatedError}
              isRelatedLoading={isRelatedLoading}
              relatedNews={relatedNews}
            />
          </aside>
        </DetailPageWrapper>
      )}
    </div>
  );
};

export default DetailPage;
