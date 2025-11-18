import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import StatCard from "../components/StatCard";
import ProjectList from "../components/ProjectList";
import QuickActions from "../components/QuickActions";
import ActivityFeed from "../components/ActivityFeed";
import { FaClock, FaCheckCircle, FaArrowUp, FaDollarSign } from "react-icons/fa";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <DashboardNavbar />

        <div className="dashboard-content">
          <div className="stats-grid">
            <StatCard title="Total Earnings" value="$12,450" change="+12.5% from last month" icon={<FaDollarSign />} color="#4ade80" />
            <StatCard title="Active Projects" value="1" change="" icon={<FaClock />} color="#60a5fa" />
            <StatCard title="Completed Projects" value="1" change="" icon={<FaCheckCircle />} color="#34d399" />
            <StatCard title="Success Rate" value="Null" change="" icon={<FaArrowUp />} color="#a78bfa" />
          </div>

          <div className="dashboard-sections">
            <div className="recent-projects">
              <h3>Recent Projects</h3>
              <ProjectList />
            </div>

            <div className="quick-actions">
              <QuickActions />
            </div>
          </div>

          <div className="recent-activity">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
