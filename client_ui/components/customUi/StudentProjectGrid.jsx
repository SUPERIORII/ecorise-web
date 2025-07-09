import React from "react";

const StudentProjectGrid = ({ title }) => {
  const resources = [{ category: "all" }];
  return (
    <section className="border-3 w-60">
      <div className="relative  text-white ">
        <img src="/images/rise.png" alt="aaaa" className="h-42" />

        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)]  opacity-0 hover:opacity-100 transition-opacity ease-out">
          <p className="resources-desc opacity-100absolute top-0 text-center my-auto opacity-0 hover:opacity-100 transition ease-out">
            {title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentProjectGrid;
