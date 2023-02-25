import React from "react";
import App from "./App";
import Disclaimer from "./Disclaimer";
import { Routes, Route } from "react-router-dom";

export default function Website() {
  return (
    <div className="Website">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </div>
  );
}
