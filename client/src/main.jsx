import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { KycProvider } from "./context/KycContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <KycProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </KycProvider>
);
