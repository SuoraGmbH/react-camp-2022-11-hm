import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const element = (
  <div>
    <App />
    hallo aus react
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(<h4>Hallo aus react 2</h4>, document.getElementById("root2"));
