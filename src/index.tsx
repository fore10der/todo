import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloWorld } from "./App";
import {db} from "./firebase";

ReactDOM.render(
  <HelloWorld userName="Beveloper" lang="TypeScript" />,
  document.getElementById("output")
);
