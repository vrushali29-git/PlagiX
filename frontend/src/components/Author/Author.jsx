import React, { useState } from "react";
import "./Author.css";
import { FaUserCircle } from "react-icons/fa";

const Author = () => {
  const [submissions, setSubmissions] = useState([
    { id: 1, title: "AI Research Paper", status: "Accepted", report: "92% Original" },
    { id: 2, title: "Cloud Project Report", status: "Rejected", report: "55% Original" },
  ]);

  const [newSubmission, setNewSubmission] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSubmission.trim() !== "") {
      setSubmissions([
        ...submissions,
        { id: submissions.length + 1, title: newSubmission, status: "Under Review", report: "Pending" }
      ]);
      setNewSubmission("");
      alert("Submission uploaded successfully! Reviewer will check it soon.");
    }
  };

  return (
    <div className="dashboard">
      {/* 🔹 Navbar */}
      <div className="dashboard-nav">
        <h2>PlagiX Author Dashboard</h2>
        
        {/* Profile Icon with Dropdown */}
        <div className="profile-container">
          <FaUserCircle
            size={36}
            className="profile-icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="profile-dropdown">
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </div>
          )}
        </div>
      </div>

      {/* 🔹 Main Content */}
      <div className="dashboard-content">
        {/* Upload Section */}
        <div className="upload-section">
          <h3>Upload New Submission</h3>
          <form onSubmit={handleSubmit} className="upload-form">
            <input
              type="text"
              placeholder="Enter submission title"
              value={newSubmission}
              onChange={(e) => setNewSubmission(e.target.value)}
              required
            />
            <button type="submit">Upload</button>
          </form>
        </div>

        {/* Submissions Table */}
        <div className="submissions-section">
          <h3>Your Submissions</h3>
          <p>Total Submissions: <b>{submissions.length}</b></p>
          <table className="submissions-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Plagiarism Report</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr key={sub.id}>
                  <td>{sub.id}</td>
                  <td>{sub.title}</td>
                  <td
                    className={
                      sub.status === "Accepted"
                        ? "status-accepted"
                        : sub.status === "Rejected"
                        ? "status-rejected"
                        : "status-review"
                    }
                  >
                    {sub.status}
                  </td>
                  <td>{sub.report}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Author;
