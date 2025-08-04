import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../Components/HomePage";
import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import PatientAppointments from "./pages/PatientAppointments";
import DoctorAppointments from "./pages/DoctorAppointments";
import AppointmentForm from "./components/AppointmentForm";
import DoctorDashboard from "./components/DoctorDashboard";
import PatientHistory from "./components/PatientHistory";
import SignIn from "./components/Home/SignIn";
import SignUp from "./components/Home/SignUp";
import FindDoctors from "../Components/FindDoctors";

function App() {
  return (
    // <AppointmentForm />
    // <DoctorDashboard />
    // <PatientHistory />
    // <SignIn />
    // <SignUp />
    // <HomePage />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/appointment-form" element={<AppointmentForm />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/patient-history" element={<PatientHistory />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/find-doctors" element={<FindDoctors />} />
    </Routes>

    //     // <Routes>
    //     //   <Route path="/" element={<Home />} />
    //     //   <Route path="/book-appointment" element={<BookAppointment />} />
    //     //   <Route path="/patient-appointments" element={<PatientAppointments />} />
    //     //   <Route path="/doctor-appointments" element={<DoctorAppointments />} />
    //     // </Routes>
  );
}

export default App;
