import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(2);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <a
            href="https://api.whatsapp.com/send/?phone=923481005573&text=Hi, I need help with my online class."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-fixed-btn"
        >
            {count > 0 && <div className="whatsapp-badge">{count}</div>}

            <div className="whatsapp-content">
                <FaWhatsapp className="whatsapp-icon" />
                <span>WHATSAPP NOW</span>
            </div>
        </a>
    );
};

export default WhatsAppWidget;