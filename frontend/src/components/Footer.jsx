import {React} from "react";
import "./footer.css";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / About */}
        <div className="footer-col">
          <h3 className="footer-logo">Shital Erande Makeup & Hair Artist</h3>
          <p>
            Discover true beauty and relaxation with our premium services.
            We’re here to make you glow inside and out.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Maldad Rd, Saidarshan Colony, Sangamner, Maharashtra 422605</p>
          <p>📞 +91 7888155320</p>
          <p>📧 info@beautybliss.com</p>
          <div className="footer-social">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            
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
