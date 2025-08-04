import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../../css/FindDoctors.css";
import Header from "./Header";
import Footer from "./Footer";

const FindDoctors = () => {
  const navigate = useNavigate();

  const [allDoctors, setAllDoctors] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [showPhoneNumberFor, setShowPhoneNumberFor] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  // Hardcoded doctor data for UI testing
  useEffect(() => {
    const sampleDoctors = [
      {
        doctorId: "1",
        doctorname: "Shivam Shikhare",
        specialization: "Cardiologist",
        qualification: "MBBS, MD (Cardiology)",
        experienceYears: 10,
        clinicAddress: "Heart Care Clinic, Pune",
        consultationFee: 800,
        patientStories: 128,
        rating: "95%",
        availableDays: "Mon-Sat",
        imageUrl: "", // leave empty to use placeholder
        user: {
          phoneNumber: "9876543210"
        }
      },
      {
        doctorId: "2",
        doctorname: "Priya Verma",
        specialization: "Dermatologist",
        qualification: "MBBS, DDVL",
        experienceYears: 7,
        clinicAddress: "SkinGlow Clinic, Mumbai",
        consultationFee: 600,
        patientStories: 90,
        rating: "92%",
        availableDays: "Tue-Fri",
        imageUrl: "",
        user: {
          phoneNumber: ""
        }
      }
    ];

    setAllDoctors(sampleDoctors);
    setDoctors(sampleDoctors);
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setDoctors(allDoctors);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = allDoctors.filter((doctor) => {
        if (filterType === "specialization") {
          return doctor.specialization?.toLowerCase().includes(lowerCaseQuery);
        } else if (filterType === "qualification") {
          return doctor.qualification?.toLowerCase().includes(lowerCaseQuery);
        } else if (filterType === "experienceYears") {
          return doctor.experienceYears?.toString().includes(lowerCaseQuery);
        } else if (filterType === "clinicAddress") {
          return doctor.clinicAddress?.toLowerCase().includes(lowerCaseQuery);
        } else if (filterType === "availableDays") {
          return doctor.availableDays?.toLowerCase().includes(lowerCaseQuery);
        } else {
          return doctor.doctorname?.toLowerCase().includes(lowerCaseQuery);
        }
      });
      setDoctors(filtered);
    }
  }, [searchQuery, filterType, allDoctors]);

  const handleBookAppointment = (doctor) => {
    navigate("/book-appointment", {
      state: {
        doctorId: String(doctor.doctorId),
        doctorName: doctor.doctorname,
        specialization: doctor.specialization,
        consultationFee: doctor.consultationFee
      }
    });
  };

  const handleContactClick = (doctorId) => {
    setShowPhoneNumberFor(prev => prev === doctorId ? null : doctorId);
  };

  return (
    <div>
      <Header />
      <div className="full-page-bg"></div>

      <div className="container mt-4">
        <h2 className="mb-4 component-title">Find Doctors</h2>

        <div className="row mb-4 align-items-center">
          <div className="col-md-3">
            <select
              className="form-select modern-filter-dropdown"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="">Filter By (default: Doctor Name)</option>
              <option value="specialization">Specialization</option>
              <option value="qualification">Qualification</option>
              <option value="experienceYears">Experience (Years)</option>
              <option value="clinicAddress">Clinic Address</option>
              <option value="availableDays">Available Days</option>
            </select>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control modern-search-input"
              placeholder="Search doctors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <Card
              key={doctor.doctorId}
              className="mb-4 p-3 shadow-sm doctor-card modern-card"
            >
              <Row className="align-items-center">
                <Col xs={3} md={2} className="ps-5">
                  <img
                    src={doctor.imageUrl || "https://via.placeholder.com/250"}
                    alt={doctor.doctorname}
                    className="rounded-circle doctor-img"
                    style={{
                      width: "250px",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </Col>

                <Col xs={9} md={7}>
                  <h5 className="doctor-name mb-3">Dr. {doctor.doctorname}</h5>
                  <p className="mb-1"><strong>Specialization:</strong> {doctor.specialization}</p>
                  <p className="mb-1"><strong>Experience:</strong> {doctor.experienceYears} years overall</p>
                  <p className="mb-1"><strong>Clinic Address:</strong> {doctor.clinicAddress}</p>
                  <p className="mb-1"><strong>Consultation Fee:</strong> ₹{doctor.consultationFee}</p>
                  <p className="mb-1"><strong>Patient Stories:</strong> {doctor.patientStories}</p>
                  <p className="mb-1"><strong>Rating:</strong> <span className="badge bg-success">✅ {doctor.rating}</span></p>
                </Col>

                <Col xs={12} md={3} className="text-md-end text-center">
                  <p className="text-success">📅 Available Today</p>
                  <Button
                    variant="primary"
                    className="mb-2 w-100"
                    onClick={() => handleBookAppointment(doctor)}
                  >
                    Book Appointment
                  </Button>
                  {showPhoneNumberFor === doctor.doctorId ? (
                    <div className="phone-number-display">
                      <div className="phone-number mb-2">
                        <strong>📞 {doctor.user?.phoneNumber}</strong>
                      </div>
                      <small className="terms-text">
                        You can contact doctor at this number
                      </small>
                      {!doctor.user?.phoneNumber && (
                        <small className="text-danger">
                          Phone number not available
                        </small>
                      )}
                      <Button
                        variant="outline-danger"
                        className="w-100 mt-2"
                        onClick={() => handleContactClick(doctor.doctorId)}
                      >
                        Hide Number
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="outline-secondary"
                      className="w-100"
                      onClick={() => handleContactClick(doctor.doctorId)}
                      disabled={!doctor.user?.phoneNumber}
                    >
                      📞 Contact Clinic
                    </Button>
                  )}
                </Col>
              </Row>
            </Card>
          ))
        ) : (
          <p>No doctors available at the moment.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FindDoctors;