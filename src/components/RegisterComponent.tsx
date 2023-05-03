import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

//import "./Register.css";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <Container className="register">
      <h1>Registro</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label><FaUser /> Nombre de usuario</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre de usuario" value={username} onChange={(event) => setUsername(event.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label><FaEnvelope /> Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label><FaLock /> Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Registrarse</Button>
      </Form>
    </Container>
  );
};

export default Register;
