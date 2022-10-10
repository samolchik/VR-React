import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/assets/css/reset.css";
import { BrowserRouter } from "react-router-dom";
import { CustomRouter } from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomRouter />
    </BrowserRouter>
  </React.StrictMode>
);
