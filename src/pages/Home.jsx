import React, { useState } from 'react';
import heroGirl from '../assets/take-online-class.webp';
import setupsImage from '../assets/setups-image.webp';
import { FiPhoneCall } from "react-icons/fi";
import RequestForm from '../components/RequestForm/RequestForm.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Reviews from '../components/Reviews/Reviews.jsx';
import Services from '../components/Services/Services.jsx';
import QuoteForm from '../components/QuoteForm/QuoteForm.jsx';
import Faq from '../components/Faq/Faq.jsx';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openWhatsApp = () => {
        window.open("https://api.whatsapp.com/send/?phone=923481005573&text=Hi, I need help with my online class.", "_blank");
    };
    return (
        <>
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-left">
                        <h1 className="hero-title">
                            Is It Possible to Hire Someone to Take My Online Class? Absolutely And We Guarantee the Grades.
                        </h1>
                        <p className="hero-description">
                            Overwhelmed with deadlines, exams, and endless assignments? You’re not alone. Thousands of students trust GradeBooster to handle their online classes from start to finish. Our subject-matter experts take care of every assignment, quiz, discussion, and exam, so you can focus on what matters most. Confidential, affordable, and backed by a money-back guarantee.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-talk" onClick={openWhatsApp}>
                                <FiPhoneCall className="btn-icon" /> Talk to an Expert
                            </button>
                            <button className="quote-btn" onClick={() => setIsModalOpen(true)}>
                                Get a Free Quote
                            </button>
                        </div>
                    </div>

                    <div className="hero-right">
                        <img src={heroGirl} alt="Student" className="hero-image" />

                    </div>
                </div>
            </section>

            <RequestForm />
            <Testimonials />
            <Reviews />
            <Services />

            {/* why choose Session */}
            <section className="why-choose-section">
                <h2 className="section-title">Why Thousands of Students Choose GradeBooster Over Anyone Else</h2>

                <div className="why-choose-grid">
                    <div className="why-card">
                        <div className="why-icon-box blue-bg">✔</div>
                        <div className="why-text">
                            <h4>✔ Quality Guaranteed</h4>
                            <p>Every piece of work is handled by a degree-holding specialist in your exact subject area. No generalists, no guesswork, just sharp, original work that earns the grades you’re paying for</p>
                        </div>
                    </div>

                    <div className="why-card">
                        <div className="why-icon-box purple-bg">🔒</div>
                        <div className="why-text">
                            <h4>🔒 Strict Confidentiality</h4>
                            <p>Your identity stays invisible. We use encrypted communications and a strict no-disclosure policy. Your school, your professors, and your classmates will never know. That’s a promise we’ve kept for 10,000+ students.</p>
                        </div>
                    </div>

                    <div className="why-card">
                        <div className="why-icon-box red-bg">🚀</div>
                        <div className="why-text">
                            <h4>🚀 On-Time Delivery</h4>
                            <p> We don’t just meet deadlines — we beat them. Every assignment, quiz, and exam is completed with time to spare so you can review it before submission. Zero late penalties, guaranteed.</p>
                        </div>
                    </div>

                    <div className="why-card">
                        <div className="why-icon-box green-bg">🎧</div>
                        <div className="why-text">
                            <h4>🎧 24/7 Support</h4>
                            <p>Got a question at 2 AM before a morning exam? We’re here. Our support team is available 24/7 via WhatsApp, email, and live chat. Average response time: under 2 minutes.</p>
                        </div>
                    </div>
                </div>

                <div className="gold-promise-box">
                    <div className="promise-left">
                        <h3>The GradeBooster Promise</h3>
                        <p>We don’t just help you pass, we help you stand out. GradeBooster is built on a commitment to academic excellence, originality, and the kind of quality that earns top marks. Every order comes with our ironclad guarantees.</p>

                        <button className="quote-btn" onClick={() => setIsModalOpen(true)}>
                            Get a Free Quote
                        </button>
                    </div>
                    <div className="promise-right">
                        <ul>
                            <li><span>✔</span> 100% plagiarism-free work, every single time</li>
                            <li><span>✔</span> Free unlimited revisions until you’re completely satisfied</li>
                            <li><span>✔</span> Full money-back guarantee if we don’t deliver as promised</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* { Steps Section} */}
            <section className="steps-section">
                <div className="steps-container">
                    <div className="steps-content">
                        <h2 className="steps-main-title">
                            Getting Started Is Easier Than You Think: Just 3 Steps
                        </h2>

                        <div className="steps-list">
                            <div className="step-item">
                                <div className="step-indicator-wrapper">
                                    <div className="step-number">1</div>
                                    <div className="step-line"></div>
                                </div>
                                <div className="step-text">
                                    <h4>Share Your Requirements</h4>
                                    <p>Fill out a quick form or message us on WhatsApp with the details  your subject, deadline, word count, and any specific instructions your professor requires. The more details you share, the better we deliver.</p>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-indicator-wrapper">
                                    <div className="step-number">2</div>
                                    <div className="step-line"></div>
                                </div>
                                <div className="step-text">
                                    <h4>Quality Check by Subject-Specific Experts</h4>
                                    <p>Within minutes, we assign a certified specialist who knows your subject inside and out. They review every detail of your requirements to make sure the work aligns perfectly with your syllabus and your professor’s expectations.</p>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-indicator-wrapper">
                                    <div className="step-number">3</div>
                                    <div className="step-line"></div>
                                </div>
                                <div className="step-text">
                                    <h4>Get Assigned A Certified Online Tutor</h4>
                                    <p>Your expert gets to work, delivering original, high-quality submissions that hit every mark. You get updates along the way and final delivery before your deadline  every time. It really is that simple.</p>
                                </div>
                            </div>
                        </div>

                        <button className="quote-btn" onClick={() => setIsModalOpen(true)}>
                            Get a Free Quote
                        </button>
                    </div>
                </div>

                <div className="steps-image-full-side">
                    <img src={setupsImage} alt="Students Group" className="steps-img-render" />
                </div>
            </section>

            <div className='discount-container'>
                <section className="discount-banner">
                    <div className="banner-bg-shape shape-1"></div>
                    <div className="banner-bg-shape shape-2"></div>

                    <div className="banner-content">
                        <h2 className="banner-heading">
                            50% Off Every Order Limited Time Only!                        </h2>
                        <p className="banner-subtext">
                            Don’t wait until it’s too late. Lock in your discount, get matched with an expert, and start seeing the grades you deserve all at half the price.
                        </p>
                        <div className='discount-content'>
                            <button className="banner-btn-yellow" onClick={() => setIsModalOpen(true)}>
                                Get your FREE quote in under 60 seconds!
                            </button>
                            <p className="banner-footer-text">
                                ✅ Easy Registration  |  🔒 Guaranteed Confidentiality  |  💰 Pay After Results
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Faq />

            {isModalOpen && (
                <QuoteForm onClose={() => setIsModalOpen(false)} />
            )}
        </>
    );
};

export default Home;