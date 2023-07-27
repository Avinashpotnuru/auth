import React, { useState } from "react";

import { useSelector } from "react-redux";
import Child from "./Child";

const Contact = () => {
  const [ui, setUi] = useState("");
  const bgChange = (color) => {
    console.log("clr", color);
    setUi(color);
  };
  // const name = useSelector((state) => state.CartSlice.displayName.helperData);
  return (
    <div style={{ height: "100vh", background: `${ui}` }}>
      <Child bgChange={bgChange} />
    </div>
  );
};

export default Contact;
