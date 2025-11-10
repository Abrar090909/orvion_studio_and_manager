import React from "react";
import { FaTachometerAlt, FaFolderOpen, FaClipboardList, FaUser, FaBell, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    const confirmLogout = window.confirm("Are you sure you want to sign out?");
    if (confirmLogout) navigate("/signup");
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "Available Projects", icon: <FaFolderOpen />, path: "/projects" },
    { name: "My Projects", icon: <FaClipboardList />, path: "/my-projects" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Notifications", icon: <FaBell />, path: "/notifications" },
  ];

  return (
    <div className="sidebar">
      <div>
        <h2 className="logo">Orvion</h2>
        <nav>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <button className="signout-btn">Sign Out</button>

    </div>
  );
}
