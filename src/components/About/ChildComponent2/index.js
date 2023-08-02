import React from "react";
import HOC from "../HOC";

const ChildComponent2 = ({ add, count }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onMouseEnter={add}>{count}</button>
    </div>
  );
};

export default HOC(ChildComponent2);
