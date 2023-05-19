import React from "react";
import "./App.css";
import logo from "./images/logotag.png";

import SocialLinks from "./SocialLinks";
import charmverseLogo from "./images/charmverse.jpeg";
import colonyLogo from "./images/colony.png";
import snapshotLogo from "./images/snapshot.jpeg";
import ToolsTested from "./ToolsTested";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App links-body container mb-5">
      <div className="links-page justify-content-center">
        <div className="logo-container">
          {" "}
          <h1 className="d-none">
            ELI5 DAO stands for Explain It Like I am Five years old -
            Decentralized Autonomous Organization (DAO). This DAO reviews tools
            created for decentralized organizations and explains their use in an
            easy-to-understand manner.
          </h1>
          <img src={logo} alt="ELI5 Logo" className="logo-image img-fluid" />
        </div>
        <SocialLinks />
        <div className="d-grid gap-2 col-8 mx-auto">
          <a
            href="https://app.charmverse.io/invite/4c890f"
            title="ELI5 DAO Home"
            className="btn btn-primary link-button"
          >
            <div className="row">
              <div className="col-sm-1">
                <img
                  src={charmverseLogo}
                  alt="charmverse"
                  className="link-images"
                />
              </div>
              <div className="col-sm-11 pt-1 link-text">ELI5💡DAO Home 🏠</div>
            </div>
          </a>
          <a
            href="https://xdai.colony.io/colony/eli5"
            target="_blank"
            rel="noreferrer"
            title="DAO Governance"
            className="btn btn-primary link-button"
          >
            <div className="row">
              <div className="col-sm-1">
                <img
                  src={colonyLogo}
                  alt="Colony favicon"
                  className="link-images"
                />
              </div>
              <div className="col-sm-11 pt-1 link-text">DAO Governance</div>
            </div>
          </a>

          <a
            href="https://snapshot.org/#/eli5%F0%9F%92%A1dao.eth"
            target="_blank"
            rel="noreferrer"
            title="Snapshot Voting"
            className="btn btn-primary link-button"
          >
            <div className="row">
              <div className="col-sm-1">
                <img
                  src={snapshotLogo}
                  alt="add button"
                  className="link-images"
                />
              </div>
              <div className="col-sm-11 pt-1 link-text">Snapshot Voting</div>
            </div>
          </a>
        </div>
        <ToolsTested />
        <Footer />
      </div>
      <CookieConsent
        enableDeclineButton
        flipButtons
        style={{ background: "black" }}
        buttonText="I Agree"
        declineButtonStyle={{ background: "gray", color: "black" }}
        expires={1}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}
