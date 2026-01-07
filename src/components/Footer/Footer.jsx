import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Subjects", path: "/subjects" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];

    const services = ["Essay Writing", "Research Papers", "Thesis Help", "Assignments", "Presentations"];
    const support = ["FAQ", "Privacy Policy", "Terms of Service", "Refund Policy", "Help Center"];

    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-col brand-col">
                        <div className="footer-logo-box">
                            <span className="logo-take-my">Take MY</span>
                            <div className="logo-main-text">
                                <span className="logo-n">n</span>line <span className="logo-class">ClassUS</span>
                            </div>
                        </div>
                        <p className="footer-desc">
                            Professional academic assistance to help students achieve excellence. Our team provides high-quality, original academic content.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><FaFacebookF /></a>
                            <a href="#" className="social-icon"><FaTwitter /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-list">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.path}
                                        className="footer-link-text clickable"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3 className="footer-heading">Services</h3>
                        <ul className="footer-list">
                            {services.map((item, i) => (
                                <li key={i} className="footer-link-text">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3 className="footer-heading">Support</h3>
                        <ul className="footer-list">
                            {support.map((item, i) => (
                                <li key={i} className="footer-link-text">{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Take MY Online ClassUS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;