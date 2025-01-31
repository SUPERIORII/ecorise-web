import React from "react";
import "../news/News.css";
import { AiOutlineSearch } from "react-icons/ai";

const News = () => {
  return (
    <div className="news-ergi-container">
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
      <div className="cartgory-wrapper">
        <p>#Climate</p>
        <p>#Environment</p>
        <p>#Climate</p>
        <p>#Climate</p>
        <p>#Climate</p>
        <p>#Climate</p>
      </div>

      <p className="news-title">{"LATEST NEWS".toUpperCase()}</p>

      <div className="ergi-news-wrapper">
        <section className="news-preview-container">
          <div className="news-preview-list">
            <div className="">
              <img
                src="/src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
                alt=""
              />
            </div>

            <div className="latest-info">
              <p className="news-preview-category">
                category: <span>Climate</span>
              </p>
              <h4 className="preview-title">
                Liberia highest court must hold states accountable on climate
                change eoeeooeoe
              </h4>

              <p className="news-preview-detail">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                modi nam cum? Aliquid voluptates doloribus vero asperiores
                veniam, error obcaecati hic dolores!
              </p>

              <p className="news-preview-duration">
                July 20, 2024 &#00; 3hours ago
              </p>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default News;
