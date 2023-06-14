import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

//import "./About.css";

const About: React.FC = () => {
  return (
    <Container className="about">
      <h1>Acerca de Nosotros</h1>
      <Row>
        <Col md={4}>
          <FaUser />
          <div>
            <h4>Contacto</h4>
            <h2 className="text-left">John Doe</h2>
          </div>
        </Col>
        <Col md={4}>
          <FaEnvelope />
          <div>
            <h2>Email</h2>
            <p>john.doe@example.com</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="info">
            <FaPhone />
            <h2>Teléfono</h2>
            <br />
            <p>+1 555-555-5555</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="info">
            <FaMapMarkerAlt />
            <h2>Dirección</h2>
            <br />
            <p>123 Main St, Anytown USA</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
