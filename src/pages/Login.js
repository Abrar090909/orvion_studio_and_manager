import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/App.css";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User logged in:", credentials);

    // Redirect to dashboard after login
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Orvion Studio</h1>
      <p className="auth-subtitle">Professional Vendor Management Platform</p>

      <div className="auth-box">
        <h2 className="welcome">Welcome Back</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          <p className="forgot">Forgot Password?</p>

          <button type="submit" className="auth-btn">
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <Link to="/" className="back-link">
          ← Back to Landing
        </Link>
      </div>
    </div>
  );
}

export default Login;
