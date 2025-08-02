import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/DoctorProfile.css';

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/doctors.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(doc => doc.id === parseInt(id));
        setDoctor(selected);
      });
  }, [id]);

  if (!doctor) return <div className="loading">Loading...</div>;

  return (
    <div className="doctor-profile">
      <img src={doctor.profileImage} alt={doctor.name} className="profile-image" />
      <h2>{doctor.name}</h2>
      <p className="specialization">{doctor.specialization}</p>
      <p className="bio">{doctor.bio}</p>

      {/* Structured availability schedule */}
      <div className="availability-schedule">
        <h3>Availability Schedule</h3>
        {doctor.schedule && doctor.schedule.length > 0 ? (
          <ul>
            {doctor.schedule.map((slot, idx) => (
              <li key={idx}>
                <strong>{slot.day}</strong>: {slot.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No schedule available.</p>
        )}
      </div>

      <button className="book-button" onClick={() => navigate(`/book/${doctor.id}`)}>
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorProfile;
