import React from "react";
import "../styles/Dashboard.css";

function StatCard({ title, value, change, icon, color }) {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ color }}>{icon}</div>
      <h3>{title}</h3>
      <h2>{value}</h2>
      <p style={{ color }}>{change}</p>
    </div>
  );
}

export default StatCard;
