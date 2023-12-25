import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const personName = Cookies.get("username");
  const personPassword = Cookies.get("password");
  let auth = null;
  // const personDetails = localStorage.getItem("userDetails");
  // const parsePersonDetails = JSON.parse(personDetails);
  // if (
  //   (parsePersonDetails.userName !== undefined ||
  //     parsePersonDetails.userName !== null) &&
  //   (parsePersonDetails.password !== undefined ||
  //     parsePersonDetails.password !== null)
  // ) {
  //   auth = true;
  // } else {
  //   auth = false;
  // }

  // if (
  //   parsePersonDetails.userName !== undefined &&
  //   parsePersonDetails.password !== undefined
  // ) {
  //   auth = true;
  // } else {
  //   auth = false;
  // }

  if (personName && personPassword) {
    auth = true;
  } else {
    auth = false;
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
