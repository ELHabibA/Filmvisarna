import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, Form } from 'react-bootstrap';

const LogIn = () => {

  const history = useHistory();
  const inputStyle = { color: 'black' };
  const placeholderStyle = { color: 'black' };
  const inputFieldStyle = { background: 'white', color: 'black', borderColor: '#272A31' };
  const cardStyle = { backgroundColor: 'rgba(211, 211, 211, 0.6)', maxWidth: '600px', margin: '0 auto' };

  const loginHeaderText = 'Log In';

  const initialLoginData = {
    email: '', // Update the field names to match your form
    password: '', // Update the field names to match your form
  };

  const [loginData, setLoginData] = useState(initialLoginData);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleInputChange = (fieldName, value) => {
    setLoginData({ ...loginData, [fieldName]: value });
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please try again.');
      }

      // Redirect to the movies page upon successful login
      history.push('/Filmer');
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('Login failed. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <Container className="mt-5">
      <Card style={cardStyle}>
        <Card.Body className="text-center">
          <h2 style={inputStyle}>{loginHeaderText}</h2>
          <Form className="rectangle-form">
            {[
              { field: 'email', label: 'Enter your E-mail' },
              { field: 'password', label: 'Enter your Password' },
            ].map(({ field, label }) => (
              <Form.Group key={field}>
                <Form.Label style={placeholderStyle}>{field}</Form.Label>
                <Form.Control
                  type={field === 'password' ? 'password' : 'text'}
                  style={inputFieldStyle}
                  placeholder={label}
                  value={loginData[field]}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                />
              </Form.Group>
            ))}
          </Form>
          {loginError && <p className="text-danger">{loginError}</p>}
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary" onClick={handleLogin} disabled={isLoggingIn}>
            {isLoggingIn ? 'Logging in...' : 'Log In'}
          </Button>
          <p className="text-muted">
            Not a member? <Link to="/blimedlem">Become a member</Link>
          </p>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default LogIn;

