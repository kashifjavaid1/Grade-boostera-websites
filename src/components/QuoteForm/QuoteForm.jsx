import React, { useState } from 'react';
import './QuoteForm.css';
import { HiX } from 'react-icons/hi';

const QuoteForm = () => {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);


    const [formData, setFormData] = useState({
        serviceType: '', subject: '',
        deadline: '', wordCount: '', academicLevel: 'Undergraduate',
        citationStyle: 'APA', fileFormat: 'MS Word (.docx)',
        userName: '', userEmail: '', userPhone: '',
        instructions: '', files: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    if (!isOpen) return null;
    return (
        <div className="quote-container-wrapper">
            <div className="quote-modal-card">
                <button className="close-btn-x" onClick={() => setIsOpen(false)}>
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
                            <h4 className="section-heading">What do you need help with?</h4>
                            <div className="input-grid">
                                <div className="quote-inpute">
                                    <label>SERVICE TYPE</label>
                                    <select name="serviceType" className="field" onChange={handleChange} value={formData.serviceType}>
                                        <option value="">Select Service</option>
                                        <option>Online Class Help</option>
                                        <option>Assignment Writing</option>
                                    </select>
                                </div>
                                <div className="quote-inpute">
                                    <label>SUBJECT AREA</label>
                                    <input name="subject" type="text" className="field" placeholder="e.g. Nursing, Law" onChange={handleChange} value={formData.subject} />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="form-step-view">
                            <h4 className="section-heading">Deadline & Academic Level</h4>
                            <div className="input-grid">
                                <div className="quote-inpute"><label>DEADLINE</label><input name="deadline" type="date" className="field" onChange={handleChange} /></div>
                                <div className="quote-inpute"><label>ACADEMIC LEVEL</label>
                                    <select name="academicLevel" className="field" onChange={handleChange} value={formData.academicLevel}>
                                        <option>High School</option><option>Undergraduate</option><option>Master's</option>
                                    </select>
                                </div>
                                <div className="quote-inpute full-span"><label>WORD COUNT</label><input name="wordCount" type="number" className="field" placeholder="2500" onChange={handleChange} /></div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="form-step-view">
                            <h4 className="section-heading">Specific Requirements</h4>
                            <div className="input-grid">
                                <div className="quote-inpute"><label>CITATION STYLE</label><select name="citationStyle" className="field" onChange={handleChange}><option>APA</option><option>MLA</option></select></div>
                                <div className="quote-inpute"><label>FILE FORMAT</label><select name="fileFormat" className="field" onChange={handleChange}><option>MS Word</option><option>PDF</option></select></div>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="form-step-view">
                            <h4 className="section-heading">Contact Information</h4>
                            <div className="input-grid">
                                <div className="quote-inpute full-span"><label>FULL NAME</label><input name="userName" type="text" className="field" placeholder="Your Name" onChange={handleChange} /></div>
                                <div className="quote-inpute"><label>EMAIL</label><input name="userEmail" type="email" className="field" placeholder="email@example.com" onChange={handleChange} /></div>
                                <div className="quote-inpute"><label>PHONE</label><input name="userPhone" type="text" className="field" placeholder="+1..." onChange={handleChange} /></div>
                            </div>
                        </div>
                    )}

                    {step === 5 && (
                        <div className="form-step-view">
                            <h4 className="section-heading">Final Touches</h4>
                            <div className="quote-inpute full-span">
                                <label>DETAILED INSTRUCTIONS</label>
                                <textarea name="instructions" className="field textarea" placeholder="Write any specific requirements here..." onChange={handleChange}></textarea>
                            </div>
                            <div className="upload-container">
                                <div className="upload-box-dashed">
                                    <span className="icon-cloud">📁</span>
                                    <p>Drop files here or <strong>Browse</strong></p>
                                    <input type="file" multiple className="file-input-hidden" onChange={(e) => setFormData({ ...formData, files: e.target.files })} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    {step > 1 && <button className="btn-back" onClick={() => setStep(step - 1)}>← Back</button>}
                    <button className="btn-next" onClick={() => step < 5 ? setStep(step + 1) : alert("Form Submitted!")}>
                        {step === 5 ? "Send My Quote" : "Next Step →"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuoteForm;