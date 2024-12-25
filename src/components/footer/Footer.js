import React from "react";
import "./footer.css"; // Import the CSS file for footer styling
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Import Material-UI icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">University of Agriculture Faisalabad</h2>
        <p className="footer-text">
          A hub of knowledge and excellence. Join us in exploring innovative
          agricultural practices and fostering impactful research.
        </p>
      </div>
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Departments</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: uaf.edu.pk</p>
          <p>Phone: +92 41 9200161</p>
          <p>Address: Faisalabad, Pakistan</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook fontSize="large" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Twitter fontSize="large" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram fontSize="large" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <LinkedIn fontSize="large" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 University of Agriculture Faisalabad. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
