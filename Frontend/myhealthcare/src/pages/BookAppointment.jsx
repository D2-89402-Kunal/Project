import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

const user = localStorage.getItem("user");

const BookAppointment = () => {
  const userId = user;
  return (
    <div>
      <h2>Book Appointment</h2>
      <AppointmentForm userId={userId} />
    </div>
  );
};

export default BookAppointment;
