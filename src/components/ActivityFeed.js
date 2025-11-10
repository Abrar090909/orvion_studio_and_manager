import React from "react";

function ActivityFeed() {
  const activities = [
    { title: "Project Completed", desc: "Brand Identity Design for Creative Agency", time: "2 hours ago" },
    { title: "New Project Available", desc: "Mobile App UI/UX Design - $2,500", time: "1 day ago" },
    { title: "Payment Received", desc: "$1,800 for E-commerce Website Redesign", time: "3 days ago" },
  ];

  return (
    <div className="activity-feed">
      <h3>Recent Activity</h3>
      <p>Your latest interactions and updates</p>
      {activities.map((a, i) => (
        <div key={i} className="activity-item">
          <h4>{a.title}</h4>
          <p>{a.desc}</p>
          <span>{a.time}</span>
        </div>
      ))}
    </div>
  );
}

export default ActivityFeed;
