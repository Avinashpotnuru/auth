import React from "react";
import ChildComponent from "./ChildComponent";
import ChildComponent2 from "./ChildComponent2";

const About = () => {
  return (
    <div>
      <h1>HOC</h1>
      <ChildComponent />
      <ChildComponent2 />
    </div>
  );
};

export default About;
