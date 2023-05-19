import React from "react";
import logo from "./images/logotag.png";
import { Link } from "react-router-dom";
import "./Disclaimers.css";

export default function PrivacyPolicy() {
  return (
    <div className="Disclaimer container mb-5 border border-dark">
      <div className="page-contents">
        <div className="logo-container">
          {" "}
          <img src={logo} alt="ELI5 Logo" className="logo-image img-fluid" />
        </div>
        <div className="redirection-link">
          <Link to="/">Home</Link>
        </div>

        <h4 className="mt-5">Privacy Policy</h4>
        <p></p>
      </div>
    </div>
  );
}
