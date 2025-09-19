import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ here you can later add backend API call for registration
    alert("Registration successful!");
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Sign Up for PlagiX</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Student Name" required />
          <input type="email" placeholder="Email ID" required />
          <input type="tel" placeholder="Contact Number" required />

          <div className="otp-section">
            <input type="text" placeholder="Enter OTP" required />
            <button type="button" className="otp-btn">Send OTP</button>
          </div>

          <input type="text" placeholder="College Name" required />
          <input type="text" placeholder="College ID" required />

          <button type="submit" className="signup-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
