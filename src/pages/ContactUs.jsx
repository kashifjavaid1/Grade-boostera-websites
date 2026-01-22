import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.email || !formData.message) {
            return toast.warn("Please fill all required fields");
        }

        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/api/contact/send", formData);

            if (res.data.success) {
                toast.success("Message sent successfully! 🎉");
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: 'General Inquiry',
                    message: ''
                });
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-main-wrapper">
            <div className="contact-container">

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

                <div className="contact-form-panel">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name*</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                    className="contact-input"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Smith"
                                    className="contact-input"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email Address*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="contact-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Subject</label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="contact-input"
                            >
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Technical Support">Technical Support</option>
                                <option value="Billing Question">Billing Question</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Message*</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                className="contact-input message-box"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="contact-submit-btn"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;