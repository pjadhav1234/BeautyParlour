import React, { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import "./Navbar.css"; // create this CSS file for styling
import { Link } from "react-router-dom";




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
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          
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
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
