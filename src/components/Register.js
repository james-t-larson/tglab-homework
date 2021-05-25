import React, { useState } from "react";
import { Container, Form, InputGroup, Button } from 'react-bootstrap'
import RegistrationCarousel from './RegistrationCarousel'

function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <RegistrationCarousel />
      <Container>
        <h1>Registration</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="First name"
              size="lg"
            />
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              size="lg"
            />
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Control required type="text" placeholder="Phone" size="lg" />
          </Form.Group>
          <Form.Group controlId="validationCustomEmail">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                size="lg"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="validationCustom03">
            <Form.Control type="text" placeholder="City" required size="lg" />
          </Form.Group>
          <Form.Group>
            <Form.Check required />
            <label  >
              <p className="text">
                I AGREE to terms and conditions. I have read them thourouly and
                agree to abide by them.
                <a className="terms">Terms and sevice</a>
              </p>
            </label>
          </Form.Group>
          <Button 
            size="lg"
            type="submit"
            >
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
