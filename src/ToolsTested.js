import React from "react";
import colonyTested from "./images/colonytested.jpg";
import samudaiTested from "./images/samudaitested.jpg";
import commongroundTested from "./images/cgtested.jpg";
import daohausTested from "./images/daohaus.jpg";

export default function ToolsTested() {
  return (
    <div className="ToolsTested mt-5">
      <h5 className="mb-3">
        <strong>Tools 🛠️ Tested</strong>
      </h5>
      <div className="row ">
        <div className="col-md-4">
          <a
            href="https://www.decentralist.com/list-of-dao-tools/colony"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={colonyTested}
              alt="Colony tested logo"
              className="tools-image"
            />
          </a>
        </div>
        <div className="col-md-4 ">
          <a
            href="https://www.decentralist.com/list-of-dao-tools/samudai"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={samudaiTested}
              alt="samudai tested logo"
              className="tools-image"
            />
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="https://www.decentralist.com/list-of-dao-tools/common-ground"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={commongroundTested}
              alt="common ground tested logo"
              className="tools-image"
            />
          </a>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <a href="https://daohaus.club/" target="_blank" rel="noreferrer">
            <img
              src={daohausTested}
              alt="daohaus tested logo"
              className="tools-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
