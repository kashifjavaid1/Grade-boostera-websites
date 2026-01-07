import React from 'react';
import { FiTarget, FiZap, FiLock, FiCheckCircle, FiSmile } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const CORE_VALUES = [
    { id: 1, title: "Accuracy First", desc: "We deliver work that is thoroughly researched and academically sound.", icon: <FiCheckCircle />, color: "blue" },
    { id: 2, title: "Confidentiality Always", desc: "Your privacy is paramount. We maintain strict protocols for your data.", icon: <FiLock />, color: "purple" },
    { id: 3, title: "Speed Without Sacrifice", desc: "We deliver prompt assistance without compromising on quality.", icon: <FiZap />, color: "red" },
    { id: 4, title: "Smart Support", desc: "Our support goes beyond assignments, providing guidance that enhances skills.", icon: <FiSmile />, color: "green" },
];

const CHOOSE_REASONS = [
    { id: 1, title: "Expert Academic Team", desc: "Professionals with advanced degrees from prestigious universities." },
    { id: 2, title: "Personalized Approach", desc: "Tailored services to your specific needs and learning style." },
    { id: 3, title: "Comprehensive Coverage", desc: "From essays to complex dissertations, we cover all levels." },
    { id: 4, title: "Timely Delivery", desc: "Strict adherence to deadlines ensures your work is always on time." },
    { id: 5, title: "Original Content", desc: "100% plagiarism-free work created from scratch for every student." },
    { id: 6, title: "Continuous Support", desc: "We offer revisions and answer queries even after delivery." },
];

const About = () => {
    return (
        <div className="about-container">
            <section className="about-banner-strip">
                <div className="container">
                    <h1>About EDUOriginals</h1>
                    <p>Discover our story, our mission, and the dedicated team behind our commitment to academic excellence.</p>
                </div>
            </section>

            {/* 2. Mission & Story */}
            <section className="mission-section py-80">
                <div className="container">
                    <div className="mission-intro text-center">
                        <div className="mission-icon"><FaGraduationCap /></div>
                        <h2 className="mission-heading">Our Mission</h2>
                        <p className="main-desc">At EDUOriginals, our mission is to empower students to achieve academic excellence through high-quality, personalized academic assistance.</p>
                    </div>

                    <div className="story-approach-grid">
                        <div className="story-card">
                            <h3>Our Story</h3>
                            <p>Founded in 2018, EDUOriginals recognized the growing need for quality academic support. What began as a small team has grown into a global network of experts across numerous disciplines.</p>
                            <p>Our journey is guided by a commitment to academic integrity and student success.</p>
                        </div>
                        <div className="story-card">
                            <h3>Our Approach</h3>
                            <p>We combine expert knowledge with educational methodologies to provide assistance that not only helps complete assignments but also enhances comprehension.</p>
                            <p>We match students with subject-matter experts for accurate and valuable results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Values (Rendered via Map) */}
            <section className="core-values-section bg-light py-80">
                <div className="container">
                    <h2 className="section-title text-center">Our Core Values</h2>
                    <div className="values-modern-grid">
                        {CORE_VALUES.map((value) => (
                            <div key={value.id} className={`value-modern-card border-${value.color}`}>
                                <div className="v-header">
                                    <span className={`c-${value.color}`}>{value.icon}</span>
                                    <h4>{value.title}</h4>
                                </div>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us (Rendered via Map) */}
            <section className="why-choose-us py-80">
                <div className="container">
                    <h2 className="section-title text-center">Why Students Choose Us</h2>
                    <p className="text-center subtitle-text">Thousands of students trust EDUOriginals for their academic needs.</p>
                    <div className="choose-grid">
                        {CHOOSE_REASONS.map((reason) => (
                            <div key={reason.id} className="choose-item">
                                <div className="num-circle">{reason.id}</div>
                                <div className="choose-text">
                                    <h4>{reason.title}</h4>
                                    <p>{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Satisfaction Section */}
            <section className="satisfaction-section py-80">
                <div className="container">
                    <div className="satisfaction-box">
                        <div className="rate-circle-wrapper">
                            <div className="rate-circle">98%</div>
                        </div>
                        <div className="rate-content">
                            <h3>Student Satisfaction Rate</h3>
                            <p>We're proud to maintain a 98% satisfaction rate. This reflects our commitment to quality and reliability in academic assistance.</p>
                            <div className="stars-wrapper">
                                <span className="star-icons">★★★★★</span>
                                <span className="review-count">Based on 1,200+ student reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;