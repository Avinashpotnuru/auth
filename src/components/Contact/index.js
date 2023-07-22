import React from "react";

import { useSelector } from "react-redux";

const Contact = () => {
  const name = useSelector((state) => state.CartSlice.displayName.helperData);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Contact;
