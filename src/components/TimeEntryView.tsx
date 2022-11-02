interface Props {
  comment: string
}

const TimeEntryView = (props: Props) => {
  return <div>{props.comment}</div>;
};

export default TimeEntryView;
