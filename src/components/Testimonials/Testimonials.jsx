import React from 'react';
import './Testimonials.css';

const ReviewCard = ({ name, major, review, rating }) => {
    return (
        <div className="review-card">
            <div className="review-header">
                <div className="profile-circle">{name.charAt(0)}</div>
                <div className="user-info">
                    <h4>{name}</h4>
                    <p>{major}</p>
                </div>
                <div className="stars-row">
                    {"★".repeat(rating)}{"☆".repeat(5 - rating)}
                </div>
            </div>

            <div className="review-content">
                <p className="review-text">{review}</p>
            </div>

            <div className="review-footer">
                <span className="verified-text">Verified Student</span>
                <span className="status-dot"></span>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const reviewsData = [
        {
            name: "Michael Johnson",
            major: "Medical Student",
            rating: 5,
            review: "EDUOriginals helped me balance my clinical rotations with my research papers. The quality of work was exceptional, and the team was responsive to all my questions and requirements."
        },
        {
            name: "Jessica Williams",
            major: "Business Major",
            rating: 5,
            review: "I needed help with my business analysis case study, and EDUOriginals delivered beyond my expectations. The attention to detail and the quality of insights were outstanding."
        },
        {
            name: "David Chen",
            major: "Computer Science Student",
            rating: 4,
            review: "The programming assignment assistance I received was exactly what I needed. The code was well-documented and the explanations helped me understand the concepts better."
        }
    ];

    return (
        <section className="testimonials-section">
            <h2 className="section-title">What Our Students Say</h2>
            <div className="reviews-container">
                {reviewsData.map((item, index) => (
                    <ReviewCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;