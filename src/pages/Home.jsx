import React, { useState } from 'react';
import heroGirl from '../assets/take-online-class.webp';
import setupsImage from '../assets/setups-image.webp';
import { FiPhoneCall } from "react-icons/fi";
import RequestForm from '../components/RequestForm/RequestForm.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Reviews from '../components/Reviews/Reviews.jsx';
import Services from '../components/Services/Services.jsx';
import Faq from '../components/FAQ/FAQ.jsx';
import QuoteForm from '../components/QuoteForm/QuoteForm.jsx';

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
                            Take My Online Class <br />
                            for Me with <span className="highlight">Distinction Grades</span>
                        </h1>
                        <p className="hero-description">
                            TakeMyOnlineClassUS is a leading platform that offers to handle student’s online classes with proficiency. Busy students frequently seeking assistance and ask “Can I pay someone to take my online class”, we are here to exactly resolve your query. We have designed our services to lighten the burden and ensure guaranteed academic success.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-talk" onClick={openWhatsApp}>
                                <FiPhoneCall className="btn-icon" /> Talk to expert
                            </button>
                            <button className="quote-btn" onClick={() => setIsModalOpen(true)}>
                                Get a Quote
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
                <h2 className="section-title">Why Choose Us</h2>

                <div className="why-choose-grid">
                    <div className="why-card">
                        <div className="why-icon-box blue-bg">✔</div>
                        <div className="why-text">
                            <h4>Quality Guaranteed</h4>
                            <p>Every assignment is crafted by qualified experts who specialize in your subject area, ensuring high-quality, original content.</p>
                        </div>
                    </div>

                    <div className="why-card">
                        <div className="why-icon-box purple-bg">🔒</div>
                        <div className="why-text">
                            <h4>Strict Confidentiality</h4>
                            <p>Your personal information and assignment details are protected with bank-level security and absolute privacy.</p>
                        </div>
                    </div>

                    <div className="why-card">
                        <div className="why-icon-box red-bg">🚀</div>
                        <div className="why-text">
                            <h4>On-Time Delivery</h4>
                            <p>We understand the importance of deadlines. Your work will be delivered on or before the agreed deadline, guaranteed.</p>
                        </div>
                    </div>

                    <div className="why-card">
                        <div className="why-icon-box green-bg">🎧</div>
                        <div className="why-text">
                            <h4>24/7 Support</h4>
                            <p>Our friendly support team is available around the clock to address any questions or concerns you might have.</p>
                        </div>
                    </div>
                </div>

                <div className="gold-promise-box">
                    <div className="promise-left">
                        <h3>Our Gold Standard Promise</h3>
                        <p>EDUOriginals is committed to maintaining the highest standards of academic integrity and excellence. We believe in empowering students with quality assistance that helps them succeed.</p>

                        <button className="quote-btn" onClick={() => setIsModalOpen(true)}>
                            Get a Quote
                        </button>
                    </div>
                    <div className="promise-right">
                        <ul>
                            <li><span>✔</span> Plagiarism-free work, always</li>
                            <li><span>✔</span> Free revisions within policy</li>
                            <li><span>✔</span> Money-back guarantee</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* { Steps Section} */}
            <section className="steps-section">
                <div className="steps-container">
                    <div className="steps-content">
                        <h2 className="steps-main-title">
                            3 Easy-Peasy Steps To Get Our <br />
                            Trusted Online Class Help Service
                        </h2>

                        <div className="steps-list">
                            <div className="step-item">
                                <div className="step-indicator-wrapper">
                                    <div className="step-number">1</div>
                                    <div className="step-line"></div>
                                </div>
                                <div className="step-text">
                                    <h4>Share Your Requirements</h4>
                                    <p>Fill out a quick form with all the nitty-gritty, topic, due date, word limit, and guidelines. We will then give the perfect solution for your academic requirements.</p>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-indicator-wrapper">
                                    <div className="step-number">2</div>
                                    <div className="step-line"></div>
                                </div>
                                <div className="step-text">
                                    <h4>Quality Check by Subject-Specific Experts</h4>
                                    <p>Right after you place the order, our certified specialists put on their thinking caps, review every detail to ensure the work aligns perfectly with your syllabus.</p>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-indicator-wrapper">
                                    <div className="step-number">3</div>
                                    <div className="step-line"></div>
                                </div>
                                <div className="step-text">
                                    <h4>Get Assigned A Certified Online Tutor</h4>
                                    <p>From there, our experts take the baton, delivering original, practical assignments that hit the bull’s eye for your online class demands.</p>
                                </div>
                            </div>
                        </div>

                        <button className="quote-btn" onClick={() => setIsModalOpen(true)}>
                            Get a Quote
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
                            We Offer 50% Discount On Every Order You Place.
                        </h2>
                        <p className="banner-subtext">
                            Hurry up, place your order, and get a free quote!
                        </p>
                        <button className="banner-btn-yellow">
                            Get your FREE qoute fast!
                        </button>
                        <p className="banner-footer-text">
                            Easy Registration / Guaranteed Confidentiality
                        </p>
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