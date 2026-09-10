import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      const response = await fetch(
        "http://https://backend-e8zh.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Account created successfully!");

        setFormData({
          name: "",
          mobile: "",
          email: "",
          password: "",
        });
      } else {
        setMessage(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setMessage("Unable to connect to server");
    }
  };

  return (
    <div className="signup-container">

      {/* Left Section */}
      <div className="signup-left">
        <div>
          <h1>Zerodha</h1>

          <h2>Invest in your future</h2>

          <p>
            Open your account and start investing in stocks,
            mutual funds and more.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <div className="signup-card">

          <h2>Create an account</h2>

          <p className="subtitle">
            Start your investing journey
          </p>

          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {/* Mobile Number */}
            <label>Mobile Number</label>

            <input
              type="tel"
              name="mobile"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Password */}
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {/* Signup Button */}
            <button type="submit">
              Sign Up
            </button>

          </form>

          {/* Backend Response */}
          {message && (
            <p className="login-text">
              {message}
            </p>
          )}

          {/* Login */}
          <p className="login-text">
            Already have an account?
            <span
              onClick={() => navigate("/login")}
              style={{
                cursor: "pointer",
                color: "#387ed1",
                fontWeight: "500",
                marginLeft: "5px",
              }}
            >
              Login
            </span>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Signup;