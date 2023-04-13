import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Routee from "./components/Route";
import Todo from "./components/Todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routee />
  </React.StrictMode>
);
