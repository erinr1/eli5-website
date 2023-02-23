import "./App.css";
import logo from "./images/logo.png";
import twitterIcon from "./images/twitter.png";
import discordIcon from "./images/discord.png";
import emailIcon from "./images/email.png";

export default function App() {
  return (
    <body className="App links-body">
      <div className="links-page">
        <h1 className="links-h1">
          {" "}
          <img src={logo} alt="ELI5 Logo" />
        </h1>
        <div className="m-3">
          <a
            href="https://twitter.com/decentra_list"
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
            href="https://medium.com/@decentralist.com"
            target="_blank"
            rel="noreferrer"
            title="Medium"
          >
            <img
              src={discordIcon}
              alt="discord icon"
              className="links-social-icons"
            />
          </a>
          <a
            href="https://lenster.xyz/u/decentralist"
            target="_blank"
            rel="noreferrer"
            title="Lenster"
          >
            <img
              src="/images/lens.png"
              alt="lens logo"
              className="links-social-icons lens"
            />
          </a>
          <a
            href="https://www.youtube.com/@decentralist_com"
            rel="noreferrer"
            target="_blank"
            title="YouTube"
          >
            <img
              src={emailIcon}
              alt="email icon"
              className="links-social-icons"
            />
          </a>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <a
            href="/"
            title="Decentralist.com"
            className="btn btn-primary link-button"
          >
            <div className="row">
              <div className="col-sm-1">
                <img
                  src="/images/decentralist 2.png"
                  alt="decentralist.com"
                  className="link-images border"
                />
              </div>
              <div className="col-sm-11 pt-1 link-text">
                Decentralist<span className="logo-period">.</span>com Website
              </div>
            </div>
          </a>
          <a
            href="https://www.decentralist.com/list-of-daos"
            target="_blank"
            rel="noreferrer"
            title="List of DAOs"
            className="btn btn-primary link-button"
          >
            <div className="row">
              <div className="col-sm-1">
                <img
                  src="/images/LOD-favicon.jpeg"
                  alt="list of daos favicon"
                  className="link-images"
                />
              </div>
              <div className="col-sm-11 pt-1 link-text">List of DAOs</div>
            </div>
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdnmEO24xOxi5zg81qGsPB-YdJTwNKx8sEVkSvc8VstcKtbvQ/viewform"
            target="_blank"
            rel="noreferrer"
            title="Add a DAO Form"
            className="btn btn-primary link-button"
          >
            <div className="row">
              <div className="col-sm-1">
                <img
                  src="/images/plus.png"
                  alt="add button"
                  className="link-images"
                />
              </div>
              <div className="col-sm-11 pt-1 link-text">
                Add a DAO Form: List of DAOs
              </div>
            </div>
          </a>
        </div>
      </div>
    </body>
  );
}
