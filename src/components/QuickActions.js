import React from "react";
import { FaFolderOpen, FaUpload, FaMoneyCheckAlt, FaUserCog } from "react-icons/fa";
import "../styles/Dashboard.css";

export default function QuickActions() {
  const actions = [
    {
      label: "Browse Available Projects",
      icon: <FaFolderOpen />,
      onClick: () => alert("Browse Available Projects clicked"),
    },
    {
      label: "Submit Project Delivery",
      icon: <FaUpload />,
      onClick: () => alert("Submit Project Delivery clicked"),
    },
    {
      label: "View Payment History",
      icon: <FaMoneyCheckAlt />,
      onClick: () => alert("View Payment History clicked"),
    },
    {
      label: "Update Profile Information",
      icon: <FaUserCog />,
      onClick: () => alert("Update Profile Information clicked"),
    },
  ];

  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <p className="subtitle">Common tasks and shortcuts</p>

      <div className="quick-actions-list">
        {actions.map((action, i) => (
          <button key={i} className="action-btn" onClick={action.onClick}>
            <span className="action-icon">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
