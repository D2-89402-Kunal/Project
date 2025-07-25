import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const Home = () => (
  <Container>
    <Typography variant="h3" gutterBottom>
      Welcome to Healthcare App
    </Typography>
    <Button
      variant="contained"
      component={Link}
      to="/book-appointment"
      style={{ margin: '10px' }}
    >
      Book Appointment
    </Button>
    <Button
      variant="outlined"
      component={Link}
      to="/doctor-appointments"
      style={{ margin: '10px' }}
    >
      Doctor Dashboard
    </Button>
    <Button
      variant="outlined"
      component={Link}
      to="/patient-appointments"
      style={{ margin: '10px' }}
    >
      Patient History
    </Button>
  </Container>
);

export default Home;
