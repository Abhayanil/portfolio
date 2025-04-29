import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container my-5" id="contact">
      <h2>Contact Me</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" className="form-control" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" name="email" className="form-control" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea name="message" className="form-control" rows="4" onChange={handleChange} required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  );
};

export default ContactForm;