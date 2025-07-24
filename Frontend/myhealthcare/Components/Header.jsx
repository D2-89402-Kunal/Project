import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    // Navigate directly to Find Doctors
    const handleFindDoctorsClick = () => {
        navigate('/find-doctors');
    };

    return (
        <Navbar bg="light" expand="lg" className="shadow-sm modern-header">
            <Container>
                <Navbar.Brand href="/">CareBuddy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={handleFindDoctorsClick}>Find Doctors</Nav.Link>
                        <Nav.Link href="/login">Login / Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

