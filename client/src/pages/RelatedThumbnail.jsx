import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Thumbnail = styled.div`
  .thumbnail-section {
    margin-top: 20px;
    display: flex;
    gap: 1rem;
  }

  .thumbnail-section:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .thumbnail-section a {
    /* text-decoration: none; */
    color: black;
  }

  .thumbnail {
    width: 80px;
    height: 80px;
    border-radius: 30px;
  }

  aside .thumbnail-title {
    font-weight: 700;
    text-transform: capitalize;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
const RelatedThumbnail = ({
  isRelatedError,
  isRelatedLoading,
  isRelatedData,
  relatedNews,
}) => {
  return (
    <div>
      {isRelatedError
        ? "error loading related news"
        : isRelatedLoading
        ? "Loading..."
        : relatedNews && relatedNews.length >0 ? relatedNews.map((relatednew) =>{
            return (
              <Thumbnail key={relatednew.id}>
                <a href={`/news/${relatednew.id}`}>
                  <section className="thumbnail-section">
                    <aside>
                      <img
                        className="thumbnail"
                        src="http://localhost:5173/src/assets/img-2.jpg"
                        alt="dd"
                      />
                    </aside>

                    <aside>
                      <div className="thumbnail-title">{relatednew.title}</div>
                      <div className="thumbnail-category">
                        {relatednew.category}
                      </div>
                    </aside>
                  </section>
                </a>
              </Thumbnail>
            );
        }
        ): "No Related Data found"}
    </div>
  );
};

export default RelatedThumbnail;
