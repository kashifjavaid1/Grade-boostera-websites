import React, { useState } from 'react';
import {
    FaSearch,
    FaFilter,
    FaFlask,
    FaBook,
    FaBriefcase,
    FaCog,
    FaStethoscope,
    FaGavel,
    FaPalette,
    FaLaptopCode,
    FaMicroscope
} from 'react-icons/fa';


const SubjectPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCat, setActiveCat] = useState("All");

    const categories = ["All", "Sciences", "Humanities", "Business", "Engineering", "Medicine", "Law", "Arts", "Computer Science"];

    const allSubjects = [
        {
            id: 1,
            title: "Biology",
            category: "Sciences",
            icon: <FaMicroscope />,
            desc: "From molecular biology to ecosystems, get expert help with all biology topics."
        },
        {
            id: 2,
            title: "Chemistry",
            category: "Sciences",
            icon: <FaFlask />,
            desc: "Expert assistance with organic, inorganic, physical chemistry and biochemistry."
        },
        {
            id: 3,
            title: "Physics",
            category: "Sciences",
            icon: <FaFlask />,
            desc: "From classical mechanics to quantum physics, our experts can help with any topic."
        },
        {
            id: 4,
            title: "Literature",
            category: "Humanities",
            icon: <FaBook />,
            desc: "Analysis, critical essays, and research on all literary genres and periods."
        },
        {
            id: 5,
            title: "Business Management",
            category: "Business",
            icon: <FaBriefcase />,
            desc: "Strategic management, operations, marketing, and organizational behavior."
        },
        {
            id: 6,
            title: "Engineering",
            category: "Engineering",
            icon: <FaCog />,
            desc: "Civil, mechanical, electrical, and chemical engineering assistance."
        },
        {
            id: 7,
            title: "Computer Science",
            category: "Computer Science",
            icon: <FaLaptopCode />,
            desc: "Civil, mechanical, electrical, and chemical engineering assistance."
        }
    ];

    const filteredSubjects = allSubjects.filter(sub => {
        const matchesSearch = sub.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCat = activeCat === "All" || sub.category === activeCat;
        return matchesSearch && matchesCat;
    });

    return (
        <div className="subject-container">
            <div className="subject-hero">
                <h1>Academic Subjects</h1>
                <p>Browse our comprehensive list of subjects where we offer expert academic assistance.</p>

            </div>
            <div className="search-wrapper">
                <div className="search-bar-main">
                    <FaSearch className="s-icon" />
                    <input
                        type="text"
                        placeholder="Search for a subject..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn-filter"><FaFilter /> Filter</button>
                    <button className="btn-search">Search</button>
                </div>
            </div>
            <div className="browse-section">
                <h2 className='browse-heading'>Browse All Subjects</h2>
                <div className="category-list">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCat(cat)}
                            className={`cat-btn ${activeCat === cat ? "active" : ""}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="subject-grid-full">
                    {filteredSubjects.map((sub) => (
                        <div key={sub.id} className="subject-card-full">
                            <div className="card-header">
                                <span className="icon-gold">{sub.icon}</span>
                                <h3>{sub.title}</h3>
                            </div>
                            <p className="card-desc">{sub.desc}</p>
                            <div className="card-footer">
                                <span className="cat-label">{sub.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubjectPage;