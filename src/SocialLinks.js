import React from "react";
import twitterIcon from "./images/twitter.png";
import discordIcon from "./images/discord.png";
import emailIcon from "./images/email.png";
import lensIcon from "./images/lens.png";

export default function SocialLinks() {
  return (
    <div className="SocialLinks mb-3">
      <a
        href="https://twitter.com/ELI5DAO"
        target="_blank"
        rel="noreferrer"
        title="Twitter"
      >
        <img
          src={twitterIcon}
          alt="twitter icon"
          className="links-social-icons"
        />
      </a>
      <a
        href="https://discord.gg/yt3UUghVvs"
        target="_blank"
        rel="noreferrer"
        title="Discord"
      >
        <img
          src={discordIcon}
          alt="discord icon"
          className="links-social-icons"
        />
      </a>
      <a
        href="https://lenster.xyz/u/eli5dao"
        target="_blank"
        rel="noreferrer"
        title="Lenster"
      >
        <img
          src={lensIcon}
          alt="lens logo"
          className="links-social-icons lens"
        />
      </a>
      <a
        href="mailto:eli.five.dao@gmail.com"
        rel="noreferrer"
        target="_blank"
        title="Email"
      >
        <img src={emailIcon} alt="email icon" className="links-social-icons" />
      </a>
    </div>
  );
}
