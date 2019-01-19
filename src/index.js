import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

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

ReactDOM.render(jsx, document.getElementById("root"));
