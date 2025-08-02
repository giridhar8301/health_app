import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookAppointment.css';

const BookAppointment = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking info:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="confirmation">
        <h2>Appointment Confirmed!</h2>
        <p>Thank you, {formData.name}. Your appointment is booked.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h2>Book Appointment</h2>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      <input type="datetime-local" name="datetime" onChange={handleChange} required />
      <button type="submit">Confirm</button>
    </form>
  );
};

export default BookAppointment;
