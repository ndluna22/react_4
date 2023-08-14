import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({
    noun: "",
    adjective: "",
    verb: "",
    color: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Noun:
        <input
          type="text"
          name="noun"
          value={inputs.noun}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Adjective:
        <input
          type="text"
          name="adjective"
          value={inputs.adjective}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Verb:
        <input
          type="text"
          name="verb"
          value={inputs.verb}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Color:
        <input
          type="text"
          name="color"
          value={inputs.color}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Generate Madlib</button>
    </form>
  );
};

export default Form;
