import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/AvailableProjects.css";

function AvailableProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [budget, setBudget] = useState("All");

  const projects = [
    {
      title: "E-commerce Mobile App Design",
      company: "RetailTech Co.",
      description:
        "Design a user-friendly mobile application for an e-commerce platform. Must include authentication, product catalog, and shopping cart.",
      tags: ["UI/UX Design", "Mobile Design", "Figma"],
      budget: 2500,
      deadline: "2024-10-25",
    },
    {
      title: "React Web Application Development",
      company: "StartupXYZ",
      description:
        "Build a responsive web application using React, TypeScript, and modern UI frameworks. Integration with REST APIs and real-time features required.",
      tags: ["React", "TypeScript", "Node.js", "API Integration"],
      budget: 4200,
      deadline: "2024-11-15",
      urgent: true,
    },
    {
      title: "Brand Identity & Logo Design",
      company: "FinanceFlow",
      description:
        "Create a complete brand identity including logo, color palette, typography, and brand guidelines for a new fintech startup.",
      tags: ["Branding", "Logo Design", "Adobe Illustrator"],
      budget: 1800,
      deadline: "2024-10-20",
    },
    {
      title: "Data Analysis & Visualization",
      company: "DataCorp",
      description:
        "Analyze large datasets and create interactive dashboards using Python, Pandas, and visualization tools like Tableau or D3.js.",
      tags: ["Python", "Data Analysis", "Tableau", "D3.js"],
      budget: 3500,
      deadline: "2024-12-05",
    },
    {
      title: "Video Animation & Motion Graphics",
      company: "MarketingPro",
      description:
        "Create engaging animated videos and motion graphics for marketing campaigns. 2–3 minutes duration with professional voiceover.",
      tags: ["After Effects", "Motion Graphics", "Video Editing"],
      budget: 2800,
      deadline: "2024-11-10",
      urgent: true,
    },
    {
      title: "WordPress Website Development",
      company: "LocalBusiness",
      description:
        "Develop a custom WordPress website with theme customization, plugin integration, and SEO optimization.",
      tags: ["WordPress", "PHP", "MySQL", "SEO"],
      budget: 3200,
      deadline: "2024-11-30",
    },
    {
      title: "AI Chatbot Development",
      company: "BotifyTech",
      description:
        "Build a conversational AI chatbot for customer support using NLP and integration with web platforms.",
      tags: ["Python", "TensorFlow", "Dialogflow", "API Integration"],
      budget: 4800,
      deadline: "2024-12-20",
    },
    {
      title: "Cybersecurity Dashboard UI",
      company: "SecureNet",
      description:
        "Design a monitoring dashboard UI for cybersecurity threat visualization and analytics.",
      tags: ["Figma", "UI Design", "Prototyping"],
      budget: 2600,
      deadline: "2024-11-05",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      category === "All" ||
      p.tags.some((tag) => tag.toLowerCase().includes(category.toLowerCase()));

    const matchesBudget =
      budget === "All" ||
      (budget === "Low" && p.budget < 2000) ||
      (budget === "Mid" && p.budget >= 2000 && p.budget <= 4000) ||
      (budget === "High" && p.budget > 4000);

    return matchesSearch && matchesCategory && matchesBudget;
  });

  return (
    <div className="page-container">
      <Sidebar />
      <div className="available-projects-container">
        <div className="header">
          <h2>Available Projects</h2>
          <div className="filters">
            <input
              type="text"
              placeholder="Search projects..."
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="filter-dropdown"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Data">Data</option>
            </select>
            <select
              className="filter-dropdown"
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="All">All Budgets</option>
              <option value="Low">Below $2000</option>
              <option value="Mid">$2000 - $4000</option>
              <option value="High">Above $4000</option>
            </select>
          </div>
        </div>

        <div className="project-grid">
          {filteredProjects.map((proj, i) => (
            <div className="project-card" key={i}>
              {proj.urgent && <span className="urgent-badge">Urgent</span>}
              <h3>{proj.title}</h3>
              <p className="company">{proj.company}</p>
              <p className="desc">{proj.description}</p>

              <div className="tags">
                {proj.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="info">
                <p className="budget">${proj.budget}</p>
                <p className="deadline">Deadline: {proj.deadline}</p>
              </div>

              <button className="grab-btn">Grab Project</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableProjects;
