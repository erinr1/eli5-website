import React from "react";
import App from "./App";
import Disclaimer from "./Disclaimer";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsService from "./TermsService";

export default function Website() {
  return (
    <div className="Website">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsservice" element={<TermsService />} />
      </Routes>
    </div>
  );
}
