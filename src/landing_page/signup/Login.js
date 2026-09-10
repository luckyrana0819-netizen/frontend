import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Login()  {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    setMessage("") ;

    try {
      const response = await fetch(
        "http://https://backend-e8zh.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json() ;

      

       if (response.ok) {
         console.log("Logged in user:", data.user);

         localStorage.setItem("userName", data.user.name);

         window.location.href = `http://localhost:3001/?userName=${encodeURIComponent(data.user.name)}`;

        }

       else {
         setMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("Unable to connect to server") ;
    }
  } ;

  return (
    <div className="signup-container">

      {/* Left Section */}
      <div className="signup-left">
        <div>
          <h1>Zerodha</h1>

          <h2>Welcome Back</h2>

          <p>
            Login to your account and continue
            your investing journey.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <div className="signup-card">

          <h2>Login</h2>

          <p className="subtitle">
            Login to your account
          </p>

          <form onSubmit={handleSubmit}>

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
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {/* Login Button */}
            <button type="submit">
              Login
            </button>

          </form>

          {/* Error Message */}
          {message && (
            <p className="login-text">
              {message}
            </p>
          )}

          {/* Signup */}
          <p className="login-text">
            Don't have an account?

           <span
           onClick={() => navigate("/signup")}
            style={{
             cursor: "pointer",
              color: "#387ed1",
              fontWeight: "500",
           }}
>
  {" "}Sign Up
</span>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Login;