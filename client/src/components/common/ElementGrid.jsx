import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { Link } from "react-router-dom";
const name =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, earum?";

// console.log();
const ElementGrid = ({ url, title, news_img, category, description }) => {
  return (
    <Link to={url}>
      <div className="card shadow-xl hover:shadow-2xl transition duration-300">
        <figure>
          <img
            className="rounded-xl h-48 md:48 w-full object-cover"
            src={news_img}
            alt={title}
          />
        </figure>

        <div className="card-body">
          <h2
            className={`badge badge-lg ${
              category === "Climate"
                ? "badge-secondary"
                : "badge-success text-white"
            }`}
          >
            <AiFillLayout /> {category}
          </h2>
          <h2 className="card-title">{title}</h2>
          <p>
            {description.length > 20
              ? `${description.slice(0, 50)}...`
              : description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ElementGrid;
