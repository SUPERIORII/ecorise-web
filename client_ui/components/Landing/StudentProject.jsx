import React from "react";
import { StudentProjectGrid } from "../customUi";
import Link from "next/link";

const StudentProject = async () => {
  // get the data
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/project",
    {
      next: { revalidate: 1 },
    }
  );
  const projects = await response.json();

  console.log(projects);

  return (
    <>
      {projects.map((project) => {
        return (
          <Link
            href={`/project/${project.project_id}`}
            key={project.project_id}
          >
            <StudentProjectGrid {...project} />;
          </Link>
        );
      })}
    </>
  );
};

export default StudentProject;
