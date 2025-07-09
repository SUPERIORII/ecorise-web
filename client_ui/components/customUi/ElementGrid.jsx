import React from "react";
import { AiFillLayout } from "react-icons/ai";
import Link  from "next/link";
import { Badge, badgeVariants} from "../ui/badge";

const name =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, earum?";

// console.log();
const ElementGrid = ({ title, news_img, category, description }) => {
  return (
   
      <div className="shadow-xl hover:shadow-2xl transition duration-300 flex flex-col gap-2">
        <figure>
          <img
            className="rounded-xl h-[230px] md:48 w-full object-cover object-left-top"
            src={news_img}
            alt={title}
          />
        </figure>

        <div className="p-4">
          <Badge
            className={`text-base ${
              category === "Climate"
                ? "badge-secondary"
                : "badge-success text-white"
            }`}
          >
            <AiFillLayout size={25} /> {category}
          </Badge>
          <h2 className="font-medium my-3">{title}</h2>
          <p>
            {description.length > 100
              ? `${description.slice(0, 33)}...`
              : description}
          </p>
        </div>
      </div>
   
  );
};

export default ElementGrid;
