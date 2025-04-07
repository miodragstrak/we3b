import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Separate styling for navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/we3b" className="nav-button">Home</Link>
        <Link to="/projects" className="nav-button">Projects</Link>
        <Link to="/partners" className="nav-button">Partners / Clents</Link>
        <Link to="/about" className="nav-button">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;