import React from 'react';
import PatientHistory from '../components/PatientHistory';

const userId = localStorage.getItem("user");

const PatientAppointments = () => (
  <div>
    <h2>My Appointments</h2>
    <PatientHistory userId={userId} />
  </div>
);

export default PatientAppointments;
