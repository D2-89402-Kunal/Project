import React, { useState } from "react";
import {
  Container,
  Typography,
  Avatar,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Stack,
} from "@mui/material";
import Header from '../../Components/Header'; 
import Footer from "../../Components/Footer";
import { AccountCircle } from "@mui/icons-material";
// Uncomment and adjust if you want a navigation bar or a sidebar
// import Navbar from "./Navbar";
// import AppointmentSidebar from "./AppointmentSidebar";
// import moment from "moment"; // Optional: Remove if not needed

const PatientHistory = () => {
  // Example static data for appointments
  const [appointments] = useState([
    {
      id: 1,
      appointmentDate: "2024-07-10",
      startTime: "10:00",
      endTime: "10:30",
      status: "COMPLETED",
      doctor: { user: { name: "Dr. Ram Kumar" }, specialization: "Cardiology" },
    },
    {
      id: 2,
      appointmentDate: "2024-07-12",
      startTime: "12:00",
      endTime: "12:30",
      status: "SCHEDULED",
      doctor: { user: { name: "Dr. Priya Verma" }, specialization: "Dermatology" },
    },
    {
      id: 3,
      appointmentDate: "2024-07-14",
      startTime: "15:00",
      endTime: "15:30",
      status: "CANCELLED",
      doctor: { user: { name: "Dr. Ramesh Gupta" }, specialization: "Neurology" },
    },
  ]);

  // Example static user data (simulate localStorage/userInfo)
  const userData = {
    name: "Alice Singh",
    email: "alice@example.com",
    role: "patient",
    phoneNumber: "9123456789",
    createdAt: "2024-01-01T09:30:00.000Z",
    photo: "", // optional
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          flex: 1,
          background: "linear-gradient(to right, #e0f7fa, #ffffff)",
          paddingBottom: "80px",
          padding: "20px",
        }}
      >
        <Container sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Paper elevation={4} sx={{ padding: "30px", borderRadius: "15px", background: "#fff" }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
              <Grid item>
                <Avatar
                  alt={userData.name}
                  // src={userData.photo}
                  sx={{ width: 120, height: 120, border: "4px solid #1976d2", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                  Show User Info
                </Button>
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ fontWeight: "bold", marginTop: "2rem" }}
                >
                  Appointment History
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 4 }}>
              {appointments.length > 0 ? (
                appointments.map((appt) => (
                  <Grid item xs={12} sm={6} md={4} key={appt.id}>
                    <Card
                      elevation={5}
                      sx={{
                        borderRadius: "15px",
                        textAlign: "center",
                        transition: "0.3s",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" color="primary">
                          {appt.appointmentDate}
                        </Typography>
                        <Typography variant="body1" style={{ fontWeight: "bold" }}>
                          Doctor: {appt.doctor.user.name}
                        </Typography>
                        <Typography variant="body1" style={{ fontWeight: "bold" }}>
                          Specialization: {appt.doctor.specialization}
                        </Typography>
                        <Typography variant="body1" style={{ fontWeight: "bold" }}>
                          Time: {appt.startTime} - {appt.endTime}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color:
                              appt.status === "COMPLETED"
                                ? "green"
                                : appt.status === "SCHEDULED"
                                ? "blue"
                                : "red",
                            fontWeight: "bold",
                          }}
                        >
                          Status: {appt.status}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center" }}>
                        {/* Optional button, leave blank for static */}
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: "18px",
                    color: "gray",
                  }}
                >
                  No appointments available
                </Typography>
              )}
            </Grid>
          </Paper>
        </Container>
      </Box>
      <Footer />

      {/* User Info Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
          User Information
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} alignItems="center">
            <Avatar sx={{ width: 80, height: 80, bgcolor: "primary.main" }}>
              <AccountCircle sx={{ width: 60, height: 60 }} />
            </Avatar>
            <Typography variant="h6">{userData.name || "N/A"}</Typography>
            <Typography color="textSecondary">
              {userData.email || "No Email Provided"}
            </Typography>
            <Divider sx={{ width: "100%", my: 1 }} />
            <Box width="100%">
              <Typography>
                <strong>Role:</strong> {userData.role || "Unknown"}
              </Typography>
              <Typography>
                <strong>Phone:</strong> {userData.phoneNumber || "Not Available"}
              </Typography>
              <Typography>
                <strong>Account Created:</strong>{" "}
                {/* Just show date for static: */}
                Jan 01, 2024
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PatientHistory;
