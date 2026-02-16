import React from 'react';
import './Services.css';
import { FaFileAlt, FaFileSignature, FaUserEdit, FaComments } from "react-icons/fa";

const Services = () => {
    const servicesData = [
        {
            title: "Assignments",
            icon: <FaFileAlt />,
            text: "Late submissions? That word doesn’t exist in our vocabulary. Every assignment is researched, written, and submitted before your deadline, no excuses, no extensions needed. Our 24/7 team makes sure you never miss a single due date, no matter how tight the turnaround."
        },
        {
            title: "Quizzes",
            icon: <FaFileSignature />,
            text: "Weekly quizzes and pop assessments can make or break your grade. Our subject experts stay ahead of your course schedule, tackling every quiz with precision so your scores stay consistently high throughout the entire semester."
        },
        {
            title: "Exams",
            icon: <FaUserEdit />,
            text: "Midterms, finals, proctored or timed, it doesn’t matter. Our exam specialists have seen every format and every platform. They work under pressure so you don’t have to, delivering the scores that move your GPA in the right direction."
        },
        {
            title: "Discussions",
            icon: <FaComments />,
            text: "Discussion boards count more than most students realize. Our team crafts thoughtful, well-argued posts and responses that show genuine engagement with the material, the kind that professors notice and reward with full participation marks."
        }
    ];

    return (
        <section className="services-section">
            <h2 className="services-title">We Handle Every Part of Your Online Class; Not Just the Easy Stuff</h2>
            <p className="services-subtitle">
                Your online class isn’t just one exam, it’s a marathon of assignments, quizzes, group posts, and high-stakes tests. We take care of all of it, start to finish, so nothing slips through the cracks.
            </p>

            <div className="services-container">
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="icon-wrapper">
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <div className="underline"></div>
                        <p>{service.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;