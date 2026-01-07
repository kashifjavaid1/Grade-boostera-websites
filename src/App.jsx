import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import WhatsAppWidget from './components/WhatsAppWidget/WhatsAppWidget.jsx';

import Home from './pages/Home.jsx';
import './index.css';
import About from './pages/About.jsx';
import Footer from './components/Footer/Footer.jsx';
import SubjectPage from './pages/Subject.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />
      <WhatsAppWidget />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subject" element={<SubjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}