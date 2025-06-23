import React from "react";
import { SingleImages } from "../../sources";
import styled from "styled-components";

console.log(SingleImages);

const Project = styled.section`
padding: 20px;
.projects {
background-color: lightblue;
width: 300px;
}
`;

const AdminProject = () => {
  return (
    <Project>
      <button>Create Project</button>

      <Project className="projects">
        <img
          style={{ width: "250px", height: "150px", objectFit: "cover" }}
          src={SingleImages.image}
          alt="preview"
        />
        <p>Category</p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque
          ex odio similique inventore reiciendis praesentium saepe officiis nisi
          aliquam.
        </span>
      </Project>
    </Project>
  );
};

export default AdminProject;
