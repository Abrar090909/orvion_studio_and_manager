import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../styles/Signup.css";

import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate strong password: min 8 chars, 1 upper, 1 lower, 1 number, 1 special
    const pwd = formData.password || "";
    const strongPwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (!strongPwdRegex.test(pwd)) {
      setPasswordError("Password must be at least 8 characters and include uppercase, lowercase, number and special character.");
      setLoading(false);
      return;
    }
    setPasswordError("");

    try {
      // ---------- AUTH ----------
      const userCred = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Auth created

      // ---------- FIRESTORE ----------
      await setDoc(doc(db, "users", userCred.user.uid), {
        name: formData.name,
        email: formData.email,
        createdAt: new Date(),
        role: "vendor",
        earnings: 0,
      });

      // Firestore saved

      // ---------- SUCCESS ----------
      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Orvion Studio</h1>
        <p className="auth-subtitle">Create Your Vendor Account</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              aria-describedby="passwordHelp"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff aria-hidden /> : <FiEye aria-hidden />}
            </button>
          </div>
          {passwordError && <p id="passwordHelp" className="field-error">{passwordError}</p>}

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>

        <Link to="/" className="back-link">← Back to Landing</Link>
      </div>
    </div>
  );
}

export default Signup;
