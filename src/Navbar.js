import React from "react";
import './Navbar.css';  // Keep this for Navbar styling
import { Link } from "react-router-dom"; // Use Link for navigation

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Number Plate Detection</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
