import React from "react";
import "./index.css";

const MoviesDetails = ({
  title,
  overview,
  tagline,
  vote_average,
  vote_count,
  release_date,
  homepage,
  status,
  poster_path,
  backdrop_path,
}) => {
  console.log(title);
  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="moviedetails">
      <img src={`${imagePath}${poster_path}`} alt="img" />
      <div>
        <h2>{title}</h2>
        <h3>{tagline}</h3>
        {/* <h3>{overview}</h3> */}
        <h3>
          average:<span>{vote_average}</span>
        </h3>
        <h3>
          views:<span>{vote_count}</span>
        </h3>
        <h3>
          date of release:<span>{release_date}</span>
        </h3>
        <h3>
          released_status:<span>{status}</span>
        </h3>
        <h3>
          official_site:
          <span>
            <a target="_blank" href={homepage} rel="noreferrer">
              Link
            </a>
          </span>
        </h3>
      </div>
    </div>
  );
};

export default MoviesDetails;
