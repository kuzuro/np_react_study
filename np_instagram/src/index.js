import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./data/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ContextProvider>    
        <App />
    </ContextProvider>
  </Router>
);
