import React, { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';
import SearchBar from '../components/SearchBar';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/doctors.json')
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="landing-page">
      <h1>Find Your Doctor</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="doctor-grid">
        {filteredDoctors.map(doc => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
