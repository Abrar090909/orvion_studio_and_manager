import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";
import {
  FaUser,
  FaBriefcase,
  FaIdCard,
  FaLock,
  FaUpload,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCalendarAlt,
} from "react-icons/fa";

function Profile() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="profile-page">
      <Sidebar />

      <div className="profile-container">
        <h2 className="page-title">Profile</h2>

        <div className="license-alert">
          <FaExclamationTriangle className="alert-icon" />
          <div>
            <h4>License Renewal Required</h4>
            <p>Your vendor license expires in 15 days (2024-10-15). Renew now to continue receiving projects.</p>
          </div>
          <button className="renew-btn">Renew License</button>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "personal" ? "active" : ""}`}
            onClick={() => setActiveTab("personal")}
          >
            <FaUser /> Personal Info
          </button>
          <button
            className={`tab-btn ${activeTab === "professional" ? "active" : ""}`}
            onClick={() => setActiveTab("professional")}
          >
            <FaBriefcase /> Professional
          </button>
          <button
            className={`tab-btn ${activeTab === "license" ? "active" : ""}`}
            onClick={() => setActiveTab("license")}
          >
            <FaIdCard /> License & KYC
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "personal" && (
            <div className="tab-panel">
              <h3>Personal Information</h3>
              <p>Update your personal details and contact information</p>

              <div className="profile-section">
                <div className="photo-upload">
                  <div className="photo-placeholder">JD</div>
                  <button className="upload-btn">
                    <FaUpload /> Upload Photo
                  </button>
                </div>

                <div className="info-grid">
                  <div>
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" disabled />
                  </div>
                  <div>
                    <label>Email Address</label>
                    <input type="text" placeholder="john.doe@example.com" disabled />
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <input type="text" placeholder="+1 234 567 890" disabled />
                  </div>
                  <div>
                    <label>Location</label>
                    <input type="text" placeholder="New York, USA" disabled />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "professional" && (
            <div className="tab-panel">
              <h3>Professional Information</h3>
              <p>Manage your business details and skills</p>

              <div className="info-grid">
                <div>
                  <label>Company Name</label>
                  <input type="text" placeholder="Freelance Design Studio" disabled />
                </div>
                <div>
                  <label>Website</label>
                  <input type="text" placeholder="https://johndoe.design" disabled />
                </div>
              </div>

              <h4 className="sub-heading">Skills & Expertise</h4>
              <div className="skills">
                <span>UI/UX Design</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Figma</span>
                <span>Adobe Creative Suite</span>
              </div>

              <div className="stats">
                <div className="stat-item">
                  ⭐ <strong>4.9</strong>
                  <p>Average Rating</p>
                </div>
                <div className="stat-item">
                  <strong>24</strong>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <strong>96%</strong>
                  <p>Success Rate</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "license" && (
            <div className="tab-panel">
              <h3>Vendor License</h3>
              <p>Your current license status and KYC verification</p>

              <div className="license-card">
                <div className="license-status">
                  <h4>License Status</h4>
                  <span className="active-status">
                    <FaCheckCircle /> Active
                  </span>
                </div>

                <div className="license-info">
                  <p><strong>License Type:</strong> Professional Vendor License</p>
                  <p><strong>License Number:</strong> VL-2024-JD-001</p>
                  <p><strong>Issue Date:</strong> 2024-01-15</p>
                  <p><strong>Expiry Date:</strong> <span className="warning">2024-10-15</span></p>
                </div>

                <div className="renew-section">
                  <p><FaCalendarAlt /> Time until renewal: <strong>15 days</strong></p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "85%" }}></div>
                  </div>
                  <button className="renew-btn-full">
                    <FaIdCard /> Renew License
                  </button>
                </div>
              </div>

              <div className="kyc-section">
                <h4>KYC Documents</h4>
                <div className="kyc-grid">
                  <div className="kyc-item">
                    <FaIdCard /> Government ID <span className="verified">Verified</span>
                  </div>
                  <div className="kyc-item">
                    <FaBriefcase /> Business Registration <span className="verified">Verified</span>
                  </div>
                  <div className="kyc-item">
                    <FaLock /> Tax Information <span className="verified">Verified</span>
                  </div>
                </div>
                <button className="upload-docs">
                  <FaUpload /> Upload Additional Documents
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
