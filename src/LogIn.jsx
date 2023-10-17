import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, Form } from 'react-bootstrap';

const LogIn = () => {
  const cardStyle = { backgroundColor: 'rgba(211, 211, 211, 0.6)', maxWidth: '600px', margin: '0 auto' };
  const loginHeaderText = 'Logga In';

  return (
    <Container className="mt-5">
      <Card style={cardStyle}>
        <Card.Body className="text-center">
          <h2>{loginHeaderText}</h2>
          <Form className="rectangle-form">
            <Form.Group>
              <Form.Label>E-post</Form.Label>
              <Form.Control type="text" placeholder="E-post" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Lösenord</Form.Label>
              <Form.Control type="password" placeholder="Lösenord" />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary" type="submit">
            Logga In
          </Button>
          <p className="mt-3">
            Inte medlem? <Link to="/blimedlem">Bli Medlem</Link>
          </p>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default LogIn;
