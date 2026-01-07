import React from 'react';
import { FiTarget, FiBookOpen, FiZap, FiLock, FiCheckCircle, FiSmile } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
    return (
        <div className="about-container">
            <section className="about-banner-strip">
                <h1>About EDUOriginals</h1>
                <p>Discover our story, our mission, and the dedicated team behind our commitment to academic excellence.</p>
            </section>

            <section className="mission-section py-80">
                <div className="container">
                    <div className="mission-intro text-center">
                        <div className="mission-icon"><FaGraduationCap /></div>
                        <h2 className='mission-heading'>Our Mission</h2>
                        <p className="main-desc">At EDUOriginals, our mission is to empower students to achieve academic excellence through high-quality, personalized academic assistance. We believe in making education more accessible and helping students overcome challenges in their academic journey.</p>
                    </div>

                    <div className="story-approach-grid">
                        <div className="story-card">
                            <h3>Our Story</h3>
                            <p>Founded in 2018 by a group of academic professionals who recognized the growing need for quality academic support, EDUOriginals has since helped thousands of students worldwide achieve their educational goals. What began as a small team of dedicated educators has grown into a network of experts across numerous disciplines.</p>
                            <p>Our journey has been guided by a commitment to academic integrity, quality, and student success.</p>
                        </div>
                        <div className="story-card">
                            <h3>Our Approach</h3>
                            <p>We believe that every student deserves personalized support that addresses their unique academic challenges. Our approach combines expert knowledge with a deep understanding of educational methodologies to provide assistance that not only helps students complete assignments but also enhances their learning.</p>
                            <p>We carefully match students with experts who have specialized knowledge in their subject area.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="core-values-section bg-light py-80">
                <div className="container">
                    <h2 className="section-title text-center">Our Core Values</h2>
                    <div className="values-modern-grid">
                        <div className="value-modern-card border-blue">
                            <div className="v-header"><FiCheckCircle className="c-blue" /> <h4>Accuracy First</h4></div>
                            <p>We believe in delivering work that is thoroughly researched, factually accurate, and academically sound.</p>
                        </div>
                        <div className="value-modern-card border-purple">
                            <div className="v-header"><FiLock className="c-purple" /> <h4>Confidentiality Always</h4></div>
                            <p>Your privacy is paramount. We maintain strict confidentiality protocols to ensure your data remains secure.</p>
                        </div>
                        <div className="value-modern-card border-red">
                            <div className="v-header"><FiZap className="c-red" /> <h4>Speed Without Sacrifice</h4></div>
                            <p>We deliver prompt assistance without compromising on quality, ensuring you receive work on time.</p>
                        </div>
                        <div className="value-modern-card border-green">
                            <div className="v-header"><FiSmile className="c-green" /> <h4>Smart Support</h4></div>
                            <p>Our support goes beyond just completing assignments. We provide guidance that enhances your skills.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="satisfaction-section py-80">
                <div className="container">
                    <div className="satisfaction-box">
                        <div className="rate-circle">98%</div>
                        <div className="rate-content">
                            <h3>Student Satisfaction Rate</h3>
                            <p>We're proud to maintain a 98% satisfaction rate among our students. This reflects our commitment to quality, reliability, and excellence in academic assistance.</p>
                            <div className="stars">★★★★★ <small>Based on 1,200+ student reviews</small></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;