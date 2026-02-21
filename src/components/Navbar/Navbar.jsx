import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/Grade Booster PNG file.png';
import { FiPhoneCall } from "react-icons/fi";
import { HiMenu, HiX, HiLockClosed } from "react-icons/hi";
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm/QuoteForm';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem('countdownTime');
    const lastUpdate = localStorage.getItem('lastUpdate');

    if (savedTime && lastUpdate) {
      const elapsed = Math.floor((Date.now() - parseInt(lastUpdate)) / 1000);
      const remaining = parseInt(savedTime) - elapsed;
      return remaining > 0 ? remaining : 7200;
    }
    return 7200;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev > 0 ? prev - 1 : 0;
        localStorage.setItem('countdownTime', newTime.toString());
        localStorage.setItem('lastUpdate', Date.now().toString());
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=923030300303&text=Hi, I need help with my online class.", "_blank");
  };

  return (
    <>
      <div className="sale-banner">
        <div className="banner-content">
          <span className="badge">🔥 LIMITED TIME OFFER</span>
          <p className="banner-text">Get 50% OFF on All Exam & Class Services Early Bird Special!</p>
          <div className="timer-box">{formatTime(timeLeft)}</div> {/* Timer display */}
          <button className="banner-btn" onClick={() => setIsModalOpen(true)}>Claim Your Discount →</button>
        </div>
      </div>

      <div className="top-bar-notice">
        <p>Need Help? WhatsApp Us Now We Reply in Under 2 Minutes!</p>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Grade Booster Logo" />
            </Link>
          </div>

          <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
            <ul className="navbar-links">
              <li><Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About Us</Link></li>
              <li><Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link to="/contact-us" className="nav-link" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
              <li className="mobile-only">
                <Link to="/login" className="nav-link admin-link" onClick={() => setIsOpen(false)}>
                  <HiLockClosed /> Admin
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-right-side">
            <button className="quote-btn" onClick={() => setIsModalOpen(true)}>
              Get A Free Quote
            </button>
            <div className="phone-container" onClick={openWhatsApp}>
              <span className="phone-icon"><FiPhoneCall /></span>
              <span className="phone">03030300303</span>
            </div>
            <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX /> : <HiMenu />}
            </div>
          </div>
        </div>
      </nav>

      {isModalOpen && <QuoteForm onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default Navbar;