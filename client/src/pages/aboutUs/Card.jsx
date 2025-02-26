import React from "react";

const Card = ({ state }) => {
  return (
    <div className="members">
      {state.map((result) => {
        const { id, img, name, rank } = result;
        return (
          <div key={id}>
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <p>{rank}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
