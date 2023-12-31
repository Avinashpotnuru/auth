import React, { useState } from "react";

const Child = ({ bgChange }) => {
  const [color, setColor] = useState("");
  const colorChange = (e) => {
    setColor(e.target.value);
    bgChange(e.target.value);
  };
  return (
    <div>
      <input
        placeholder="ENTER COLOR NAME ..."
        value={color}
        onChange={colorChange}
      />
    </div>
  );
};

export default Child;
