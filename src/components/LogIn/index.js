import React, { useState } from "react";

import Cookies from "js-cookie";

import { Navigate } from "react-router-dom";

import "./index.css";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = user;

  const eventHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (userName && password) {
      console.log("user", user);
      // Cookies.set("username", user.userName);
      // Cookies.set("password", user.password);

      // const personName = Cookies.get("username");
      // const personPassword = Cookies.get("password");
      localStorage.setItem("userDetails", JSON.stringify(user));

      const personDetails = localStorage.getItem("userDetails");
      console.log(personDetails);

      // console.log(personPassword, personName);
      if (
        personDetails.userName === "avinash" &&
        personDetails.password === "9290145209"
      ) {
        <Navigate to={"/"} />;
      }

      setUser({ userName: "", password: "" });
    }
  };
  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <label>user name</label>
        <input
          type="text"
          name="userName"
          value={userName}
          placeholder="enter username"
          onChange={eventHandler}
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="enter password"
          onChange={eventHandler}
        />

        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
