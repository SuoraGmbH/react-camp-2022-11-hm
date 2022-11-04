import { render, screen } from "@testing-library/react";
import TimeEntryForm from "./TimeEntryForm";
import userEvent from "@testing-library/user-event";
jest.useFakeTimers().setSystemTime(new Date("2022-08-25 13:42:23"));
test("Smoke Test", () => {
  render(<TimeEntryForm onAddEntry={() => {}} />);
});

test(
  "after entering something to the form and submitting it, " +
    "the event should be fired",
  () => {
    const handleAddEntryMock = jest.fn();
    render(<TimeEntryForm onAddEntry={handleAddEntryMock} />);
    // screen.logTestingPlaygroundURL()
    const commentInput = screen.getByRole("textbox", { name: "Comment" });

    userEvent.type(commentInput, "Hallo hmmh!");
    userEvent.click(
      screen.getByRole("button", {
        name: /absenden/i,
      })
    );
    expect(handleAddEntryMock).toHaveBeenCalled();
    expect(handleAddEntryMock).toHaveBeenCalledWith(
      expect.objectContaining({
        comment: "Hallo hmmh!",
      })
    );

    expect(handleAddEntryMock.mock.calls[0][0]).toMatchInlineSnapshot(`
      Object {
        "comment": "Hallo hmmh!",
        "end": 2022-08-25T11:42:23.000Z,
        "id": "2022-08-25T11:42:23.000Z",
        "start": 2022-08-25T11:42:23.000Z,
      }
    `);

    // screen.logTestingPlaygroundURL()
  }
);
