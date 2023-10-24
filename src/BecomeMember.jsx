import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { post } from './hooks/rest';
import { useFormHelper } from './hooks/useFormHelper';

const initialRegistrationData = {
  Namn: '',
  Efternamn: '',
  'E-postadress': '',
  'Bekräfta E-postadress': '',
  Telefonnummer: '',
  Losenord: '',
  'Bekräfta Lösenord': ''
};

const inputStyle = { color: 'white' };
const placeholderStyle = { color: 'white' };
const inputFieldStyle = { background: 'black', color: 'white', borderColor: '#272A31' };
const cardStyle = { backgroundColor: 'rgba(211, 211, 211, 0.6)', maxWidth: '600px', margin: '0 auto' };

function BliMedlem() {
  const { formState, setFormState, createInputElement } = useFormHelper({
    required: true,
    autoComplete: 'on',
    type: 'text',
    maxLength: 80,
  });

  const [isRegistering, setIsRegistering] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState('');
  const [userAlreadyRegistered, setUserAlreadyRegistered] = useState('');
  const registrationHeaderText = 'Bli Medlem';
  const [registrationError, setRegistrationError] = useState('');

  const handleInputChange = (fieldName, value) => {
    // setFormState ersätter behovet av flera state-variabler
    setFormState({ ...formState, [fieldName]: value });
    if (fieldErrors[fieldName]) {
      setFieldErrors({ ...fieldErrors, [fieldName]: '' });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    const newFieldErrors = {};

    if (!validateEmail(formState['E-postadress'])) {
      newFieldErrors['E-postadress'] = 'Felaktig e-postadress.';
    } else if (formState['E-postadress'] !== formState['Bekräfta E-postadress']) {
      newFieldErrors['E-postadress'] = 'E-postadresserna matchar inte.';
    }

    if (!validatePassword(formState.Losenord)) {
      newFieldErrors['Losenord'] = 'Lösenordet måste innehålla minst åtta bokstäver, minst 1 stor bokstav, samt en  siffra och en tecken.';
    }

    if (formState.Losenord !== formState['Bekräfta Lösenord']) {
      newFieldErrors['Bekräfta Lösenord'] = 'Lösenordet och bekräftelsen matchar inte.';
    }

    setFieldErrors(newFieldErrors);
    return Object.keys(newFieldErrors).length === 0;
  };

  const handleRegistration = async () => {
    setIsRegistering(true);
    setFieldErrors({});
    setRegistrationError('');
    setRegistrationSuccess('');
    setUserAlreadyRegistered('');

    if (!validateForm()) {
      setIsRegistering(false);
      return;
    }

    const userData = {
      firstName: formState.Namn,
      lastName: formState.Efternamn,
      email: formState['E-postadress'],
      phoneNumber: formState.Telefonnummer,
      password: formState.Losenord,
    };

    try {
      const data = await post('users', userData);

      if (data.insertId) {
        setRegistrationSuccess('Registreringen lyckades. Välkommen!');
        setUserAlreadyRegistered('');
        setRegistrationError('');
      } else if (data.code === "ER_DUP_ENTRY") {
        setUserAlreadyRegistered('Användaren med den här e-postadressen är redan registrerad.');
        setRegistrationError('');
        setRegistrationSuccess('');
      } else {
        setRegistrationError('Registreringen misslyckades. Vänligen försök igen senare.');
      }

    } catch (error) {
      console.error('Fetch-fel:', error);
      setRegistrationError('Registreringen misslyckades. Vänligen försök igen senare.');
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card style={cardStyle}>
            <Card.Body className="text-center">
              <h2 style={inputStyle}>{registrationHeaderText}</h2>
              <Form className="rectangle-form">
                {[
                  'Namn',
                  'Efternamn',
                  'E-postadress',
                  'Bekräfta E-postadress',
                  'Telefonnummer',
                  'Losenord',
                  'Bekräfta Lösenord',
                ].map((field) => (
                  <Form.Group key={field}>
                    <Form.Label style={placeholderStyle}>
                      {field === 'Bekräfta Lösenord' ? 'Bekräfta Lösenord' : field}
                    </Form.Label>
                    <Form.Control
                      type={field === 'Losenord' || field === 'Bekräfta Lösenord' ? 'password' : 'text'}
                      style={inputFieldStyle}
                      placeholder={field === 'Losenord' ? 'Lösenord' : ` ${field}`}
                      value={formState[field]}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      autoComplete={field === 'Losenord' ? 'new-password' : ''}
                    />
                    {fieldErrors[field] && <p className="text-danger">{fieldErrors[field]}</p>}
                  </Form.Group>
                ))}
              </Form>
              {userAlreadyRegistered && <p className="text-danger">{userAlreadyRegistered}</p>}
              {registrationSuccess && <p className="text-success">{registrationSuccess}</p>}
              {registrationError && <p className="text-danger">{registrationError}</p>}
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="primary" onClick={handleRegistration} disabled={isRegistering}>
                {isRegistering ? 'Registrerar...' : 'Bli Medlem'}
              </Button>
              <p className="text-muted">
                Redan Medlem? <Link to="/loggain">Logga in här</Link>
              </p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BliMedlem;
