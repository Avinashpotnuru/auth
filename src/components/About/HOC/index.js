import React, { useState } from "react";

const HOC = (Component) => {
  const name = "avinash";
  const Counter = () => {
    const [count, setCount] = useState(0);
    const add = () => setCount((prev) => prev + 1);
    return <Component name={name} count={count} add={add} />;
  };

  return () => <Counter />;
};

export default HOC;
