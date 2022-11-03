import React, { useContext } from "react";

export const lightTheme = {
  backgroundColor: "#eee",
  color: "#333"
};
export const darkTheme = {
  backgroundColor: "#333",
};

export const ThemeContext = React.createContext(darkTheme);
