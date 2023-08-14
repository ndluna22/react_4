import React from "react";

const Madlib = ({ noun, adjective, verb, color }) => {
  const story = `In the morning when I look outside the window, I see a ${adjective} ${noun} and 
  it is ${verb} ${color}.`;

  return (
    <div>
      <h2>Madlibs!</h2>
      <p>{story}</p>
    </div>
  );
};

export default Madlib;
