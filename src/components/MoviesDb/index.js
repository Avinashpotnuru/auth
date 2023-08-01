import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesDetails from "./MoviesDetails";
import BounceLoader from "react-spinners/ClipLoader";

import "./index.css";
import { ClockLoader, HashLoader } from "react-spinners";

const filterData = [
  { title: "Now Playing", filter_id: "now_playing" },
  { title: "Popular", filter_id: "popular" },
  { title: "Top Rated", filter_id: "top_rated" },
  { title: "Up Coming", filter_id: "upcoming" },
];

const MoviesDb = () => {
  const [moviesData, getMoviesData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [toggle, setToggle] = useState("upcoming");
  console.log(toggle);

  const moviesDbAPI = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/",
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
      .get(`${toggle}`)
      .then((res) => {
        if (res.status) {
          setLoading(false);
          console.log(res.data.results);
          getMoviesData(res.data.results);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  // console.log("movies", moviesData);

  return (
    <div className="movies">
      <h1>MoviesDb</h1>
      <div>
        {filterData.map((e, id) => (
          <button
            style={{
              // backgroundColor: toggle === e ? "red" : "",
              boxShadow:
                toggle !== e.filter_id
                  ? "2px 2px 2px green"
                  : "4px 4px 4px red",

              margin: "0px 20px",
              padding: "10px",
              minWidth: "120px",
            }}
            key={id}
            onClick={() => setToggle(e.filter_id)}
          >
            {e.title}
          </button>
        ))}
      </div>

      {isLoading ? (
        // <BounceLoader color="red" size={60} aria-label="Loading Spinner" />
        <HashLoader color="red" />
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
