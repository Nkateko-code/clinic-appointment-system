import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentList from '../components/AppointmentList';

const Home = () => {
  const [appointments, setAppointments] = useState([]);

  const handleBook = (appt) => {
    setAppointments([...appointments, appt]);
    alert('Appointment booked! Confirmation will be sent.');
  };

  return (
    <div>
      <Navbar />
      <h1>Book an Appointment</h1>
      <AppointmentForm onBook={handleBook} />
      <AppointmentList appointments={appointments} />
    </div>
  );
};

export default Home;