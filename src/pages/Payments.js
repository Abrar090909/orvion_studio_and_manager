import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { fetchPaymentsFromSheets } from "../services/GoogleSheetsService";
import "../styles/Payments.css";

function Payments() {
  const [payments, setPayments] = useState({
    qaTesting: 0,
    postQA: 0,
    total: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from Google Sheets on component mount and every 30 seconds
  useEffect(() => {
    const loadPayments = async () => {
      try {
        setLoading(true);
        const data = await fetchPaymentsFromSheets();
        if (data) {
          setPayments(data);
          setError(null);
        } else {
          setError("Failed to load payments data");
        }
      } catch (err) {
        setError("Error fetching payments");
      } finally {
        setLoading(false);
      }
    };

    loadPayments();

    // Refresh data every 30 seconds
    const interval = setInterval(loadPayments, 30000);
    return () => clearInterval(interval);
  }, []);

  // payments.history will be an array of { project, date, amount, status, email }
  const paymentHistory = payments.history && payments.history.length ? payments.history : [
    { project: "E-commerce Website Redesign", date: "2024-10-16", amount: 1200, status: "Released", email: "" },
    { project: "Mobile App Development", date: "2024-11-01", amount: 800, status: "Pending QA", email: "" },
  ];

  return (
    <div className="payments-page">
      <Sidebar />
      <div className="payments-container">
        <h2 className="page-title">Payments Overview</h2>

        <div className="payment-summary-row">
          <div className="payment-box">
            <h4>Ongoing QA</h4>
            <p className="amount">${payments.qaTesting.toLocaleString()}</p>
            <span className="status pending">Pending Approval</span>
          </div>

          <div className="payment-box">
            <h4>Available to be Billed</h4>
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
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((p, idx) => (
                <tr key={idx}>
                  <td>{p.project}</td>
                  <td>{p.date}</td>
                  <td>${(p.amount || 0).toLocaleString()}</td>
                  <td>
                    <span className={`status-badge ${p.status && p.status.toLowerCase().includes("released") ? "approved" : "pending"}`}>
                      {p.status}
                    </span>
                  </td>
                  <td>{p.email || "-"}</td>
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
