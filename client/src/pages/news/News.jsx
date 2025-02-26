import React from "react";
import "../news/News.css";
import { AiOutlineSearch } from "react-icons/ai";
//  




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
      </div>

      <p className="news-title">{"LATEST NEWS".toUpperCase()}</p>

      <div className="news-wrapper">
        <section className="news-preview-list">
          <div className="news-preview-img">
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
              modi nam cum? Aliquid voluptates doloribus vero asperiores veniam,
              error obcaecati hic dolores!
            </p>

            <p className="news-preview-duration">
              July 20, 2024 &#126; 3hours ago
            </p>
          </div>
        </section>

        <section className="news-preview-list">
          <div className="news-preview-img">
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
              modi nam cum? Aliquid voluptates doloribus vero asperiores veniam,
              error obcaecati hic dolores!
            </p>

            <p className="news-preview-duration">
              July 20, 2024 &#126; 3hours ago
            </p>
          </div>
        </section>

        <section className="news-preview-list">
          <div className="news-preview-img">
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
              modi nam cum? Aliquid voluptates doloribus vero asperiores veniam,
              error obcaecati hic dolores!
            </p>

            <p className="news-preview-duration">
              July 20, 2024 &#126; 3hours ago
            </p>
          </div>
        </section>
      </div>

      <div className="related-stories-section">
        <div className="related-stories">
          <button className="stories-btn ">More</button>

          <div className="related-stories-title">related stories</div>
        </div>

        <section className="related-news-wrapper">
          <div className="project-preview">
            <div className="project-img-container">
              <img
                src="/src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
                alt="img"
              />
            </div>

            <div className="related-info">
              <span>#Stories</span>

              <div className="info">
                <p className="project-desc">
                  Green plants are going to Extinct about 500 times faster...
                </p>
              </div>

              <div className="related-news-info">
                <div>
                  <h5>Greenpeace</h5>
                  <p>Jul 13, 2024 3 . weeks ago</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
