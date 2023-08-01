import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesDetails from "./MoviesDetails";
import BounceLoader from "react-spinners/ClipLoader";

import "./index.css";

const MoviesDb = () => {
  const [moviesData, getMoviesData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const moviesDbAPI = axios.create({
    baseURL: "https://api.themoviedb.org/3/list/",
    headers: {
      Accept: "application/json",
    },
    params: {
      api_key: "4a867d8702eaa2d58333f3feb3238409",
    },
  });

  //   const key = "4a867d8702eaa2d58333f3feb3238409";

  const getData = () => {
    setLoading(true);
    moviesDbAPI
      .get("20")
      .then((res) => {
        if (res.status) {
          setLoading(false);
          console.log(res.data.items);
          getMoviesData(res.data.items);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log("movies", moviesData);

  return (
    <div className="movies">
      <h1>MoviesDb</h1>

      {isLoading ? (
        <BounceLoader size={60} />
      ) : (
        <div className="moviesblock">
          {moviesData.map((item) => (
            <MoviesDetails {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesDb;
