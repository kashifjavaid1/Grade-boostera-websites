import React, { useRef } from 'react';
import './Reviews.css';

const Reviews = () => {
    const scrollRef = useRef(null);

    // Data Array: Jitne marzi experts add karein
    const expertsData = [
        {
            id: 1,
            name: "Kathryn J",
            img: "https://i.pravatar.cc/150?u=11",
            reviews: "180",
            orders: "260",
            description: "As an accounting teacher with 15+ years of experience, I must say that if you truly want a service that makes you stand out in your class, then TakeMyOnlineClassUs should be your first priority."
        },
        {
            id: 2,
            name: "John Kear",
            img: "https://i.pravatar.cc/150?u=12",
            reviews: "180",
            orders: "260",
            description: "I have been teaching history to students for the past ten years, and I must say that TakeMyOnlineClassUs is the best at what they do. I would highly recommend their do my online class help service."
        },
        {
            id: 3,
            name: "Theola Lieberman",
            img: "https://i.pravatar.cc/150?u=13",
            reviews: "180",
            orders: "260",
            description: "As a dedicated business teacher, I've always believed in helping my students with the best resources. That's why I cannot recommend TakeMyOnlineClassUs highly enough! It won't be wrong to say they provide top-notch services."
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
        <section className="reviews-section">
            <h2 className="reviews-title">Certified Professionals For Every Subject</h2>
            <p className="reviews-subtitle">Our certified professionals cover every little detail in our online classes.</p>

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
                            <button className="hire-now-btn">Hire Now</button>
                        </div>
                    ))}
                </div>

                <button className="slide-arrow right-arrow" onClick={() => scroll('right')}>❯</button>
            </div>
        </section>
    );
};

export default Reviews;