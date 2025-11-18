import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/MyProjects.css";

export default function MyProjects() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <DashboardNavbar />
        <div className="dashboard-content">
          <div className="mp-container">
            <h1>My Projects</h1>

            <p>You will be redirected to your project dashboard.</p>

            <a
              href="https://dashboard.scale.com/login?redirect_url=%2Fstudio%2Fannotate%3FstudioProjectId%3D6912dbb3810162f7560e33e8&clear=1"
              target="_blank"
              rel="noreferrer"
              className="mp-btn"
            >
              Go to My Project Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
