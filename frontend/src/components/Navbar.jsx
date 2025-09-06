import React, { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import "./Navbar.css"; // create this CSS file for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <h1>Beauty Salon</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#cart"><ShoppingCart size={20} /></a></li>
          <li><a href="#search"><Search size={20} /></a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#cart"><ShoppingCart size={20} /></a></li>
          <li><a href="#search"><Search size={20} /></a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
