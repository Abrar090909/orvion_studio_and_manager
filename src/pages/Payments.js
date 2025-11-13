import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Payments.css";

function Payments() {
  const payments = {
    qaTesting: 2400,
    postQA: 10050,
    total: 12450,
  };

  const paymentHistory = [
    { id: 1, project: "E-commerce Website Redesign", date: "2024-10-16", amount: 1200, status: "Released" },
    { id: 2, project: "Mobile App Development", date: "2024-11-01", amount: 800, status: "Pending QA" },
  ];

  return (
    <div className="payments-page">
      <Sidebar />
      <div className="payments-container">
        <h2 className="page-title">Payments Overview</h2>

        <div className="payment-summary-row">
          <div className="payment-box">
            <h4>During QA Testing</h4>
            <p className="amount">${payments.qaTesting.toLocaleString()}</p>
            <span className="status pending">Pending Approval</span>
          </div>

          <div className="payment-box">
            <h4>After QA Completion</h4>
            <p className="amount">${payments.postQA.toLocaleString()}</p>
            <span className="status approved">Will Be Released</span>
          </div>

          <div className="payment-box total">
            <h4>Total Expected Payout</h4>
            <p className="amount">${payments.total.toLocaleString()}</p>
          </div>
        </div>

        <h3 className="section-title">Payment History</h3>
        <div className="payment-history">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((p) => (
                <tr key={p.id}>
                  <td>{p.project}</td>
                  <td>{p.date}</td>
                  <td>${p.amount.toLocaleString()}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        p.status === "Released" ? "approved" : "pending"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Payments;
