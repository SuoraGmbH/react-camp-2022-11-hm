import TimeEntryView from "./components/TimeEntryView";
import React from "react";
import Welcome from "./components/Welcome";
import { TimeEntry } from "./domain/TimeEntry";

function App() {
  const timeEntry: TimeEntry = {
    id: 'okdasjdiosaijodsajiosda',
    comment: "es wird langsam spät",
    start: new Date(),
    end: new Date(),
  }

  return (
    <h1>
      <TimeEntryView timeEntry={timeEntry} />
    </h1>
  );
}

export default App;
