import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
    const navigate = useNavigate();

    // Handle Consult Now button click: Always navigate (no auth check)
    const handleConsultNowClick = () => {
        navigate("/find-doctors");
    };

    return (
        <Container fluid className="bg-light py-5 modern-hero">
            <Row className="align-items-center">
                <Col
                    md={6}
                    style={{ textAlign: "center", paddingLeft: "10rem" }}
                    className="text-center text-md-start"
                >
                    <h1>Consult Top Doctors Online</h1>
                    <p>
                        Private online consultations with verified doctors across all
                        specialties.
                    </p>
                    <Button variant="primary" size="lg" onClick={handleConsultNowClick}>
                        Consult Now
                    </Button>
                </Col>
                <Col md={6}>
                    <Image
                        style={{ width: "40%", borderRadius: "1rem" }}
                        src="/images/hero-image.jpg"
                        fluid
                        alt="Hero"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;
