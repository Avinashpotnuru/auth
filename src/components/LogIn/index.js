import React, { useState } from "react";

import Cookies from "js-cookie";

import { Navigate, useNavigate, useHistory } from "react-router-dom";

import "./index.css";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [err, setError] = useState(false);
  const { userName, password } = user;

  const navigation = useNavigate();

  // const history = useHistory();

  // console.log(history);

  function eventHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (userName && password) {
      console.log("user", user);
      if (userName === "avinash" && password === "9290145209") {
        Cookies.set("username", user.userName);
        Cookies.set("password", user.password);
      } else {
        setError(true);
      }

      const personName = Cookies.get("username");
      const personPassword = Cookies.get("password");
      // localStorage.setItem("userDetails", JSON.stringify(user));

      // const personDetails = localStorage.getItem("userDetails");
      // const parsePersonDetails = JSON.parse(personDetails);
      // console.log(parsePersonDetails);

      if (personName === "avinash" && personPassword === "9290145209") {
        // <Navigate to="/" />;
        navigation("/");
        setUser({ userName: "", password: "" });
      }
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
        <br />
        {err && (
          <h6 style={{ color: "red" }}>enter correct username and password</h6>
        )}
      </form>
    </div>
  );
};

export default Login;
