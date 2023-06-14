import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mb-4">¿Olvidó su contraseña?</h2>
          <p className="text-center mb-4">
            Ingrese su correo electrónico para recibir un enlace para
            restablecer su contraseña.
          </p>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FaEnvelope />
                  </div>
                </div>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                />
              </div>
            </Form.Group>
            <Button type="submit" className="mt-3">
              Enviar enlace de restablecimiento
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
