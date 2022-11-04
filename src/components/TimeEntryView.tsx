import { TimeEntry } from "../domain/TimeEntry";

interface Props {
  timeEntry: TimeEntry;
}

const TimeEntryView = ({timeEntry}: Props) => {
  return (
    <div>
      <b>{timeEntry.comment.toUpperCase()}</b>
      <p>{timeEntry.start.toLocaleTimeString()}</p>
    </div>
  );
};

export default TimeEntryView;
