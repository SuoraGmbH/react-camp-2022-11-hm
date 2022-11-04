import React from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

interface Props {
  timeEntries: TimeEntry[];
}

const TimeEntryList: React.FunctionComponent<Props> = ({ timeEntries }) => {
  return (
    <>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />
      ))}
    </>
  );
};

export default TimeEntryList;
