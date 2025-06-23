import React, { useRef, useState } from "react";
import { FaChevronCircleRight, FaEdit } from "react-icons/fa";
import { contents } from "../sources";
import customUrl from "../basedUrl";
// import { fetchContent } from "../contentFunctions";
const getUserUrl = "api/getusers";
import { useQuery } from "@tanstack/react-query";

const ContentManagement = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  // get our content type based on the selected link
  const handleSelection = (contentType) => {
    const content = contents.filter((name) => name.content === contentType);
    const newContent = content.map((content) => content.content);

    setSelectedContent(newContent[0].toLowerCase());
  };

  // fetch the the data based on the selected content
  const result = useQuery({
    queryKey: ["content", selectedContent],
    queryFn: async () => {
      const response = await customUrl.get("/api/"+selectedContent)
      return response;
    },
  });

  console.log(result);

  return (
    <main className="bg-background-200 text-black">
      <header className="h-16 mb-3 bg-green-500 font-sans">headers
      </header>
      <section className="flex px-5 h-screen">
        {/* first sections */}
        <section className="border-gray-200 border-r w-64">
          <h2 className="border-b py-3 font-semibold text-base">Content</h2>

          <div className="flex flex-col gap-3 cursor-pointer">
            {contents.map((content) => {
              return (
                <div
                  key={content.id}
                  className="content-link flex items-center justify-between text-base p-3
           hover:bg-background-hover"
                  onClick={() => handleSelection(content.content)}
                >
                  <span className="capitalize">{content.content}</span>
                  {content.icon}
                </div>
              );
            })}
          </div>
        </section>
        {/* second section */}
        <section className=" border-gray-200 border-r w-64">
          <div className="flex justify-between items-center">
            <h2 className="py-3 font-semibold text-base">User</h2>
            <div className="tools flex gap-4 px-4">
              <span className="cursor-pointer">
                <FaEdit />
              </span>
              <span>
                <FaEdit />
              </span>
            </div>
          </div>
          {/* search bar */}
          <div className="search-input border-b p-2">
            <input
              type="text"
              className="border-none bg-slate-200 w-full p-2 outline-none rounded-md"
              placeholder="Search list"
            />
          </div>

          {/* content list */}
          <div className="flex flex-col gap-3">
            <div
              className="flex items-center justify-between text-base p-3
              hover:bg-background-hover"
            >
              <span>User</span>
              <FaChevronCircleRight />
            </div>
          </div>
        </section>
        {/* second section */}
        <section className="flex-1">third section</section>
      </section>


    </main>
  );
};

export default ContentManagement;
