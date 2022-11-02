import { TimeEntry } from "../domain/TimeEntry";

interface Props {
  timeEntry: TimeEntry;
}

const TimeEntryView = ({ timeEntry }: Props) => {
  return <div>{timeEntry.comment}</div>;
};

export default TimeEntryView;
