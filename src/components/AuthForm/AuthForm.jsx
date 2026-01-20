import React, { useState } from 'react';
import './AuthForm.css';
import { HiMail, HiLockClosed, HiUser } from "react-icons/hi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

const AuthForm = ({ initialMode = 'login' }) => {
    const [isLogin, setIsLogin] = useState(initialMode === 'login');
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', password: ''
    });
    const navigate = useNavigate();

    const toggleMode = () => setIsLogin(!isLogin);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = isLogin
                ? "http://localhost:5000/api/auth/login"
                : "http://localhost:5000/api/auth/register";

            const payload = isLogin
                ? { email: formData.email, password: formData.password }
                : formData;

            const res = await axios.post(url, payload, {
                withCredentials: true
            });

            if (isLogin) {
                localStorage.setItem("user", JSON.stringify(res.data));
                toast.success("Login successful 🎉");

                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 800);
            } else {
                toast.success("Account created successfully 🚀");
                setIsLogin(true);
            }

        } catch (err) {
            const msg = err.response?.data?.message || "Something went wrong";
            toast.error(msg);
        }
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