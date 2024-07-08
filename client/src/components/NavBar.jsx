import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../css/NavBar.css';
import Logo from '../assets/logo.jpg'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Logo} alt="FruitSource Logo" className="logo-image" />
        <h1 className="brand-title">FruitSource</h1>
      </div>
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><ScrollLink to="about" smooth={true} duration={500} className="nav-link">About</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500} className="nav-link">Contact Us</ScrollLink></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
