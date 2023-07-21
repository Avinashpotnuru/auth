import React from "react";

const Card = ({ task, onDelete, id }) => {
  return (
    <div key={id}>
      <h1 style={{ display: "inline-block", margin: "0px 10px" }}>{task}</h1>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
};

export default Card;
