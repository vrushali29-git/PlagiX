import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  // Username validation
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(value)) {
      setUsernameError(
        "Username must have 1 uppercase, 1 lowercase, 1 number, 1 special character, and be at least 8 characters long."
      );
    } else {
      setUsernameError("");
    }
  };

  // Password validation
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordError("Passwords do not match!");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setPasswordError("Passwords do not match!");
    } else {
      setPasswordError("");
    }
  };

  // Phone input validation (E.164)
  const handlePhoneChange = (e) => {
    const value = e.target.value.trim();
    setPhone(value);
    const e164Regex = /^\+[1-9]\d{1,14}$/;
    setPhoneError(e164Regex.test(value) ? "" : "Use E.164 format, e.g. +14155551234");
  };

  // Send OTP
  const handleSendOTP = async () => {
    if (!phone) {
      alert("Please enter your phone number");
      return;
    }
    const e164Regex = /^\+[1-9]\d{1,14}$/;
    if (!e164Regex.test(phone)) {
      alert("Please enter phone in E.164 format, e.g., +14155551234");
      setPhoneError("Use E.164 format, e.g. +14155551234");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/send-otp",
        { phone }
      );
      if (response.data.success) {
        alert("OTP sent successfully!");
        setOtpSent(true);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP");
    }
  };

  // Verify OTP
  const handleVerifyOTP = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        { phone, otp }
      );
      if (response.data.success) {
        alert("OTP verified successfully!");
        setOtpVerified(true);
      }
    } catch (err) {
      console.error(err);
      alert("Invalid OTP");
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usernameError || passwordError) {
      alert("Please fix errors before submitting.");
      return;
    }
    if (!otpVerified) {
      alert("Please verify your OTP before registering.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { role, username, password, email }
      );
      alert(response.data.message);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="signup-container">
      <div className="logo1">
        <h3>PlagiX</h3>
      </div>

      {/* Left Section */}
      <div className="left-section">
        <h2>Welcome To PlagiX</h2>
        <p>Your one-stop solution for plagiarism detection and prevention.</p>
        <button className="login-btn">
          <Link to="/">Login</Link>
        </button>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Toggle */}
        <div className="toggle-buttons">
          <button
            type="button"
            className={`toggle-btn ${role === "student" ? "active" : ""}`}
            onClick={() => setRole("student")}
          >
            Student
          </button>
          <button
            type="button"
            className={`toggle-btn ${role === "teacher" ? "active" : ""}`}
            onClick={() => setRole("teacher")}
          >
            Teacher
          </button>
        </div>

        {/* Form */}
        <h2 className="form-title">
          {role === "student"
            ? "Create Account as a Student"
            : "Create Account as a Teacher"}
        </h2>

        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Common Fields */}
          <div className="form-row">
            <input
              type="text"
              placeholder="Create Username *"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          {usernameError && <p className="error-message">{usernameError}</p>}

          <div className="form-row">
            <input
              type="password"
              placeholder="Password *"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password *"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}

          <div className="form-row">
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone *"
              value={phone}
              onChange={handlePhoneChange}
              pattern="^\+[1-9]\d{1,14}$"
              title="Use E.164 format, e.g. +14155551234"
              required
            />
          </div>
          {phoneError && <p className="error-message">{phoneError}</p>}

          {/* OTP Section */}
          <div className="form-row">
            <div className="otp">
              <button
                type="button"
                className="send-otp-btn"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
              <input
                type="text"
                placeholder="OTP *"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button
                type="button"
                className="verify-otp-btn"
                onClick={handleVerifyOTP}
              >
                Verify OTP
              </button>
            </div>
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
