import React, { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import "./Navbar.css"; // create this CSS file for styling
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";





const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img 
    src={logo} 
    alt="Beauty Salon Logo" 
    className="h-10 w-10 object-contain"
  />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
