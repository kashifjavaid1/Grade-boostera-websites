import React from 'react';

const ContactUs = () => {
    return (
        <div className="contact-main-wrapper">
            <div className="contact-container">

                {/* Left Side: Contact Information */}
                <div className="contact-info-panel">
                    <div className="info-header">
                        <h2>Get in Touch</h2>
                        <p>Have questions? We're here to help you 24/7.</p>
                    </div>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="icon-circle">📞</div>
                            <div>
                                <h4>Call Us</h4>
                                <p>+1 (123) 456-7890</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">✉️</div>
                            <div>
                                <h4>Email Us</h4>
                                <p>support@academic.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">📍</div>
                            <div>
                                <h4>Location</h4>
                                <p>123 Academic Street, NY, USA</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <span>Follow us:</span>
                        <div className="social-icons">
                            <div className="social-dot">FB</div>
                            <div className="social-dot">TW</div>
                            <div className="social-dot">IG</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="contact-form-panel">
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" placeholder="John" className="contact-input" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Smith" className="contact-input" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" className="contact-input" />
                        </div>

                        <div className="form-group">
                            <label>Subject</label>
                            <select className="contact-input">
                                <option>General Inquiry</option>
                                <option>Technical Support</option>
                                <option>Billing Question</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="How can we help you?" className="contact-input message-box"></textarea>
                        </div>

                        <button type="submit" className="contact-submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;