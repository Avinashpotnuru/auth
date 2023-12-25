import React from "react";
import Button from "../Button";

import { useQuery } from "react-query";
import axios from "axios";

const Fetching = () => {
  const getTodo = () => {
    return axios.get("https://jsonplaceholder.org/users");
  };
  const { data, isError, isLoading, error } = useQuery("todos", getTodo);

  console.log(data);

  if (isLoading) {
    return <h1>loading............</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <h1>fetching data</h1>
      <div>
        {data.data.map((item, idx) => (
          <h5 key={idx}>
            <span>{`${idx + 1} `}</span> {item.firstname}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default Fetching;
