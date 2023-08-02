import React from "react";

import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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
        {/* <Link to={"/todo"}>
          <li>Todo</li>
        </Link> */}
        <Link to={"/crud"}>
          <li>CRUD</li>
        </Link>
        <Link to={"/cart"}>
          <li>Cart</li>
        </Link>
        <Link to={"/movies"}>
          <li>movies</li>
        </Link>
      </ul>
      <button
        onClick={() => {
          navigate("/login");
          Cookies.remove("username");
          Cookies.remove("password");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Header;
