import React, { useRef, useState } from 'react';
import './Reviews.css';
import QuoteForm from '../QuoteForm/QuoteForm';

const Reviews = () => {
    const scrollRef = useRef(null);
    const [openQuote, setOpenQuote] = useState(false);

    const expertsData = [
        {
            id: 1,
            name: "Kathryn J",
            img: "https://i.pravatar.cc/150?u=11",
            reviews: "180",
            orders: "260",
            description: "With over 15 years of experience teaching accounting at the university level, I understand exactly what professors look for. When I handle your coursework through GradeBooster, I treat every assignment like my own reputation is on the line, because it is.”"
        },
        {
            id: 2,
            name: "John Kear",
            img: "https://i.pravatar.cc/150?u=12",
            reviews: "180",
            orders: "260",
            description: "Ten years of teaching history taught me one thing, students don’t struggle because they’re not smart enough, they struggle because they’re stretched too thin. That’s why I joined GradeBooster. I bring the same academic rigor I use in my classroom to every assignment I complete."
        },
        {
            id: 3,
            name: "Theola Lieberman",
            img: "https://i.pravatar.cc/150?u=13",
            reviews: "180",
            orders: "260",
            description: "As a business instructor, I’ve graded thousands of papers, so I know exactly what earns top marks and what falls flat. When you hire me through GradeBooster, you’re getting someone who writes at the level that impresses professors, not just passes."
        },
        {
            id: 4,
            name: "Theola Lieberman",
            img: "https://i.pravatar.cc/150?u=13",
            reviews: "180",
            orders: "260",
            description: "As a dedicated business teacher, I've always believed in helping my students with the best resources. That's why I cannot recommend TakeMyOnlineClassUs highly enough! It won't be wrong to say they provide top-notch services."
        },
        {
            id: 5,
            name: "Theola Lieberman",
            img: "https://i.pravatar.cc/150?u=13",
            reviews: "180",
            orders: "260",
            description: "As a dedicated business teacher, I've always believed in helping my students with the best resources. That's why I cannot recommend TakeMyOnlineClassUs highly enough! It won't be wrong to say they provide top-notch services."
        },

    ];

    const scroll = (direction) => {
        if (direction === 'left') {
            scrollRef.current.scrollLeft -= 350;
        } else {
            scrollRef.current.scrollLeft += 350;
        }
    };

    return (
        <>
            <section className="reviews-section">
                <h2 className="reviews-title">Meet the Experts Behind Your Grades</h2>
                <p className="reviews-subtitle">Every expert on our team is hand-picked, credential-verified, and passionate about their subject. They don’t just complete your work, they make sure it stands out.</p>

                <div className="slider-wrapper">
                    <button className="slide-arrow left-arrow" onClick={() => scroll('left')}>❮</button>

                    <div className="reviews-slider" ref={scrollRef}>
                        {expertsData.map((expert) => (
                            <div className="expert-card" key={expert.id}>
                                <div className="expert-header">
                                    <img src={expert.img} alt={expert.name} className="expert-avatar" />
                                    <div className="expert-meta">
                                        <h4>{expert.name}</h4>
                                        <div className="expert-stars">
                                            <span>★★★★★</span>
                                            <span className="review-count">{expert.reviews} Reviews</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="expert-body">
                                    <strong>{expert.orders} Completed Orders</strong> {expert.description}
                                </p>
                                <button className="hire-now-btn" onClick={() => setOpenQuote(true)}>Hire Now</button>
                            </div>
                        ))}
                    </div>

                    <button className="slide-arrow right-arrow" onClick={() => scroll('right')}>❯</button>
                </div>
            </section>


            {openQuote && <QuoteForm onClose={() => setOpenQuote(false)} />}
        </>
    );

};

export default Reviews;