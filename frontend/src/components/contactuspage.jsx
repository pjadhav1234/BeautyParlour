import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Footer from "./Footer";
import "./contactus.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      {/* Background Overlay */}
      <div className="contact-bg"></div>

      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="info-item">
            <MapPin className="icon" />
            <p>123 Beauty Street, Mumbai, India</p>
          </div>

          <div className="info-item">
            <Phone className="icon" />
            <p>+91 98765 43210</p>
          </div>

          <div className="info-item">
            <Mail className="icon" />
            <p>contact@beautyparlour.com</p>
          </div>

          <div className="info-item">
            <Clock className="icon" />
            <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Your Name" />

            <label>Email</label>
            <input type="email" placeholder="you@example.com" />

            <label>Message</label>
            <textarea rows="5" placeholder="Write your message..."></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
    
  );
};

export default ContactUs;
