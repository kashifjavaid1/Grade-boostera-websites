import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import heroGirl from './assets/take-online-class.webp';
import tool_logo_1 from './assets/populi-logo.webp';
import tool_logo_2 from './assets/new_populi_logo-1.svg';
import tool_logo_3 from './assets/BB-logo.webp';
import tool_logo_4 from './assets/logo090-1.svg';
import tool_logo_5 from './assets/images-1.svg';

import { FiPhoneCall } from "react-icons/fi";
import './index.css';
import WhatsAppWidget from './components/WhatsAppWidget/WhatsAppWidget.jsx';
export default function App() {
  return (
    <>
      <Navbar />
      <WhatsAppWidget />
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">
              Take My Online Class <br />
              for Me with <span className="highlight">Distinction Grades</span>
            </h1>
            <p className="hero-description">
              TakeMyOnlineClassUS is a leading platform that offers to handle student’s online classes with proficiency. Busy students frequently seeking assistance and ask “Can I pay someone to take my online class”, we are here to exactly resolve your query. We have designed our services to lighten the burden and ensure guaranteed academic success.
            </p>
            <div className="hero-buttons">
              <button className="btn-talk">
                <FiPhoneCall className="btn-icon" /> Talk to expert
              </button>
              <button className="btn-quote">Get A Quote</button>
            </div>
          </div>

          <div className="hero-right">
            <img src={heroGirl} alt="Student" className="hero-image" />
          </div>
        </div>
      </section>
      <section className="logos-section">
        <div className="logos-container">
          <img src={tool_logo_1} alt="Populi" className="tool-logo" />
          <img src={tool_logo_2} alt="Canvas" className="tool-logo" />
          <img src={tool_logo_3} alt="Blackboard" className="tool-logo" />
          <img src={tool_logo_4} alt="Moodle" className="tool-logo" />
          <img src={tool_logo_5} alt="Google Classroom" className="tool-logo" />
        </div>
      </section>
    </>
  );
}