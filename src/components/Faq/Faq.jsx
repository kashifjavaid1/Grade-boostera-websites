import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import './Faq.css';

const FAQ_DATA = [
    {
        id: 1,
        question: "How does GradeBooster ensure the quality of work?",
        answer: "Every order is handled by a degree-holding expert who specializes in your exact subject. Before delivery, each submission goes through our multi-step quality assurance process including plagiarism checks, formatting reviews, and accuracy verification. We don’t cut corners, and it shows in the grades."
    },
    {
        id: 2,
        question: "What if I’m not satisfied with the work I receive?",
        answer: "Your satisfaction is non-negotiable. If the work doesn’t meet your expectations, we offer unlimited free revisions. If we still can’t get it right, you’re entitled to a full refund under our money-back guarantee. We’re not happy until you are."
    },
    {
        id: 3,
        question: "How do you maintain confidentiality?",
        answer: " Privacy is the foundation of everything we do. All communications are encrypted, we never store your academic credentials beyond what’s needed, and our experts sign strict non-disclosure agreements. In five years and 10,000+ orders, we’ve never had a single privacy breach."
    },
    {
        id: 4,
        question: "What subjects and academic levels do you cover?",
        answer: "We cover 100+ subjects across every academic level from freshman courses to doctoral research. Whether it’s nursing, business, computer science, mathematics, psychology, engineering, or anything in between, we have a verified specialist ready to help."
    },
    {
        id: 5,
        question: "Can I communicate directly with my assigned expert?",
        answer: " Absolutely. We encourage direct communication so your expert understands your voice, your professor’s style, and your specific requirements. You can message them anytime through our secure platform or via WhatsApp through your advisor."
    },
    {
        id: 6,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard), PayPal, Zelle, CashApp, Venmo, and bank transfers. We also offer flexible payment plans for larger orders so cost is never a barrier to getting the help you need."
    },
    {
        id: 7,
        question: "Is using academic assistance services ethical?",
        answer: "GradeBooster operates as a tutoring and academic support service. Our work is designed to serve as a reference and learning tool. Many students use our deliverables to understand complex concepts, improve their writing, and build stronger study habits. How you use the material is ultimately your decision."
    }
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section py-80">
            <div className="container">
                <h2 className="section-title text-center">Frequently Asked Questions</h2>

                <div className="faq-wrapper">
                    {FAQ_DATA.map((item, index) => (
                        <div
                            key={item.id}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span>{item.question}</span>
                                {activeIndex === index ? (
                                    <FiChevronUp className="faq-icon" />
                                ) : (
                                    <FiChevronDown className="faq-icon" />
                                )}
                            </button>

                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;