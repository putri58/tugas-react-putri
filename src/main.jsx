import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/tailwind.css";

import App from "./App";
import Home from "./pages/member/Home";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Website Member */}
      <Route path="/" element={<Home   />} />

      {/* Admin */}
      <Route path="/admin/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);