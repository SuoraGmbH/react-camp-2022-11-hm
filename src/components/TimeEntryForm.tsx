import React, { useState } from "react";
import { ThemedBox } from "./ThemedBox";
import EffectOnlyOnce from "./EffectOnlyOnce";
import { TimeEntry } from "../domain/TimeEntry";

interface Props {
  onAddEntry: (timeEntry: TimeEntry) => void;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({ onAddEntry }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (inputValue.length === 0) {
      return;
    }

    onAddEntry({
      id: new Date().toISOString(),
      start: new Date(),
      end: new Date(),
      comment: inputValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <EffectOnlyOnce />
      <label>
        Comment
        <input onChange={handleChange} value={inputValue} />
      </label>
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
