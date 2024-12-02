import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    const newErrors = validateForm({ ...formData, [name]: value });
    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Form Submitted',
      text: 'Thank you for reaching out! We will get back to you soon.',
      confirmButtonText: 'OK',
    });

    console.log('Form submitted with data:', formData);

    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div>
      <section className={styles.contactContainer}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.introText}>Want to know more? Tell us, we’re listening!</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              role="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              role="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              role="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
            />
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
