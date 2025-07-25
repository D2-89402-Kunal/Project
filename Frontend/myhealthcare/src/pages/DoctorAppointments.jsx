import React from 'react';
import DoctorDashboard from '../components/DoctorDashboard';

const doctorid = localStorage.getItem('doctorid');

const DoctorAppointments = () => {
  const doctorId = doctorid;
  return (
    <div>
      <h2>Doctor Appointments</h2>
      <DoctorDashboard doctorId={doctorId} />
    </div>
  );
};

export default DoctorAppointments;
