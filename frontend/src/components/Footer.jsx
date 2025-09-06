import React from "react";
import "./footer.css";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / About */}
        <div className="footer-col">
          <h3 className="footer-logo">💖 Beauty Bliss</h3>
          <p>
            Discover true beauty and relaxation with our premium services.
            We’re here to make you glow inside and out.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#treatments">Treatments</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 123 Beauty Street, Pune, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@beautybliss.com</p>
          <div className="footer-social">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Linkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Beauty Bliss | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
