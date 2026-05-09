import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        // Phone validation (optional but validate if provided)
        if (formData.phone && formData.phone.trim()) {
            const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
            if (!phoneRegex.test(formData.phone)) {
                newErrors.phone = 'Please enter a valid phone number';
            }
        }

        // Subject validation
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Create FormData object for FormSubmit
            const submitData = new FormData();
            submitData.append('name', formData.name);
            submitData.append('email', formData.email);
            submitData.append('phone', formData.phone);
            submitData.append('subject', formData.subject);
            submitData.append('message', formData.message);

            // Send via FormSubmit
            const response = await fetch('https://formsubmit.co/ajax/fathumanafra5@gmail.com', {
                method: 'POST',
                body: submitData
            });

            if (response.ok) {
                console.log('Email sent successfully');
                setSubmitStatus('success');
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            } else {
                throw new Error('Failed to send email');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">
                            <i className='bx bx-user'></i> Your Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                            placeholder="John Doe"
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            <i className='bx bx-envelope'></i> Your Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                            placeholder="john@example.com"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone">
                            <i className='bx bx-phone'></i> Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? 'error' : ''}
                            placeholder="+94 77 123 4567"
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">
                            <i className='bx bx-info-circle'></i> Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={errors.subject ? 'error' : ''}
                            placeholder="Project Inquiry"
                        />
                        {errors.subject && <span className="error-message">{errors.subject}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">
                        <i className='bx bx-message-dots'></i> Your Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error' : ''}
                        rows="6"
                        placeholder="Tell me about your project..."
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                {submitStatus === 'success' && (
                    <div className="alert alert-success">
                        <i className='bx bx-check-circle'></i>
                        Thank you for your message! I'll get back to you soon.
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="alert alert-error">
                        <i className='bx bx-error-circle'></i>
                        Oops! Something went wrong. Please try again later.
                    </div>
                )}

                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <i className='bx bx-loader-alt bx-spin'></i>
                            Sending...
                        </>
                    ) : (
                        <>
                            <i className='bx bx-send'></i>
                            Send Message
                        </>
                    )}
                </button>
            </form>

            <style>{`
                .contact-form-wrapper {
                    width: 100%;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .form-group label {
                    color: var(--text-primary);
                    font-size: 15px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .form-group label i {
                    color: var(--primary-color);
                    font-size: 18px;
                }

                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 14px 18px;
                    background: rgba(0, 0, 0, 0.3);
                    border: 2px solid rgba(0, 217, 255, 0.1);
                    border-radius: 10px;
                    color: var(--text-primary);
                    font-size: 15px;
                    font-family: 'Poppins', sans-serif;
                    transition: var(--transition-fast);
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--primary-color);
                    background: rgba(0, 0, 0, 0.4);
                    box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.1);
                }

                .form-group input.error,
                .form-group textarea.error {
                    border-color: #ef4444;
                }

                .form-group input::placeholder,
                .form-group textarea::placeholder {
                    color: var(--text-muted);
                }

                .form-group textarea {
                    resize: vertical;
                    min-height: 120px;
                }

                .error-message {
                    color: #ef4444;
                    font-size: 13px;
                    margin-top: -5px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .error-message::before {
                    content: '⚠';
                }

                .alert {
                    padding: 15px 20px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 15px;
                    animation: slideIn 0.3s ease;
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .alert i {
                    font-size: 24px;
                }

                .alert-success {
                    background: rgba(16, 185, 129, 0.1);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                    color: #10b981;
                }

                .alert-error {
                    background: rgba(239, 68, 68, 0.1);
                    border: 1px solid rgba(239, 68, 68, 0.3);
                    color: #ef4444;
                }

                .submit-btn {
                    padding: 16px 40px;
                    background: var(--gradient-primary);
                    border: none;
                    border-radius: 50px;
                    color: var(--text-primary);
                    font-size: 16px;
                    font-weight: 600;
                    font-family: 'Poppins', sans-serif;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    transition: var(--transition-fast);
                    box-shadow: var(--shadow-md);
                }

                .submit-btn:hover:not(:disabled) {
                    transform: translateY(-3px);
                    box-shadow: var(--shadow-lg);
                }

                .submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .submit-btn i {
                    font-size: 20px;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                @media (max-width: 768px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }

                    .form-group input,
                    .form-group textarea {
                        padding: 12px 15px;
                        font-size: 14px;
                    }

                    .submit-btn {
                        padding: 14px 30px;
                        font-size: 15px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ContactForm;
