import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  InputAdornment,
} from "@mui/material";
import { CalendarToday, Schedule, Person } from "@mui/icons-material";

// You may comment out or remove Header and Footer if unwanted
import Header from '../../Components/Header'; 
import Footer from '../../Components/Footer';

const AppointmentForm = () => {
  // Hardcoded static values for demonstration
  const [appointment, setAppointment] = useState({
    doctorName: 'Dr. Ram Kumar',
    specialization: 'Cardiology',
    consultationFee: '700',
    startTime: '',
    endTime: '',
    appointmentDate: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend interaction, just show a popup!
    setShowSuccessPopup(true);
  };

  return (
    <div>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 5, mb: 15 }}>
        <Card elevation={4} sx={{ p: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              color="primary"
              fontWeight="bold"
            >
              Book an Appointment
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Doctor Name"
                    value={appointment.doctorName}
                    fullWidth
                    required
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Specialization"
                    value={appointment.specialization}
                    fullWidth
                    required
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Start Time"
                    type="time"
                    value={appointment.startTime}
                    onChange={(e) =>
                      setAppointment({ ...appointment, startTime: e.target.value })
                    }
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Schedule />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="End Time"
                    type="time"
                    value={appointment.endTime}
                    onChange={(e) =>
                      setAppointment({ ...appointment, endTime: e.target.value })
                    }
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Schedule />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Appointment Date"
                    type="date"
                    value={appointment.appointmentDate}
                    onChange={(e) =>
                      setAppointment({
                        ...appointment,
                        appointmentDate: e.target.value,
                      })
                    }
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarToday />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2, py: 1.5, fontSize: "16px" }}
                  >
                    Proceed to Payment
                  </Button>
                </Grid>
              </Grid>
            </form>
            {/* Static display of fee if desired */}
            <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
              Consultation Fee: Rs.{appointment.consultationFee}
            </Typography>
          </CardContent>
        </Card>
        {showSuccessPopup && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Typography variant="h6" color="success.main">
              Appointment Successfully Confirmed! (Static Demo)
            </Typography>
            <Button variant="contained" color="primary" onClick={() => setShowSuccessPopup(false)}>OK</Button>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default AppointmentForm;
