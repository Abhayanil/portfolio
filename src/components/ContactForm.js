import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("Form submitted successfully:", formData);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors({ submit: 'Failed to submit the form. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container my-5" id="contact">
      <h2>Contact Me</h2>
      
      {submitSuccess && (
        <div className="alert alert-success" role="alert">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
      
      {errors.submit && (
        <div className="alert alert-danger" role="alert">
          {errors.submit}
        </div>
      )}
      
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          type="text" 
          id="name"
          name="name" 
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={formData.name}
          onChange={handleChange} 
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
          type="email" 
          id="email"
          name="email" 
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={formData.email}
          onChange={handleChange} 
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea 
          id="message"
          name="message" 
          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          rows="4" 
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
      </div>
      
      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;