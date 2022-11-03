import React from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

const TimeEntryList: React.FunctionComponent = () => {
  const timeEntries: TimeEntry[] = [
    {
      id: "okdasjdiosaijodsajiosda",
      comment: "es wird langsam spät",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "dasads",
      comment: "es wird langsam spät",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "cvxvcx",
      comment: "es wird langsam spät",
      start: new Date(),
      end: new Date(),
    },
  ];

  return (
    <div>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />
      ))}
    </div>
  );
};

export default TimeEntryList;
