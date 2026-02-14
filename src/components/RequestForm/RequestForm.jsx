import React, { useState } from 'react';
import './RequestForm.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MultiStepForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const today = new Date().toISOString().split('T')[0];

    const [formData, setFormData] = useState({
        subjectArea: 'Mathematics',
        assignmentType: 'Homework',
        studentName: '',
        phoneNumber: '',
        deadline: '',
        wordCount: '',
        academicLevel: '',
        citationStyle: '',
        fileFormat: '',
        instructions: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextStep = () => {
        if (!formData.studentName.trim()) {
            toast.warn("Please enter your name.");
            return;
        }
        if (!formData.phoneNumber.trim()) {
            toast.warn("Please enter your phone number.");
            return;
        }
        setStep(2);
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        if (!formData.deadline) {
            toast.warn("Deadline is required.");
            return;
        }
        if (!formData.academicLevel) {
            toast.warn("Academic level is required.");
            return;
        }
        if (!formData.instructions.trim()) {
            toast.warn("Assignment instructions are required.");
            return;
        }

        setLoading(true);
        const data = new FormData();

        if (file) {
            data.append("file", file);
        }

        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value || "");
        });

        try {
            const res = await axios.post(
                "http://localhost:5000/api/requests/create",
                data,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            if (res.data.success) {
                toast.success("Request submitted successfully! 🎉");

                setFormData({
                    subjectArea: 'Mathematics',
                    assignmentType: 'Homework',
                    studentName: '',
                    phoneNumber: '',
                    deadline: '',
                    wordCount: '',
                    academicLevel: '',
                    citationStyle: '',
                    fileFormat: '',
                    instructions: ''
                });

                setFile(null);
                setStep(1);
            }
        } catch (err) {
            console.error("Submission Error:", err);
            toast.error(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='request-form-main-container'>
                <h3 className='request-form-heading'> Get Started in 60 Seconds</h3>
                <p className='request-subtitle'>Tell us what you need and we’ll match you with the perfect expert.</p>
                <div className="request-form-card">

                    {step === 1 ? (
                        <div className="step-container">
                            <div className="form-header">
                                <h2 className="form-title"></h2>
                                <div className="form-dots">
                                    <span className="dot yellow"></span>
                                    <span className="dot gray"></span>
                                </div>
                            </div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Subject Area*</label>
                                    <select
                                        name="subjectArea"
                                        value={formData.subjectArea}
                                        onChange={handleChange}
                                        className="form-input"
                                    >
                                        <option value="Mathematics">Mathematics</option>
                                        <option value="Physics">Physics</option>
                                        <option value="Business Management">Business Management</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Assignment Type*</label>
                                    <select
                                        name="assignmentType"
                                        value={formData.assignmentType}
                                        onChange={handleChange}
                                        className="form-input"
                                    >
                                        <option value="Homework">Homework</option>
                                        <option value="Essay (Any Type)">Essay (Any Type)</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Your Name*</label>
                                    <input
                                        type="text"
                                        name="studentName"
                                        value={formData.studentName}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="John Smith"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Phone Number*</label>
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="(123) 456-7890"
                                    />
                                </div>
                            </div>

                            <div className="form-footer">
                                <div className="confidential-tag">

                                </div>
                                <button className="continue-btn" onClick={handleNextStep}>
                                    Continue  <span>→</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="step-container">
                            <div className="form-header">
                                <h2 className="form-title">Assignment Details</h2>
                                <div className="form-dots">
                                    <span className="dot yellow"></span>
                                    <span className="dot yellow"></span>
                                </div>
                            </div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Deadline*</label>
                                    <input
                                        type="date"
                                        name="deadline"
                                        min={today}
                                        value={formData.deadline}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Word Count (Optional)</label>
                                    <input
                                        type="text"
                                        name="wordCount"
                                        value={formData.wordCount}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="e.g., 1500"
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Academic Level*</label>
                                    <select
                                        name="academicLevel"
                                        value={formData.academicLevel}
                                        onChange={handleChange}
                                        className="form-input"
                                    >
                                        <option value="">Select level</option>
                                        <option value="Undergraduate">Undergraduate</option>
                                        <option value="Masters">Masters</option>
                                    </select>
                                </div>

                                <div className="form-group full-width">
                                    <label>Instructions*</label>
                                    <textarea
                                        name="instructions"
                                        value={formData.instructions}
                                        onChange={handleChange}
                                        className="form-input"
                                        style={{ height: '100px' }}
                                        placeholder="Enter requirements..."
                                    />
                                </div>
                            </div>

                            <div className="upload-container">
                                <label className="upload-label">Attach Files (Optional)</label>
                                <div className="upload-box" onClick={() => document.getElementById('fileInput').click()}>
                                    <div className="upload-icon-cloud">
                                        {file ? '📄' : '☁️'}
                                    </div>
                                    {file ? (
                                        <p style={{ color: '#2ecc71' }}>{file.name}</p>
                                    ) : (
                                        <p>Click to upload files</p>
                                    )}
                                    <input
                                        id="fileInput"
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </div>
                            </div>

                            <div className="form-footer">
                                <button className="back-link" onClick={() => setStep(1)}>← Back</button>
                                <button
                                    className="continue-btn submit-btn"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                >
                                    {loading ? <span class="loader"></span> : "Submit Request"}
                                </button>
                            </div>
                        </div>

                    )}
                    <div className="confidential-bottom">

                        <div className="confidential-tag">

                            <span className="check-icon">✓</span>

                            <p>🔒 100% Confidential. Your information is protected with end-to-end encryption. We never share your details.</p>

                        </div>

                    </div>
                </div>
            </div>



        </>
    );
};

export default MultiStepForm;