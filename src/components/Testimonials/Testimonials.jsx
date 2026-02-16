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
            review: "I was drowning between clinical rotations and research deadlines. GradeBooster stepped in and handled all my coursework while I focused on patient care. The work was flawless  well-researched, properly cited, and delivered before every deadline. I wouldn’t have survived the semester without them."
        },
        {
            name: "Jessica Williams",
            major: "Business Major",
            rating: 5,
            review: "The business case study they delivered was genuinely better than anything I could have written myself. The market analysis was sharp, the recommendations were data-driven, and my professor actually complimented the depth of research. These guys don’t just do the work  they do it like they care about your grade as much as you do."
        },
        {
            name: "David Chen",
            major: "Computer Science Student",
            rating: 4,
            review: "My Java assignment came back with clean, well-documented code and inline comments that actually explained the logic. I didn’t just submit it. I learned from it. That’s what sets GradeBooster apart from other services I’ve tried. Only reason it’s not 5 stars is I wish they had a student discount."
        }
    ];

    return (
        <section className="testimonials-section">
            <h2 className="section-title">Hear It From Students Who’ve Been Where You Are</h2>
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