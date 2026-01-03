import React from 'react';
import './Navbar.css';
import logo from '../../assets/TakeMyOnline-logo.png';
import { FiPhoneCall } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="TakeMyOnlineClassUS Logo" />
        </div>

        <div className="navbar-menu">
          <ul className="navbar-links">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/about" className="nav-link">Subject</a></li>
            <li><a href="/contact" className="nav-link">Contact Us</a></li>
          </ul>
        </div>

        <div className="navbar-actions">
          <button className="quote-btn">Get a Quote</button>

          <a
            href="https://api.whatsapp.com/send/?phone=923481005573&text=Hi, I need help with my online class."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <div className="phone-container">
              <span className="phone-icon"><FiPhoneCall className="btn-icon" /></span>
              <span className="phone">03481005573</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;