import React from "react";
import HOC from "../HOC";

const ChildComponent = ({ count, add }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>add</button>
    </div>
  );
};

export default HOC(ChildComponent);
