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

        if (!formData.studentName || !formData.phoneNumber) {
            return toast.warn("Please fill required fields");
        }

        setLoading(true);
        const data = new FormData();

        if (file) {
            data.append("file", file);
        }

        data.append("subjectArea", formData.subjectArea);
        data.append("assignmentType", formData.assignmentType);
        data.append("studentName", formData.studentName);
        data.append("phoneNumber", formData.phoneNumber);
        data.append("deadline", formData.deadline);
        data.append("wordCount", formData.wordCount || "");
        data.append("academicLevel", formData.academicLevel);
        data.append("citationStyle", formData.citationStyle || "");
        data.append("fileFormat", formData.fileFormat || "");
        data.append("instructions", formData.instructions || "");

        try {
            const res = await axios.post("http://localhost:5000/api/requests/create", data, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (res.data.success) {
                toast.success("Submitted Successfully! 🎉");
                navigate("/");
            }
        } catch (err) {
            console.log(err);
            toast.error(err.response?.data?.message || "Submission failed");
        } finally {
            setLoading(false); // 3. Loader stop (Success ho ya Error)
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
                            <div className="upload-box" onClick={() => document.getElementById('fileInput').click()}>
                                <div className="upload-icon-cloud">
                                    {file ? '📄' : '☁️'}
                                </div>

                                {file ? (
                                    <div className="file-info">
                                        <p style={{ color: '#2ecc71', fontWeight: 'bold' }}>Selected: {file.name}</p>
                                        <span style={{ fontSize: '12px', color: '#666' }}>
                                            {(file.size / 1024).toFixed(2)} KB
                                        </span>
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); setFile(null); }}
                                            style={{ marginLeft: '10px', color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <p>Click to upload or <strong>drag and drop</strong></p>
                                        <span>PDF, Word, Excel, PowerPoint, etc.</span>
                                    </>
                                )}

                                <input
                                    id="fileInput"
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="file-input-hidden"
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>

                        <div className="form-footer">
                            <button className="back-link" onClick={() => setStep(1)}>← Back</button>
                            <button
                                type="button"
                                className="continue-btn submit-btn"
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span class="loader"></span>
                                ) : null}
                                {loading ? "Submitting..." : "Submit Request"}
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
