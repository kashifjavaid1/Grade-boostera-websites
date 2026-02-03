import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import './Faq.css';

const FAQ_DATA = [
    {
        id: 1,
        question: "How does EDUOriginals ensure the quality of work?",
        answer: "Our quality assurance process involves multiple layers of review. Each project is handled by a subject matter expert and then cross-checked for academic accuracy, formatting, and originality before final delivery."
    },
    {
        id: 2,
        question: "What if I'm not satisfied with the work I receive?",
        answer: "Your satisfaction is our priority. If you're not completely satisfied with the delivered work, you can request revisions within our revision policy period. Our experts will make the necessary changes according to your feedback at no additional cost."
    },
    {
        id: 3,
        question: "How do you maintain confidentiality?",
        answer: "We use end-to-end encryption for all communications. Your personal details and project information are never shared with third parties, ensuring 100% privacy and security at all times."
    },
    {
        id: 4,
        question: "What subjects and academic levels do you cover?",
        answer: "We cover a vast range of subjects from Nursing and Engineering to Law and Business, supporting students from Undergraduate all the way to PhD levels with specialized experts for each field."
    },
    {
        id: 5,
        question: "How far in advance should I place my order?",
        answer: "While we can handle urgent deadlines (as short as 6-12 hours), we recommend placing orders at least 3-5 days in advance for complex dissertations or long projects to ensure maximum quality."
    },
    {
        id: 6,
        question: "Can I communicate directly with my assigned expert?",
        answer: "Yes, our platform allows for seamless communication. You can provide additional instructions, track progress, and ask questions directly to ensure the work aligns perfectly with your expectations."
    },
    {
        id: 7,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards, PayPal, and secure bank transfers. All transactions are processed through encrypted gateways to ensure your financial data stays protected."
    },
    {
        id: 8,
        question: "Is using academic assistance services ethical?",
        answer: "Our services are designed as educational aids to help students better understand complex topics and improve their own academic skills. We provide model papers and research assistance intended for reference and learning purposes."
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