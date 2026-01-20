import React, { useState } from 'react';
import './RequestForm.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MultiStepForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/requests/create", formData);

            if (res.data.success) {
                toast.success("Request Submitted Successfully! 🎉");
                navigate("/");
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Submission failed");
            console.log(err);
        }
    };

    return (
        <div className='request-form-main-container'>
            <h3 className='request-form-heading'>Request Academic Assistance</h3>
            <div className="request-form-card">
                {step === 1 ? (
                    <>
                        <div className="form-header">
                            <h2 className="form-title">Start Your Request</h2>
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
                                    className="form-input select-highlight"
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
                                <span className="check-icon">✓</span>
                                <p>100% Confidential - Your information is secure with us. We respect your privacy.</p>
                            </div>
                            <button className="continue-btn" onClick={() => setStep(2)}>
                                Continue <span>→</span>
                            </button>
                        </div>
                    </>
                ) : (
                    <>
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
                                    <option value="">Select academic level</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="Masters">Masters</option>
                                </select>
                            </div>

                            <div className="extra-details-box full-width">
                                <p className="section-subtitle">Essay/written work Details</p>
                                <div className="inner-grid">
                                    <div className="form-group">
                                        <label>Citation Style</label>
                                        <select
                                            name="citationStyle"
                                            value={formData.citationStyle}
                                            onChange={handleChange}
                                            className="form-input"
                                        >
                                            <option value="">Select citation style</option>
                                            <option value="APA">APA</option>
                                            <option value="MLA">MLA</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Required File Format</label>
                                        <select
                                            name="fileFormat"
                                            value={formData.fileFormat}
                                            onChange={handleChange}
                                            className="form-input"
                                        >
                                            <option value="">Select format</option>
                                            <option value=".docx">.docx</option>
                                            <option value=".pdf">.pdf</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>Assignment Instructions</label>
                                <textarea
                                    name="instructions"
                                    value={formData.instructions}
                                    onChange={handleChange}
                                    className="form-input"
                                    style={{ height: '100px' }}
                                    placeholder="Please provide any specific requirements or instructions for your assignment..."
                                />
                            </div>
                        </div>

                        <div className="upload-container">
                            <label className="upload-label">Attach Files (Optional)</label>
                            <div className="upload-box">
                                <div className="upload-icon-cloud">☁️</div>
                                <p>Click to upload or <strong>drag and drop</strong></p>
                                <span>PDF, Word, Excel, PowerPoint, etc.</span>
                                <input type="file" className="file-input-hidden" multiple />
                            </div>
                        </div>

                        <div className="form-footer">
                            <button className="back-link" onClick={() => setStep(1)}>← Back</button>
                            <button
                                type="button"
                                className="continue-btn submit-btn"
                                onClick={handleSubmit}
                            >
                                Submit Request
                            </button>
                        </div>

                        <div className="confidential-bottom">
                            <div className="confidential-tag">
                                <span className="check-icon">✓</span>
                                <p>100% Confidential - Your information is secure with us. We respect your privacy.</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MultiStepForm;
