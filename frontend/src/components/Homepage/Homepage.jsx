import React from "react";
import "./Homepage.css";
import { Search, Globe, BarChart } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; 

// Assume you have these placeholder images in your assets folder
import vrushaliImage from "../../assets/vrushali.jpg";
import sanikaImage from "../../assets/sanika.jpg";
import truptiImage from "../../assets/trupti.jpg";

const Homepage = () => {
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  const username = document.querySelector('input[placeholder="Username"]').value;
  const password = document.querySelector('input[placeholder="Password"]').value;
  const role = document.getElementById("role").value;

  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      username,
      password,
      role,
    });

    alert(response.data.message);

    const userRole = response.data.user.role;

if (userRole === "student") {
  navigate("/student");
} else if (userRole === "teacher") {
  navigate("/teacher");
} else if (userRole === "admin") {
  navigate("/admin");
}


  } catch (err) {
    alert(err.response?.data?.error || "Login failed. Please try again.");
  }
};

  return (
    <>
      <div className="page">
        <div className="bg-page">
          <div className="main-page">
            <div className="nav">
              <h1 className="logo">PlagiX</h1>
              <div className="nav-links">
                <a href="/about" className="about">About</a>
                <a href="/services" className="services">Services</a>
                <a href="/contact" className="contact">Contact</a>
                <a href="/signUp" className="sign-up-btn">Sign Up</a>
              </div>
            </div>

            <div className="content">
              <div className="left-content">
                <h1 className="title">Welcome to PlagiX</h1>
                <p className="subtitle">Your Ultimate Plagiarism Detection Solution</p>
                <p className="description">
                  “PlagiX is an AI-resistant plagiarism checker built for the future of education. 
                  It goes beyond text comparison, bringing deep code analysis, smart detection of 
                  AI-generated content, and real-time feedback for students and teachers. With 
                  dedicated portals for learners, educators, and administrators, PlagiX ensures 
                  transparency, originality, and trust across every submission. More than a tool—
                  it’s a commitment to authentic knowledge.”
                </p>
                <Link to="/signup" className="get-started">Get Started</Link>
              </div>

              <div className="right-content">
                <div className="loginpage">
                  <h2>Login to PlagiX</h2>
                  <form className="login-form" onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <div className="dropdown">
                      <select id="role" required>
                        <option value="" disabled selected>Select Role</option>
                        <option value="student">Studet</option>
                        <option value="teacher">Teacher</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <div className="remember-me">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                    <div className="forgot-password">
                      <a href="/forgot-password">Forgot Password?</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 🔹 Services Section */}
      <section className="our-services">
        <h2 className="service-title">Our Services</h2>
        <p className="service-description">
          Discover the range of services we offer to enhance your educational experience.
        </p>
        <div className="service-cards">
          <div className="service-card">
            <Search size={48} color="#4A90E2" />
            <h3>Comprehensive Plagiarism Detection</h3>
            <p>Our advanced algorithms scan academic papers, research reports, and code 
              to identify copied or closely matched content with high accuracy.</p>
          </div>
          <div className="service-card">
            <Globe size={48} color="#4A90E2" />
            <h3>Multilingual Support</h3>
            <p>PlagiX works across multiple languages, making it easier for global 
              users to check originality without language barriers.</p>
          </div>
          <div className="service-card">
            <BarChart size={48} color="#4A90E2" />
            <h3>Detailed Reporting</h3>
            <p>Get clear originality scores, highlighted matches, and easy-to-understand 
              insights that help improve writing and coding integrity.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Us */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="card">
          <div className="card-text">
            <h3>Advance learning with an AI writing detection solution built for educators</h3>
            <p>PlagiX is engineered to identify AI-generated content, ensuring that 
              students submit original work and maintain academic integrity.</p>
          </div>
          <div className="card-image">
            <img src="./src/assets/AI-card.png" alt="AI resistant" />
          </div>
        </div>

        <div className="card reverse">
          <div className="card-image">
            <img src="./src/assets/multilingual.jpg" alt="Language barriers" />
          </div>
          <div className="card-text">
            <h3>Break Language Barriers</h3>
            <p>Detect copied content effortlessly across different languages, making 
              plagiarism checks easy for Indian users.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Team Section */}
      <section className="our-team">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-member-card">
            <img src={vrushaliImage} alt="Vrushali" className="team-profile-pic" />
            <h3>Vrushali</h3>
            <p className="team-role">UI/UX Designer</p>
            <div className="team-socials">
              <a href="https://www.linkedin.com/in/vrushali-gawai01/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.instagram.com/vrushali._01/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
          <div className="team-member-card">
            <img src={sanikaImage} alt="Sanika" className="team-profile-pic" />
            <h3>Sanika</h3>
            <p className="team-role">Manager</p>
            <div className="team-socials">
              <a href="https://www.linkedin.com/in/sanika-deshmukh25/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.instagram.com/softserenity_25/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
          <div className="team-member-card">
            <img src={truptiImage} alt="Trupti" className="team-profile-pic" />
            <h3>Trupti</h3>
            <p className="team-role">Developer</p>
            <div className="team-socials">
              <a href="https://www.linkedin.com/in/truptii/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.instagram.com/its.truptii06/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Contact Form */}
      <section className="lets-connect">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Have questions or want to know more? 
          Send us a message and we'll get back to you!</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* 🔹 Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>PlagiX</h2>
            <p>Your ultimate plagiarism detection solution</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Email: support@plagix.com</p>
            <p>Phone: +91 1234567890</p>
            <div className="footer-socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 PlagiX. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Homepage;