import React from "react";

const Button = ({ children, color, onClick }) => {
  const bgColor = {
    backgroundColor: color === "green" ? "green" : color === "red" ? "red" : "",
  };
  return (
    <button onClick={onClick} style={bgColor}>
      {children}
    </button>
  );
};

export default Button;
