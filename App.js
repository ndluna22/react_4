import React, { useState } from "react";
import Form from "./Form";
import Madlib from "./Madlib";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [madlibData, setMadlibData] = useState({});

  const handleSubmit = (data) => {
    setMadlibData(data);
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Madlibs!</h1>
      <Form onSubmit={handleSubmit} />
      {submitted && <Madlib {...madlibData} />}
    </div>
  );
}

export default App;
