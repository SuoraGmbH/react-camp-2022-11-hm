import TimeEntryView from "./components/TimeEntryView";
import React from "react";
import Welcome from "./components/Welcome";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";

function App() {
  const timeEntry: TimeEntry = {
    id: "okdasjdiosaijodsajiosda",
    comment: "es wird langsam spät",
    start: new Date(),
    end: new Date(),
  };

  return (
    <>
      <TimeEntryView timeEntry={timeEntry} />
      <TimeEntryForm />
    </>
  );
}

export default App;
