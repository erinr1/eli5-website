import React from "react";
import { Link } from "react-router-dom";
import eli5Logo from "./images/eli5logo.png";
import slurtle from "./images/slurtle-gm.png";
import SocialLinks from "./SocialLinks";
import "./Disclaimers.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-9">
          <img src={eli5Logo} alt="ELI5 DAO logo" className="footer-logo"></img>
          <SocialLinks />

          <h5 className="disclaimer-heading">Impartiality Disclaimer</h5>
          <p className="disclaimer">
            Impartiality, integrity, and objectivity are fundamental values of
            ELI5 DAO. Accordingly, ELI5 DAO members are compelled to give honest
            reviews of products and shall not be swayed by potential conflicts
            of interest. Maintaining honesty and impartiality instills trust and
            confidence in the web3 community and our practice of testing DAO
            tools. For this reason, ELI5 DAO members have agreed to take an
            agnostic approach and have no prejudices toward any specific tool,
            application, protocol, etc. All statements and/or opinions expressed
            in these materials are solely the opinions and the responsibility of
            the person, or entity providing those materials.
          </p>
        </div>
        <div className="col-md-3 border-start border-dark">
          <div className="footer-links">
            <a
              href="https://github.com/KryptoShrimp/ELI5DAO"
              target="_blank"
              rel="noreferrer"
            >
              Media Kit
            </a>
          </div>
          <div className="footer-links">
            <Link to="/termsservice">Terms of Service</Link>
          </div>
          <div className="d-none footer-links">
            <Link to="/privacypolicy">Privacy Policy</Link>
          </div>

          <div className="footer-links">
            {" "}
            <Link to="/disclaimer">Investment Disclaimer</Link>
          </div>
          <img
            src={slurtle}
            alt="ELI5 DAO mascot"
            className="footer-mascot mt-5"
          />
        </div>
      </div>
    </div>
  );
}
