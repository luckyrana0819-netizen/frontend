import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-3 p-md-5 mb-5">
      <div className="row text-center">
        <div className="col-12">

          <h1 className="mt-4 mt-md-5">
            Open a Zerodha account
          </h1>

          <p className="mt-3">
            Modern platforms and apps, ₹0 investments, and flat ₹20
            intraday and F&O trades.
          </p>

          <Link
            to="/signup"
            className="p-2 btn btn-primary fs-5 mb-4 mt-3"
            style={{
              width: "200px",
              maxWidth: "90%",
              margin: "0 auto",
            }}
          >
            Sign up Now
          </Link>

        </div>
      </div>
    </div>
  );
}

export default OpenAccount;