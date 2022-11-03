import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me (broken)
      </button>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click me
      </button>

      <button
        onClick={() =>
          setCount(function (prevCount) {
            return prevCount + 1;
          })
        }
      >
        Click me
      </button>
    </div>
  );
}
