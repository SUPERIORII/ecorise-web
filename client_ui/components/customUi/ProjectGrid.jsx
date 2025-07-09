import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const ProjectGrid = () => {
  return (
    <section className="border border-red-700 max-w-2xs">
      {/* project profile picture */}
      <Link href="/profile/movie">
        <img src="/images/img-5.jpg" alt="ddd" className="h-48 w-full" />
      </Link>

      {/* Project description */}
      <div className="project-description">
        <div className="project-user-info">
           <span className="project-duration">
            {/* {moment(project.created_date).format("MMMM D, YYYY")}

                {moment(project.created_date).fromNow()} */}
          </span>
        </div>
      </div>
      {/* image */}
      <div>
        <p className="project-title">description</p>
        <Avatar className="w-10 h-10">
          <AvatarImage src="/images/img-5.jpg" alt="img" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
};

export default ProjectGrid;
