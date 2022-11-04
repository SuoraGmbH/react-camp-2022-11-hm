import TimeEntryForm from "./TimeEntryForm";
import TimeEntryList from "./TimeEntryList";
import { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";

const Crud: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  return (
    <>
      <TimeEntryForm
        onAddEntry={(timeEntry) =>
          setTimeEntries((prevTimeEntries) => [...prevTimeEntries, timeEntry])
        }
      />
      <TimeEntryList timeEntries={timeEntries} />
    </>
  );
};

export default Crud;
