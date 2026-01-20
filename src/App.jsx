import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import WhatsAppWidget from './components/WhatsAppWidget/WhatsAppWidget.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SubjectPage from './pages/Subject.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AuthForm from './components/AuthForm/AuthForm.jsx';
import RequestPage from './pages/RequestPage.jsx';
import { ToastContainer } from 'react-toastify';
export default function App() {
  const user = localStorage.getItem("user");
  const isAuthenticated = !!user;

  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <WhatsAppWidget />
      <Routes>
        {!isAuthenticated ? (
          <Route path="/*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/subject" element={<SubjectPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<AuthForm initialMode="login" />} />
                <Route path="/register" element={<AuthForm initialMode="register" />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
              <Footer />
            </>
          } />
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/request" element={<RequestPage />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}