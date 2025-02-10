import React from "react";
import ReactDOM from "react-dom/client";  // Changed import path
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// Create a root element using createRoot
const root = ReactDOM.createRoot(document.getElementById("root")); 

// Render the app using the new root API
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
