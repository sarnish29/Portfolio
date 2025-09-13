import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // <-- updated
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter> {/* <-- use HashRouter instead of BrowserRouter */}
    <App />
  </HashRouter>
);
