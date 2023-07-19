import React from "react";

import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // console.log(navigate);
  return (
    <div className="header">
      <h1>Avinash</h1>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
      </ul>
      <button onClick={() => navigate("/login")}>logout</button>
    </div>
  );
};

export default Header;
