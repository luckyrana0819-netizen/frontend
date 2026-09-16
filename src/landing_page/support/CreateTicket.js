import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-5 mb-5">

        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {/* Account Opening */}
        <div className="col-12 col-md-4 p-3 p-md-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
            Account Opening
          </h4>

          <Link to="/support" className="ticket-link">
            Online Account Opening
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Offline Account Opening
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Company, Partnership and HUF Account Opening
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            NRI Account Opening
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Charges at Zerodha
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Getting Started
          </Link>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-12 col-md-4 p-3 p-md-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
            Your Zerodha Account
          </h4>

          <Link to="/support" className="ticket-link">
            Login and Password
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Profile and Account Settings
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Account Modification
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Bank Account
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Demat Account
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Account Closure
          </Link>
        </div>

        {/* Trading */}
        <div className="col-12 col-md-4 p-3 p-md-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
            Trading
          </h4>

          <Link to="/support" className="ticket-link">
            Orders
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Positions
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Holdings
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Intraday Trading
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Futures and Options
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Trading Charges
          </Link>
        </div>

        {/* Funds */}
        <div className="col-12 col-md-4 p-3 p-md-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
            Funds
          </h4>

          <Link to="/support" className="ticket-link">
            Add Funds
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Withdraw Funds
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Fund Transfer
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Payment Issues
          </Link>
        </div>

        {/* Kite */}
        <div className="col-12 col-md-4 p-3 p-md-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
            Kite
          </h4>

          <Link to="/support" className="ticket-link">
            Kite User Manual
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Marketwatch
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Charts
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Notifications
          </Link>
        </div>

        {/* Other */}
        <div className="col-12 col-md-4 p-3 p-md-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
            Other
          </h4>

          <Link to="/support" className="ticket-link">
            IPO
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Mutual Funds
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Bonds
          </Link>
          <br />

          <Link to="/support" className="ticket-link">
            Downloads & Resources
          </Link>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;