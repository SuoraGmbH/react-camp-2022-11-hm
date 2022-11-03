import React, { memo, useContext, useRef } from "react";
import { ThemeContext } from "../ThemeContext";

export const ThemedBox = function ThemedBox() {
  const theme = useContext(ThemeContext);
  console.log('Themed Box rendert')
  const divRef = useRef<HTMLDivElement>(null);
  console.log(divRef.current)

  return (
    <div onClick={() => {
      console.log(divRef.current)
    }} ref={divRef} style={{ backgroundColor: theme.backgroundColor }}>Hallo Welt</div>
  );
}
