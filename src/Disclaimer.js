import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

export default function Disclaimer() {
  return (
    <div className="Disclaimer container mb-5">
      <div className="justify-content-center">
        <div className="logo-container">
          {" "}
          <img src={logo} alt="ELI5 Logo" className="logo-image img-fluid" />
        </div>
        <div>disclaimer information</div>
        <div className="redirection-link">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
}
