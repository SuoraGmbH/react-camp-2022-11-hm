import TimeEntryView from "./TimeEntryView";
import { render, screen } from "@testing-library/react";
import { TimeEntry } from "../domain/TimeEntry";

jest.useFakeTimers().setSystemTime(new Date("2022-08-25 13:42:23"))

const timeEntry: TimeEntry = {
  id: "adsoijijodas",
  comment: "Hallo hmmh!",
  start: new Date(),
  end: new Date(),
}

test("SmokeTest", () => {
  render(<TimeEntryView timeEntry={timeEntry} />)
});

test("it should display the comment", () => {
  render(<TimeEntryView timeEntry={timeEntry} />)
  // const commentElement = screen.queryByText("Hallo hmmh!")
  const commentElement = screen.queryByText(/hallo hmmh/i)
  expect(commentElement).toBeVisible()
});

test("it renders according to snapshot", () => {
  const {container} = render(<TimeEntryView timeEntry={timeEntry} />)
  expect(container).toMatchSnapshot()
})
