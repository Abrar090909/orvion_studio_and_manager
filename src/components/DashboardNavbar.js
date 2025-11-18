import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export default function DashboardNavbar() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="dashboard-navbar">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="navbar-right">
        <button 
          onClick={handleProfileClick} 
          className="profile-btn"
          style={{ border: "none", background: "none", cursor: "pointer", fontSize: "24px" }}
        >
          <FaUserCircle className="icon avatar" title="Profile" />
        </button>
      </div>
    </div>
  );
}
