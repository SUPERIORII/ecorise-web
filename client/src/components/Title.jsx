import React from "react";

const Title = ({ title }) => {
  return (
    <section className="welcome-title">
      <h2>{`${title.toUpperCase()}` ||`Ecorise Title`}</h2>
      <div className="underlay-tracker"></div>
    </section>
  );
};

export default Title;
