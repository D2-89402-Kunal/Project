import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
// You can comment this out if not needed

const DoctorDashboard = () => {
  // STATIC data for demonstration -- in real use, fetch from server/backend
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: { name: "Alice Singh" },
      appointmentDate: "2024-07-10",
      status: "SCHEDULED",
    },
    {
      id: 2,
      patient: { name: "Raman Patel" },
      appointmentDate: "2024-07-11",
      status: "SCHEDULED",
    },
    {
      id: 3,
      patient: { name: "Priya Nair" },
      appointmentDate: "2024-07-12",
      status: "CANCELLED",
    },
    {
      id: 4,
      patient: { name: "Vijay Kumar" },
      appointmentDate: "2024-07-13",
      status: "COMPLETED",
    },
  ]);

  // "Update" the status -- just update local state, no backend
  const handleStatusUpdate = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  return (
    <div>
      <Header />
      <Box
        sx={{
          background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
          width: "100%",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Container sx={{ marginTop: 4 }}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: 3,
              fontWeight: "bold",
              textAlign: "center",
              color: "#1976D2",
            }}
          >
            Doctor Dashboard
          </Typography>
          <Button onClick={() => navigate("/patient-history")}>
            Find patient history
          </Button>
          <Grid container spacing={3} sx={{ marginTop: 3 }}>
            {appointments.map((appointment) => (
              <Grid item xs={12} sm={6} md={4} key={appointment.id}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 2,
                    boxShadow: 3,
                    backgroundColor:
                      appointment.status === "CANCELLED"
                        ? "#ffebee"
                        : "#e3f2fd",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", marginBottom: 1 }}
                    >
                      Appointment ID: {appointment.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Patient Name: {appointment.patient?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Appointment Date: {appointment.appointmentDate}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={
                        appointment.status === "CANCELLED" ? "error" : "success"
                      }
                    >
                      Status: <strong>{appointment.status}</strong>
                    </Typography>
                  </CardContent>
                  <Box sx={{ padding: 2 }}>
                    <Grid container spacing={2}>
                      {appointment.status !== "COMPLETED" &&
                        appointment.status !== "CANCELLED" && (
                          <>
                            <Grid item xs={6}>
                              <Button
                                variant="contained"
                                fullWidth
                                color="success"
                                onClick={() =>
                                  handleStatusUpdate(
                                    appointment.id,
                                    "COMPLETED"
                                  )
                                }
                                sx={{ height: "100%" }}
                              >
                                Mark as Completed
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <Button
                                variant="outlined"
                                fullWidth
                                color="error"
                                onClick={() =>
                                  handleStatusUpdate(
                                    appointment.id,
                                    "CANCELLED"
                                  )
                                }
                                sx={{ height: "100%" }}
                              >
                                Cancel
                              </Button>
                            </Grid>
                          </>
                        )}
                      {(appointment.status === "COMPLETED" ||
                        appointment.status === "CANCELLED") && (
                        <Grid item xs={12}>
                          <Typography
                            variant="body2"
                            color={
                              appointment.status === "CANCELLED"
                                ? "error"
                                : "success"
                            }
                          >
                            This appointment has been{" "}
                            {appointment.status.toLowerCase()}.
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default DoctorDashboard;
