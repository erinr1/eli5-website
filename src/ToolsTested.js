import React from "react";
import colonyTested from "./images/colonytested.jpg";
import samudaiTested from "./images/samudaitested.png";
import commongroundTested from "./images/commonground.jpg";

export default function ToolsTested() {
  return (
    <div className="ToolsTested mt-5">
      <h5 className="mb-3">
        <strong>Tools 🛠️ Tested</strong>
      </h5>
      <div className="row">
        <div className="col-sm-4">
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
        <div className="col-sm-4 ">
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
        <div className="col-sm-4">
          <a
            href="https://www.commonground.cg/"
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
      </div>
    </div>
  );
}
