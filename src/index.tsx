import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";
import { db } from "./firebase";

ReactDOM.render(
  <App userName="Beveloper" lang="TypeScript" />,
  document.getElementById("output")
);
