import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">CricGuide</div>
      <div className="navbar-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT US</Link>
        <FaUserCircle size={20} />
      </div>
    </nav>
  );
};

export default Navbar;
