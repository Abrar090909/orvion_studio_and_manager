import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Notifications.css";
import {
  FaTrash,
  FaCog,
  FaFileAlt,
  FaDollarSign,
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

function Notifications() {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "project",
      title: "New Project Available",
      message: "A new UI/UX design project matching your skills has been posted.",
      time: "2 hours ago",
      priority: "normal",
      unread: true,
      icon: <FaFileAlt className="blue" />,
    },
    {
      id: 2,
      type: "project",
      title: "Project Deadline Reminder",
      message: "E-commerce Website Redesign is due in 3 days. Don’t forget to submit your work.",
      time: "3 days ago",
      priority: "high",
      unread: false,
      icon: <FaClock className="red" />,
    },
    {
      id: 3,
      type: "project",
      title: "Project Approved",
      message: "Your Brand Identity Design project has been approved and marked as complete.",
      time: "5 days ago",
      priority: "normal",
      unread: false,
      icon: <FaCheckCircle className="green" />,
    },
    {
      id: 4,
      type: "payment",
      title: "Payment Received",
      message: "$1,800 has been credited to your account for the Brand Identity project.",
      time: "2 days ago",
      priority: "normal",
      unread: false,
      icon: <FaDollarSign className="green" />,
    },
    {
      id: 5,
      type: "license",
      title: "License Expiry Warning",
      message: "Your vendor license will expire in 15 days. Please renew to continue.",
      time: "1 day ago",
      priority: "high",
      unread: true,
      icon: <FaExclamationTriangle className="orange" />,
    },
    {
      id: 6,
      type: "message",
      title: "New Message from Client",
      message: "TechCorp Inc. has sent you a message regarding the website redesign project.",
      time: "3 days ago",
      priority: "normal",
      unread: false,
      icon: <FaEnvelope className="purple" />,
    },
  ]);

  const [preferences, setPreferences] = useState({
    email: true,
    push: true,
    project: true,
    payment: true,
    license: true,
    message: false,
  });

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  const filtered =
    activeTab === "all"
      ? notifications
      : notifications.filter((n) => n.type === activeTab);

  return (
    <div className="notifications-page">
      <Sidebar />

      <div className="notifications-container">
        <h2 className="page-title">Notifications</h2>

        <div className="header-row">
          <div className="info">
            <p>
              Stay updated with your projects, payments, and system alerts{" "}
              {unreadCount > 0 && (
                <span className="unread-badge">{unreadCount} unread</span>
              )}
            </p>
          </div>
          <div className="actions">
            <button onClick={markAllRead}>Mark All as Read</button>
            <button className="settings-btn">
              <FaCog /> Settings
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {["all", "project", "payment", "license", "message", "settings"].map(
            (tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "all"
                  ? "All"
                  : tab.charAt(0).toUpperCase() + tab.slice(1) + "s"}
              </button>
            )
          )}
        </div>

        {/* Content */}
        <div className="tab-content">
          {activeTab !== "settings" &&
            filtered.map((n) => (
              <div
                key={n.id}
                className={`notification-card ${
                  n.unread ? "unread" : ""
                } ${n.priority === "high" ? "high-priority" : ""}`}
              >
                <div className="icon">{n.icon}</div>
                <div className="details">
                  <h4>{n.title}</h4>
                  <p>{n.message}</p>
                  <span className="time">{n.time}</span>
                </div>

                {n.priority === "high" && (
                  <span className="priority-badge">High Priority</span>
                )}

                <div className="actions">
                  {n.unread && (
                    <button onClick={() => markRead(n.id)}>Mark as read</button>
                  )}
                  <FaTrash
                    className="delete"
                    onClick={() => deleteNotification(n.id)}
                  />
                </div>
              </div>
            ))}

          {activeTab === "settings" && (
            <div className="settings-tab">
              <h3>Notification Preferences</h3>
              <p>Choose how you want to receive notifications</p>

              <div className="toggle-section">
                <div>
                  <label>Email Notifications</label>
                  <p>Receive notifications via email</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={preferences.email}
                    onChange={() =>
                      setPreferences({ ...preferences, email: !preferences.email })
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="toggle-section">
                <div>
                  <label>Push Notifications</label>
                  <p>Receive browser push notifications</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={preferences.push}
                    onChange={() =>
                      setPreferences({ ...preferences, push: !preferences.push })
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <h3>Notification Types</h3>
              {["project", "payment", "license", "message"].map((key) => (
                <div key={key} className="toggle-section">
                  <div>
                    <label>
                      {key.charAt(0).toUpperCase() + key.slice(1)} Alerts
                    </label>
                    <p>
                      {key === "project"
                        ? "New projects, deadlines, and updates"
                        : key === "payment"
                        ? "Payment received and invoice updates"
                        : key === "license"
                        ? "License expiry and renewal reminders"
                        : "New messages from clients and support"}
                    </p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={preferences[key]}
                      onChange={() =>
                        setPreferences({
                          ...preferences,
                          [key]: !preferences[key],
                        })
                      }
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              ))}

              <button className="save-btn">Save Preferences</button>

              <div className="support-section">
                <h3>Support & Contact</h3>
                <div className="support-boxes">
                  <div className="box">
                    <h4>Help Center</h4>
                    <p>Find answers to common questions</p>
                    <button>Visit Help Center</button>
                  </div>
                  <div className="box">
                    <h4>Contact Support</h4>
                    <p>Get direct help from our team</p>
                    <button>Contact Support</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
