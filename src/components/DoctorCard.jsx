import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="doctor-card" onClick={() => navigate(`/doctor/${doctor.id}`)}>
      <img src={doctor.profileImage} alt={doctor.name} className="doctor-img" />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p className={doctor.availability === 'Available' ? 'available' : 'unavailable'}>
        {doctor.availability}
      </p>
    </div>
  );
};

export default DoctorCard;
