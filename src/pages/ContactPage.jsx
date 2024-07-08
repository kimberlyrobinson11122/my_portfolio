import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    name: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;

    if (id === 'email' && !isValidEmail(value)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address'
      });
    } else if (id === 'name' && value.trim() === '') {
      setErrors({
        ...errors,
        name: 'Name is required'
      });
    } else {
      setErrors({
        ...errors,
        [id]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', formData);
    // Example: Reset form data after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Example: Clear errors after submission
    setErrors({
      email: '',
      name: ''
    });
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className={`form-control ${errors.name && 'is-invalid'}`}
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={`form-control ${errors.email && 'is-invalid'}`}
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ContactPage;