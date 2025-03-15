import React from "react";
import "../homenews/LeftHomeNewSkeleton.css";
const LeftHomeNewSkeleton = () => {
  return (
    <div className="news-ergi-container">
      <div className="ergi-news-wrapper">
        {/* latest news */}
        <section className="left-section">
          <div className="skeleton-img"></div>

          <div className="latest-info">
            <div className="skeleton"></div>
            <div className="skeleton"></div>

            <div className="skeleton"></div>
          </div>
        </section>

        {/* all news */}
      </div>
    </div>
  );
};

export default LeftHomeNewSkeleton;
