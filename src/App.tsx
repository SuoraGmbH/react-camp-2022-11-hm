import TimeEntryView from "./components/TimeEntryView";
import React from "react";

function App() {
  const props: React.ComponentProps<typeof TimeEntryView> = {
    comment: "hallo"
  };

  return (
    <h1>
      Hallo ich bin Nikita
      <TimeEntryView comment="typescript ist knorke" />
      <TimeEntryView {...props} />
    </h1>
  );
}

export default App;
