import React from "react";

const SubmitBtn = ({ text, handleSubmit }) => {
  return (
    <button
      className="btn btn-block text-lg bg-lime-600 hover:bg-lime-500 
    text-white font-medium py-3 px-4 rounded-md transition duration-300 cursor-pointer
    border-none outline-none
    " onClick={handleSubmit}
    >
      {text}
    </button>
  );
};

export default SubmitBtn;
