import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';
import logo from '../../assets/Grade Booster PNG file.png';
const Footer = () => {
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];

    const services = ["Online Class Help", "Exam Assistance", "Research Papers", "Thesis Help", "Assignments", "Presentations"];
    const support = ["FAQ ", "Privacy Policy", "Terms of Service ", "Refund Policy", "Help Center"];

    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-col brand-col">
                        <div className="footer-logo-box">
                            <div className="logo-container">
                                <span className="logo-take-my">Grade</span>
                                <div className="logo-main-text">
                                    <span className="logo-n">B</span>ooster
                                </div>
                            </div>
                        </div>
                        <p className="footer-desc">
                            GradeBooster is your all-in-one academic partner. From online classes and proctored exams to assignments and certifications, we connect students with verified experts who deliver results. Trusted by 10,000+ students. Available 24/7. Satisfaction guaranteed.
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
                    <p>&copy; {new Date().getFullYear()} GradeBooster. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;