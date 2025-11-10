import React from "react";
import "../styles/Dashboard.css";

function ProjectList() {
  const projects = [
    {
      name: "E-commerce Website Redesign",
      progress: 75,
      due: "2024-10-15",
    },
    {
      name: "Mobile App Development",
      progress: 60,
      due: "2024-10-20",
    },
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h4>{project.name}</h4>
          <p className="project-meta">Progress</p>
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ "--progress": `${project.progress}%` }}
            ></div>
            <span className="progress-percentage">{project.progress}%</span>
          </div>
          <p className="project-due">Due: {project.due}</p>
        </div>
      ))}

      <div className="view-all-container">
        <button
          className="view-all-btn"
          onClick={() => window.location.href = "/projects"}
        >
          View All Projects →
        </button>
      </div>
    </div>
  );
}

export default ProjectList;
