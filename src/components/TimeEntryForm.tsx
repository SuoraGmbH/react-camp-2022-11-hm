import React, { useState } from "react";

const TimeEntryForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if(inputValue.length === 0) {
      return
    }
    console.log("Hallo Bremen!", inputValue);
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
