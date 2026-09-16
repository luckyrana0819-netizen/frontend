import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-12 col-md-5 p-3 p-md-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>

          <p>
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <Link
            to="/pricing"
            style={{ textDecoration: "none" }}
          >
            See Pricing{" "}
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i>
          </Link>
        </div>

        {/* Space on Desktop */}
        <div className="col-md-1"></div>

        {/* Pricing Cards */}
        <div className="col-12 col-md-6 mb-4 mb-md-5">
          <div className="row text-center">

            {/* ₹0 Card */}
            <div className="col-12 col-sm-6 p-4 border">
              <h1 className="mb-3">₹0</h1>
              <p className="mb-0">
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>

            {/* ₹20 Card */}
            <div className="col-12 col-sm-6 p-4 border">
              <h1 className="mb-3">₹20</h1>
              <p className="mb-0">
                Intraday and F&O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
