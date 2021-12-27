import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./config/global.js";

var debugMode = false;

if (debugMode) {
  ReactDOM.render(
    global.debugTextContent,
    document.getElementById("debugText")
  );
}
var t0 = performance.now();
ReactDOM.render(<App />, document.getElementById("root"));
var t1 = performance.now();
console.log("App render took " + (t1 - t0) + " milliseconds.");

updateRuntime(t0, t1);
displayRuntime();

export function updateRuntime(t0, t1) {
  global.runtime = t1 - t0;
  displayRuntime();
}

export function lastRuntime(t0, t1) {
  if (debugMode) {
    ReactDOM.render(
      "Last function run time: " + (t1 - t0) + "ms",
      document.getElementById("debugText")
    );
  }
}

export function displayRuntime() {
  if (debugMode) {
    ReactDOM.render(
      "App render time: " + global.runtime + "ms",
      document.getElementById("runtimeText")
    );
  }
}
