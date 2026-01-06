import React from 'react';
import './Services.css';
import { FaFileAlt, FaFileSignature, FaUserEdit, FaComments } from "react-icons/fa";

const Services = () => {
    const servicesData = [
        {
            title: "Assignments",
            icon: <FaFileAlt />,
            text: "Late submissions? Not on our watch. Our assignment submission service with 24/7 student support doesn’t just keep you up, we make sure you never miss a beat."
        },
        {
            title: "Quizzes",
            icon: <FaFileSignature />,
            text: "Our online tutors don’t just sit back and watch, they take the wheel when it comes to quizzes and modules. They give quizzes and small assessments every now and then, so you stay on track."
        },
        {
            title: "Exams",
            icon: <FaUserEdit />,
            text: "Our subject matter experts help you learn time-bound exam strategies through interactive and data-driven progress monitoring."
        },
        {
            title: "Discussions",
            icon: <FaComments />,
            text: "Stuck in a thread or lost in a post? Our team is always active on discussion forums and weighs in with smart, to-the-point replies."
        }
    ];

    return (
        <section className="services-section">
            <h2 className="services-title">Assignments, Quizzes, Exams, and Discussions</h2>
            <p className="services-subtitle">
                Assignments, quizzes, and group discussions play a very important role in preparing you for your exams.
                With our online class help service, we give you all these time to time to help you improve your grades.
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