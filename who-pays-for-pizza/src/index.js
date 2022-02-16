import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./styles.css";

document.title = 'Who pays for Pizza';

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
