import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import VisibleCards from "./VisibleCards";

// const json = async () => {
//   const response = await fetch("/api/temp/all?limit=-504", {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
//   const json = await response.json();
//   return json;
// };

const jsx = <App />;

if (document.getElementById("root")) {
  ReactDOM.render(jsx, document.getElementById("root"));
} else {
  ReactDOM.render(<VisibleCards />, document.getElementById("listings"));
}
