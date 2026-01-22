import React, { useState } from 'react';
import './QuoteForm.css';
import { HiX } from 'react-icons/hi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const QuoteForm = ({ onClose }) => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
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
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (step === 1) {
            if (!formData.subjectArea || !formData.assignmentType) {
                return toast.warn("Please select subject and assignment type");
            }
        } else if (step === 2) {
            if (!formData.deadline) {
                return toast.warn("Please select a deadline");
            }
            if (!formData.academicLevel) {
                return toast.warn("Please select your academic level");
            }
        } else if (step === 4) {
            if (!formData.studentName.trim() || !formData.phoneNumber.trim()) {
                return toast.warn("Name and Phone are required");
            }
        }
        setStep(step + 1);
    };

    const handleSubmit = async () => {
        if (!formData.instructions.trim()) {
            return toast.warn("Please provide some instructions");
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
            const res = await axios.post("http://localhost:5000/api/requests/create", data, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (res.data.success) {
                toast.success("Submitted Successfully! 🎉");

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

                onClose();
                navigate("/");
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Submission failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="quote-container-wrapper">
            <div className="quote-modal-card">
                <button className="close-btn-x" onClick={onClose}>
                    <HiX size={22} />
                </button>

                <h2 className="main-title">Get Your Personalized Quote</h2>

                <div className="progress-bar-container">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <React.Fragment key={num}>
                            <div className={`circle-step ${step >= num ? 'active' : ''}`}>{num}</div>
                            {num < 5 && <div className={`line-step ${step > num ? 'active' : ''}`}></div>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="form-content-area">
                    {step === 1 && (
                        <div className="form-step-view">
                            <h4 className="section-heading">Basic Information</h4>
                            <div className="input-grid">
                                <div className="quote-inpute">
                                    <label>SUBJECT AREA*</label>
                                    <select name="subjectArea" className="field" onChange={handleChange} value={formData.subjectArea}>
                                        <option value="Mathematics">Mathematics</option>
                                        <option value="Physics">Physics</option>
                                        <option value="Business Management">Business Management</option>
                                    </select>
                                </div>
                                <div className="quote-inpute">
                                    <label>ASSIGNMENT TYPE*</label>
                                    <select name="assignmentType" className="field" onChange={handleChange} value={formData.assignmentType}>
                                        <option value="Homework">Homework</option>
                                        <option value="Essay (Any Type)">Essay (Any Type)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="form-step-view">
                            <h4 className="section-heading">Details & Deadline</h4>
                            <div className="input-grid">
                                <div className="quote-inpute">
                                    <label>DEADLINE*</label>
                                    <input
                                        type="date"
                                        name="deadline"
                                        min={today}
                                        value={formData.deadline}
                                        onChange={handleChange}
                                        className="field"
                                    />
                                </div>
                                <div className="quote-inpute">
                                    <label>ACADEMIC LEVEL*</label>
                                    <select name="academicLevel" className="field" onChange={handleChange} value={formData.academicLevel}>
                                        <option value="">Select Level</option>
                                        <option value="Undergraduate">Undergraduate</option>
                                        <option value="Masters">Masters</option>
                                    </select>
                                </div>
                                <div className="quote-inpute full-span">
                                    <label>WORD COUNT</label>
                                    <input name="wordCount" type="text" className="field" placeholder="e.g. 1500" value={formData.wordCount} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="form-step-view">
                            <h4 className="section-heading">Formatting</h4>
                            <div className="input-grid">
                                <div className="quote-inpute">
                                    <label>CITATION STYLE</label>
                                    <select name="citationStyle" className="field" value={formData.citationStyle} onChange={handleChange}>
                                        <option value="">Select style</option>
                                        <option value="APA">APA</option>
                                        <option value="MLA">MLA</option>
                                    </select>
                                </div>
                                <div className="quote-inpute">
                                    <label>FILE FORMAT</label>
                                    <select name="fileFormat" className="field" value={formData.fileFormat} onChange={handleChange}>
                                        <option value="">Select format</option>
                                        <option value=".docx">.docx</option>
                                        <option value=".pdf">.pdf</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="form-step-view">
                            <h4 className="section-heading">Contact Info</h4>
                            <div className="input-grid">
                                <div className="quote-inpute full-span">
                                    <label>FULL NAME*</label>
                                    <input name="studentName" type="text" className="field" placeholder="John Smith" value={formData.studentName} onChange={handleChange} />
                                </div>
                                <div className="quote-inpute full-span">
                                    <label>PHONE*</label>
                                    <input name="phoneNumber" type="text" className="field" placeholder="(123) 456-7890" value={formData.phoneNumber} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 5 && (
                        <div className="form-step-view">
                            <h4 className="section-heading">Upload & Instructions</h4>
                            <div className="quote-inpute full-span">
                                <label>INSTRUCTIONS*</label>
                                <textarea name="instructions" className="field textarea" placeholder="Details..." value={formData.instructions} onChange={handleChange}></textarea>
                            </div>
                            <div className="upload-container" onClick={() => document.getElementById('file-upload').click()}>
                                <div className="upload-box-dashed" style={{ cursor: 'pointer' }}>
                                    <span>{file ? '📄' : '📁'}</span>
                                    <p>{file ? file.name : "Attach File (Optional)"}</p>
                                    <input
                                        type="file"
                                        id="file-upload"
                                        style={{ display: 'none' }}
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    {step > 1 && <button className="btn-back" onClick={() => setStep(step - 1)}>← Back</button>}
                    <button
                        className="btn-next"
                        disabled={loading}
                        onClick={() => step < 5 ? handleNext() : handleSubmit()}
                    >
                        {loading ? "Submitting..." : (step === 5 ? "Send Request" : "Next →")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuoteForm;