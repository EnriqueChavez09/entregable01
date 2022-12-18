import "./sass/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
