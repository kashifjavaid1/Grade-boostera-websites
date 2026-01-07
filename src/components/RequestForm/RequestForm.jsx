import React, { useState } from 'react';
import './RequestForm.css';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);

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
                                <select className="form-input select-highlight">
                                    <option>Mathematics</option>
                                    <option>Physics</option>
                                    <option>Business Management</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Assignment Type*</label>
                                <select className="form-input">
                                    <option>Homework</option>
                                    <option>Essay (Any Type)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Your Name*</label>
                                <input type="text" className="form-input" placeholder="John Smith" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number*</label>
                                <input type="text" className="form-input" placeholder="(123) 456-7890" />
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
                                <input type="date" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label>Word Count (Optional)</label>
                                <input type="text" className="form-input" placeholder="e.g., 1500" />
                            </div>

                            <div className="form-group full-width">
                                <label>Academic Level*</label>
                                <select className="form-input">
                                    <option>Select academic level</option>
                                    <option>Undergraduate</option>
                                    <option>Masters</option>
                                </select>
                            </div>

                            <div className="extra-details-box full-width">
                                <p className="section-subtitle">Essay/written work Details</p>
                                <div className="inner-grid">
                                    <div className="form-group">
                                        <label>Citation Style</label>
                                        <select className="form-input">
                                            <option>Select citation style</option>
                                            <option>APA</option>
                                            <option>MLA</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Required File Format</label>
                                        <select className="form-input">
                                            <option>Select format</option>
                                            <option>.docx</option>
                                            <option>.pdf</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>Assignment Instructions</label>
                                <textarea className="form-input" style={{ height: '100px' }} placeholder="Please provide any specific requirements or instructions for your assignment..."></textarea>
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
                            <button className="continue-btn submit-btn">Submit Request</button>
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