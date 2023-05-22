import React from "react";
import App from "./App";
import Disclaimer from "./Disclaimer";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsService from "./TermsService";
import ScrollToTop from "./ScrollToTop";

export default function Website() {
  return (
    <div className="Website">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsservice" element={<TermsService />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}
