import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

import "../styles/Dashboard.css";

export default function DashboardNavbar() {
  return (
    <div className="dashboard-navbar">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="navbar-right">
        <FaBell className="icon" title="Notifications" />
        <FaUserCircle className="icon avatar" title="Profile" />
      </div>
    </div>
  );
}
