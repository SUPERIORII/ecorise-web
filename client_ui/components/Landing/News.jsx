import React from "react";
import { ElementGrid } from "../customUi";
import baseUrl from "@/lib/baseUrl";
import Link from "next/link";
Link

// const response = await baseUrl.get()

const News = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/news", {
    cache: "no-store"
  });
  const news = await response.json();

  return (
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3">
      {news.map((homeNews) => {
        const { id, title, description, category, news_slug } = homeNews;
        return (
            <Link href={`/${news_slug}`} key={id}>
                <ElementGrid
                  title={title}
                  description={description}
                  category={category}
                  news_img="/images/img-2.jpg"
                />

            </Link>
        );
      })}
    </div>
  );
};

export default News;
