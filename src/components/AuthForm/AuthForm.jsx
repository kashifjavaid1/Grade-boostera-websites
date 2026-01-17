import React, { useState } from 'react';
import './AuthForm.css';
import { HiMail, HiLockClosed, HiUser } from "react-icons/hi";

const AuthForm = ({ initialMode = 'login' }) => {
    const [isLogin, setIsLogin] = useState(initialMode === 'login');
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', password: ''
    });

    const toggleMode = () => setIsLogin(!isLogin);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Data to MongoDB:", formData);
        // Yahan aapka axios.post ya fetch logic aayega
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-glass-card">
                <div className="auth-header">
                    <h2>{isLogin ? "Welcome Back!" : "Create Account"}</h2>
                    <p>{isLogin ? "Login to manage your assignments" : "Join us for distinction grades"}</p>
                </div>

                <form className="auth-main-form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="name-row animate-slide">
                            <div className="input-box">
                                <HiUser className="icon" />
                                <input name="firstName" type="text" placeholder="First Name" required onChange={handleChange} />
                            </div>
                            <div className="input-box">
                                <HiUser className="icon" />
                                <input name="lastName" type="text" placeholder="Last Name" required onChange={handleChange} />
                            </div>
                        </div>
                    )}

                    <div className="input-box">
                        <HiMail className="icon" />
                        <input name="email" type="email" placeholder="Email Address" required onChange={handleChange} />
                    </div>

                    <div className="input-box">
                        <HiLockClosed className="icon" />
                        <input name="password" type="password" placeholder="Password (Min 8 chars)" required minLength="8" onChange={handleChange} />
                    </div>

                    <button type="submit" className="submit-btn">
                        {isLogin ? "Login Now" : "Register Now"}
                    </button>
                </form>


            </div>
        </div>
    );
};

export default AuthForm;