import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Form, InputGroup, Button } from "react-bootstrap";

import RegisterTabs from "./RegisterTabs";
import RegisterAccordion from "./RegisterAccordion";

const RegistrationForm = () => {
  const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum`;

  const registrationInfoItems = [
    {
      title: "Terms and conditions",
      content: lorem,
    },
    {
      title: "Rules",
      content: lorem,
    },
    {
      title: "FAQ",
      content: lorem,
    },
  ];

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div>
      <Container>
        <h1>Registration</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationFName">
            <Form.Control
              required
              type="text"
              placeholder="First name"
              size="lg"
            />
          </Form.Group>
          <Form.Group controlId="validationLName">
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
          <Form.Group controlId="validationEmail">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                size="lg"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="validationCity">
            <Form.Control type="text" placeholder="City" required size="lg" />
          </Form.Group>
          {isMobile ? (
            <RegisterAccordion infoItems={registrationInfoItems} />
          ) : (
            <RegisterTabs infoItems={registrationInfoItems} />
          )}
          <Form.Group>
            <Form.Check required />
            <label>
              <p className="text">
                I AGREE to terms and conditions. I have read them thourouly and
                agree to abide by them.
                <p className="terms">Terms and sevice</p>
              </p>
            </label>
          </Form.Group>
          <Button size="lg" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default RegistrationForm;
