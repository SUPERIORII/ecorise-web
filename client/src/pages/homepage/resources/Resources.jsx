import React from "react";
import "../../homepage/resources/Resources.css";
import { useQuery } from "@tanstack/react-query";
import customUrl from "../../../basedUrl";

const Resources = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["latestResources"],
    queryFn: async () => {
      const response = await customUrl.get("/api/resource/latest-resources");
      return response.data;
    },
  });

  // console.log(data);

  return (
    <div className="resources-ergi-container">
      <p className="resource-title">{"Resources".toUpperCase()}</p>

      <section className="resource-flex">
        {isError
          ? "Error occur"
          : isLoading
          ? "Loading..."
          : data.map((resources) => {
              console.log(resources);

              return (
                <div className="resource-list" key={resources.id}>
                  <img
                    src={resources.resources_thumbnail}
                    alt={resources.category}
                  />

                  <div className="resource-desc">
                    <span className="title">{resources.category}</span>
                    <p className="resources-desc">{resources.description}</p>

                    <button>
                      {resources.category === "article"
                        ? "view article"
                        : resources.category === "video"
                        ? "watch the video"
                        : "See the case study"}
                    </button>
                  </div>
                </div>
              );
            })}

        {/* <div className="resource-list">
          <img src="/src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg" alt="" />

          <div className="resource-desc">
            <span className="title">Video</span>
            <p>
              Ecorise Global Initiative is the Best
            </p>

            <button>
              Watch the video
            </button>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Resources;
