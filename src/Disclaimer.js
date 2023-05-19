import React from "react";
import logo from "./images/logotag.png";
import { Link } from "react-router-dom";
import "./Disclaimers.css";
import slurtle from "./images/slurtle-gm.png";

export default function Disclaimer() {
  return (
    <div className="Disclaimer container mb-5">
      <div className="page-contents">
        <div className="logo-container">
          {" "}
          <img src={logo} alt="ELI5 Logo" className="logo-image img-fluid" />
        </div>
        <div className="redirection-link m-3">
          <Link to="/">Return to ELI5 Homepage</Link>
        </div>

        <h4 className="mt-5">Investment Disclaimer</h4>
        <p>
          This Content is for informational purposes only, you should not
          construe any such information or other material as investment advice.
          Nothing contained on our Site constitutes a solicitation,
          recommendation, endorsement, or offer by ELI5 DAO or any third-party
          service provider to buy or sell any securities or other financial
          instruments in this or in any other jurisdiction in which such
          solicitation or offer would be unlawful under the securities laws of
          such jurisdiction.{" "}
        </p>
        <p>
          All Content on this site is information of a general nature and does
          not address the circumstances of any particular individual or entity.
          ELI5 DAO is not a fiduciary by virtue of any person’s use of or access
          to the Site or Content. You alone assume the sole responsibility of
          evaluating the merits and risks associated with the use of any
          information or other Content on the Site before making any decisions
          based on such information or other Content.
        </p>
        <p>
          {" "}
          There are risks associated with investing in securities, Non Fungible
          Tokens (NFT) and Decentralized Autonomous Organizations (DAO).
          Investing in DAOs, NFTs, stocks, bonds, exchange traded funds, mutual
          funds, and money market funds involve risk of loss. Loss of principal
          is possible. Some high-risk investments may use leverage, which will
          accentuate gains and losses. Foreign investing involves special risks,
          including a greater volatility and political, economic and currency
          risks and differences in accounting methods. A security’s or a firm’s
          past investment performance is not a guarantee or predictor of future
          investment performance. Entities listed on this site may be in a risky
          "start up" phase. Please do your own research.
        </p>
        <p>
          {" "}
          Technology Disclaimer: By using our Website, you acknowledge and agree
          that we make no guarantees or warranties regarding our Website and its
          condition, including its functionality, the existence of viruses,
          uninterrupted use and availability. We strive to ensure that the
          availability and delivery of our Website and its Content is
          uninterrupted and error-free. However, we cannot guarantee that your
          access will not be suspended or restricted from time to time, to allow
          for repairs, maintenance, updates or other functions. To the fullest
          extent permitted by law, you acknowledge and agree that we are not
          liable to you for damages, refunds, or any other remedy, should our
          Website or its Content become unavailable, slow or incomplete for any
          reason. You agree that in the event of an interruption of the access
          to our Website, we do not owe you any refunds or reimbursement. You
          acknowledge and agree that we may, at any time, in our sole
          discretion, discontinue our Website, its Content, and our Services,
          without any notice, and such items may no longer be available. You
          acknowledge and agree that we are in no way obligated to continue
          operating our Website and that we are not liable to you in any way for
          a decision to cease its operation.
        </p>
        <p>
          {" "}
          Errors and Omissions Disclaimer: We strive to include the most
          up-to-date and accurate information on our Website, its Content, and
          in our Services. You acknowledge and agree that information contained
          on our Website, its Content, and in our Services may inadvertently
          include inaccuracies, errors or omissions and we expressly exclude any
          and all liabilities for these inaccuracies, errors or omissions. We do
          not warrant the accuracy, completeness, or usefulness of this
          information. Any reliance you place on such information is strictly at
          your own risk. We disclaim all liability and responsibility arising
          from any reliance placed on such materials by you or any other visitor
          to the Website, or by anyone who may be informed of any of its
          contents.
        </p>
        <p>
          {" "}
          Information Posted Disclaimer: This Website may include content
          provided by third parties, including materials provided by other
          users, third-party licensors, syndicators, aggregators, and/or
          reporting services. All statements and/or opinions expressed in these
          materials, and all articles and responses to questions and other
          content, other than the content provided by the DAO, are solely the
          opinions and the responsibility of the person or entity providing
          those materials. These materials do not necessarily reflect the
          opinion of the DAO. We are not responsible, or liable to you or any
          third party, for the content or accuracy of any materials provided by
          any third parties.
        </p>
        <div className="redirection-link m-5">
          <Link to="/">Return to ELI5 Homepage</Link>
          <div>
            <img
              src={slurtle}
              alt="ELI5 DAO mascot"
              className="disclaimers-mascot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
