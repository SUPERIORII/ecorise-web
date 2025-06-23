import React from "react";

const SectionTitle = ({ Title }) => {
  return (
    <div className="border-b border-base-300 mb-10 pt-6">
      <h2
        className="card-title text-2xl
         font-mediumtracking-wider"
      >
        {Title ? Title : "Ecorise Title"}
      </h2>
    </div>
  );
};

export default SectionTitle;
