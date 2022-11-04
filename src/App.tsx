import TimeEntryView from "./components/TimeEntryView";
import React from "react";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import GithubRepoStats from "./components/GithubRepoStats";
import DynamicGithubRepoStats from "./components/DynamicGithubRepoStats";
import TimeEntryList from "./components/TimeEntryList";
import Crud from "./components/Crud";

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
      <Crud />
    </>

  );
}

export default App;
