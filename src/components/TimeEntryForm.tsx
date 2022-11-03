import React, { useState } from "react";

const TimeEntryForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Hallo Bremen!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputValue} />
      <button
        type="button"
        onClick={() => {
          setInputValue("");
        }}
      >
        Zurücksetzen
      </button>
      <h1>{inputValue}</h1>
      <button type="submit">Absenden</button>
    </form>
  );
};

export default TimeEntryForm;
