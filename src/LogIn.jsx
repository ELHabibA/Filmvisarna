import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

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


  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const data = { email, password };
    const response = await postData('/api/login', data);

    console.log("DA LOGIN RESPONSE", response)
    if (response.error) {
      // Handle login error 
      console.error(response.error);
    } else {
      // Go to movies page on successful login
      navigate('/Filmer');
    }
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body className="text-center">
          <h2>Logga In</h2>
          <Form className="rectangle-form">
            <Form.Group>
              <Form.Label>E-post</Form.Label>
              <Form.Control
                type="text"
                placeholder="E-post"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Lösenord</Form.Label>
              <Form.Control
                type="password"
                placeholder="Lösenord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary" onClick={handleLogin}>
            Logga In
          </Button>
          <p className="mt-3">
            Inte medlem? <Link to="/blimedlem">Bli Medlem</Link>
          </p>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Login;
