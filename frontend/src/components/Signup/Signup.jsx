import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student"); 
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameError || passwordError) {
      alert("Please fix errors before submitting.");
      return;
    }
    alert(`${role} registration successful!`);
    navigate("/");
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
          {role === "student" ? (
            <>
              <div className="form-row">
                <input type="text" placeholder="First Name *" required />
                <input type="text" placeholder="Last Name *" required />
                
              </div>

              <div className="form-row">
                <input
                  type="text"
                  placeholder=" Create Username *"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              {usernameError && (
                <p className="error-message" >{usernameError} </p>
              )}

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
                
                <select required>
                  <option value="">Please select your Security Question</option>
                  <option value="pet">What is your pet's name?</option>
                  <option value="school">What is your first school?</option>
                  <option value="city">What is your birth city?</option>
                </select>
                <input type="text" placeholder="Answer *" required />
              </div>

              <div className="form-row">
                <input type="email" placeholder="Email *" required />
                <input type="text" placeholder="Phone *" required />
                
              </div>

              <div className="form-row">
                <div className="otp">
                  <button type="button" className="send-otp-btn">
                    Send OTP
                  </button>
                  <input type="text" placeholder="OTP *" required />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="form-row">
                <input type="text" placeholder="Teacher Name *" required />
                <input type="text" placeholder="Organization *" required />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  placeholder=" Create Username *"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              {usernameError && (
                <p className="error-message">{usernameError}</p>
              )}

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
                
                <input type="email" placeholder="Email *" required />
                <input type="text" placeholder="Phone *" required />
              </div>

              <div className="form-row">
                <div className="otp">
                  <button type="button" className="send-otp-btn">
                    Send OTP
                  </button>
                  <input type="text" placeholder="OTP *" required />
                </div>
              </div>
            </>
          )}

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
