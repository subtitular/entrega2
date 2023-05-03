import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

//import "./Profile.css";

const ProfileComponent: React.FC = () => {
  return (
    <Container className="profile">
      <h1>Perfil de usuario</h1>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <FaUser className="mb-3" size="5rem" />
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                Descripción del usuario...
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item><FaEnvelope className="mr-2" /> john.doe@example.com</ListGroup.Item>
              <ListGroup.Item><FaPhone className="mr-2" /> +1 555-555-5555</ListGroup.Item>
              <ListGroup.Item><FaMapMarkerAlt className="mr-2" /> 123 Main St, Anytown USA</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2>Mis productos</h2>
              <p>No hay productos actualmente</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileComponent;
