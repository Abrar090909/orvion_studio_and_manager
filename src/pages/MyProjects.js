import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/MyProjects.css";
import {
  FaClock,
  FaCheckCircle,
  FaDollarSign,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";

function MyProjects() {
  const [activeTab, setActiveTab] = useState("active");

  const activeProjects = [
    {
      title: "E-commerce Website Redesign",
      company: "TechCorp Inc.",
      description:
        "Complete redesign of e-commerce platform with modern UI/UX.",
      deadline: "2024-10-15",
      budget: 3200,
      deliverables: "3/4",
      progress: 75,
      status: "In Progress",
    },
    {
      title: "Mobile App Development",
      company: "StartupXYZ",
      description:
        "Cross-platform mobile app for task management using React Native.",
      deadline: "2024-11-20",
      budget: 4500,
      deliverables: "2/5",
      progress: 40,
      status: "In Progress",
    },
    {
      title: "Cybersecurity Dashboard UI",
      company: "SecureNet",
      description:
        "Designing monitoring dashboard for real-time security analytics.",
      deadline: "2024-12-01",
      budget: 2600,
      deliverables: "1/3",
      progress: 35,
      status: "In Progress",
    },
  ];

  const completedProjects = [
    {
      title: "WordPress Custom Theme",
      company: "LocalBusiness",
      description:
        "Custom WordPress theme with admin panel customization.",
      deadline: "2024-09-15",
      budget: 2200,
      deliverables: "4/4",
      status: "Completed",
    },
    {
      title: "Data Dashboard Development",
      company: "DataCorp",
      description:
        "Interactive dashboard for business intelligence and analytics.",
      deadline: "2024-09-28",
      budget: 3500,
      deliverables: "5/5",
      status: "Completed",
    },
    {
      title: "Logo & Brand Guidelines",
      company: "FinEdge",
      description:
        "Developed a complete visual identity and branding system.",
      deadline: "2024-08-10",
      budget: 1800,
      deliverables: "3/3",
      status: "Completed",
    },
  ];

  const totalEarnings = completedProjects.reduce((acc, p) => acc + p.budget, 0);

  return (
    <div className="my-projects-page">
      <Sidebar />

      <div className="my-projects-container">
        <h2 className="page-title">My Projects</h2>

        {/* === Stat Cards === */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-info">
              <h4>Active Projects</h4>
              <p className="value">{activeProjects.length}</p>
            </div>
            <div className="stat-icon clock">
              <FaClock />
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <h4>Completed Projects</h4>
              <p className="value">{completedProjects.length}</p>
            </div>
            <div className="stat-icon check">
              <FaCheckCircle />
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <h4>Total Earnings</h4>
              <p className="value">${totalEarnings.toLocaleString()}</p>
            </div>
            <div className="stat-icon dollar">
              <FaDollarSign />
            </div>
          </div>
        </div>

        {/* === Tabs === */}
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "active" ? "active" : ""}`}
            onClick={() => setActiveTab("active")}
          >
            Active Projects
          </button>
          <button
            className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed Projects
          </button>
        </div>

        {/* === Project List === */}
        <div className="project-list">
          {activeTab === "active"
            ? activeProjects.map((p, i) => (
                <div key={i} className="project-card">
                  <div className="project-header">
                    <h3>{p.title}</h3>
                    <span className="status in-progress">{p.status}</span>
                  </div>

                  <p className="company">{p.company}</p>
                  <p className="desc">{p.description}</p>

                  <div className="details">
                    <p>
                      <FaCalendarAlt /> Deadline: {p.deadline}
                    </p>
                    <p>
                      <FaDollarSign /> Budget: ${p.budget}
                    </p>
                    <p>
                      <FaFileAlt /> Deliverables: {p.deliverables}
                    </p>
                  </div>

                  {/* === Fixed Progress Section === */}
                  <div className="progress-container">
                    <div className="progress-label">
                      <span>Progress</span>
                      <span className="progress-value">{p.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${p.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="actions">
                    <button className="view-btn">View Details</button>
                    <button className="submit-btn">Submit Work</button>
                  </div>
                </div>
              ))
            : completedProjects.map((p, i) => (
                <div key={i} className="project-card completed">
                  <div className="project-header">
                    <h3>{p.title}</h3>
                    <span className="status completed">{p.status}</span>
                  </div>

                  <p className="company">{p.company}</p>
                  <p className="desc">{p.description}</p>

                  <div className="details">
                    <p>
                      <FaCalendarAlt /> Deadline: {p.deadline}
                    </p>
                    <p>
                      <FaDollarSign /> Budget: ${p.budget}
                    </p>
                    <p>
                      <FaFileAlt /> Deliverables: {p.deliverables}
                    </p>
                  </div>

                  <div className="actions">
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
