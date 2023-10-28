import React, { useState } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import {useNavigate, useOutletContext, Link } from 'react-router-dom';
import './sass/LogIn.css';

async function postData(url = "", data = {}) {

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

const Login = () => {

  const {setUser} = useOutletContext();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const data = { email, password };
    const response = await postData('/api/login', data);

    if (response.error) {
      // Handle login error 
      console.error(response.error);
    } else {
      // Go to movies page on successful login
      setUser(response);
      navigate('/');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="card">
            <Card.Body className="text-center">
              <h2 className="h2">Logga in</h2>
              <Form className="rectangle-form">
                <Form.Group>
                  <Form.Label className="placeholderStyle">E-post</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control inputFieldStyle"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="placeholderStyle">Lösenord</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control inputFieldStyle"
                  />
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="primary" onClick={handleLogin}>
                Logga in
              </Button>
              <p className="mt-3">
                Inte medlem? <Link to="/blimedlem" className="become-member-link">Bli Medlem</Link>
              </p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
