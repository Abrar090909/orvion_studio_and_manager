import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFolderOpen, FaUpload, FaMoneyCheckAlt, FaUserCog } from "react-icons/fa";
import "../styles/Dashboard.css";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      label: "Browse Available Projects",
      icon: <FaFolderOpen />,
      onClick: () => navigate("/projects"),
    },
    {
      label: "Submit Project Delivery",
      icon: <FaUpload />,
      onClick: () => navigate("/my-projects"),
    },
    {
      label: "View Payment History",
      icon: <FaMoneyCheckAlt />,
      onClick: () => navigate("/payments"),
    },
    {
      label: "Update Profile Information",
      icon: <FaUserCog />,
      onClick: () => navigate("/profile"),
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
