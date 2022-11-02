import React from "react";

interface Props {
  city?: string;
}

function Welcome({ city }: Props): JSX.Element {
  if (!city) {
    return <h2>Hello unknown city!</h2>;
  }

  return <h1>Hello {city.toUpperCase()}</h1>;
}

export default Welcome;
