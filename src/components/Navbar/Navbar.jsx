import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Grade Booster PNG file.png';
import { FiPhoneCall } from "react-icons/fi";
import { HiMenu, HiX, HiLockClosed } from "react-icons/hi";
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm/QuoteForm';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
              <li><Link to="/subject" className="nav-link" onClick={() => setIsOpen(false)}>Subject</Link></li>
              <li><Link to="/contact-us" className="nav-link" onClick={() => setIsOpen(false)}>Contact Us</Link></li>

              <li>
                <Link to="/login" className="nav-link admin-link" onClick={() => setIsOpen(false)}>
                  <HiLockClosed style={{ marginRight: '5px' }} /> Admin
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-right-side">
            <button className="quote-btn" onClick={() => setIsModalOpen(true)}>
              Get a Quote
            </button>

            <a href="https://api.whatsapp.com/send/?phone=923481005573&text=Hi, I need help with my online class." target="_blank" className="phone-desktop-only">
              <div className="phone-container">
                <span className="phone-icon"><FiPhoneCall /></span>
                <span className="phone">03481005573</span>
              </div>
            </a>

            <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX /> : <HiMenu />}
            </div>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <QuoteForm />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;