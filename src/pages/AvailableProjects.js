import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/AvailableProjects.css";

export default function AvailableProjects() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <DashboardNavbar />
        <div className="dashboard-content">
          <div className="ap-container">
            <h1>Available Projects</h1>

            <p>You will be redirected to our official project portal.</p>

            <a
              href="https://www.nextgenaiinx.com/open-project-s"
              target="_blank"
              rel="noreferrer"
              className="ap-btn"
            >
              Open Available Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
