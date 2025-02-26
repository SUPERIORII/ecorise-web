import React from "react";
import "../homenews/HomeNews.css";

const HomeNews = () => {
  return (
    <div className="news-ergi-container">
      <p className="news-title">{"LATEST NEWS".toUpperCase()}</p>

      <div className="ergi-news-wrapper">
        <section className="left-section">
          <img src="/src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg" alt="" />

          <div className="latest-info">
            <p className="lt-section-category">
              category: <span>Climate</span>
            </p>
            <h4>
              Liberia highest court must hold states accountable on climate
              change
            </h4>

            <p className="duration">July 20, 2024 &#00; 3hours ago</p>
          </div>
        </section>

        <section className="rigt-section">
          <div className="right-section-list">
            <div className="">
              <img
                src="/src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
                alt=""
              />
            </div>

            <div className="latest-info">
              <p className="rt-section-category">
                category: <span>Climate</span>
              </p>
              <h4 className="rt-section-title">
                Liberia highest court must hold states accountable on climate
                change
              </h4>

              <p className="rt-section-duration">
                July 20, 2024 &#00; 3hours ago
              </p>
            </div>
          </div>

          <div className="right-section-list">
            <div className="">
              <img
                src="/src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
                alt=""
              />
            </div>

            <div className="latest-info">
              <p className="rt-section-category">
                category: <span>Climate</span>
              </p>
              <h4 className="rt-section-title">
                Liberia highest court must hold states accountable on climate
                change
              </h4>

              <p className="rt-section-duration">
                July 20, 2024 &#00; 3hours ago
              </p>
            </div>
          </div>

          <div className="right-section-list">
            <div className="">
              <img
                src="/src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
                alt=""
              />
            </div>

            <div className="latest-info">
              <p className="rt-section-category">
                category: <span>Climate</span>
              </p>
              <h4 className="rt-section-title">
                Liberia highest court must hold states accountable on climate
                change
              </h4>

              <p className="rt-section-duration">
                July 20, 2024 &#00; 3hours ago
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeNews;
