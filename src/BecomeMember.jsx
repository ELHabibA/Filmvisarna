import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { RestPostRoutes } from '../backend/classes/dbTypeSpecific/SQL/RestPostRoutes';
import { useFormHelper } from './hooks/useFormHelper';
import './sass/blimedlem.css';


const initialRegistrationData = {
  Namn: '',
  Efternamn: '',
  'E-postadress': '',
  'Bekräfta E-postadress': '',
  Telefonnummer: '',
  Losenord: '',
  'Bekräfta Lösenord': ''
};

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
      newFieldErrors['Lösenord'] = 'Lösenordet måste innehålla minst åtta bokstäver, minst 1 stor bokstav, samt en  siffra och en tecken.';
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

    const restPostRoutes = new RestPostRoutes();
    const tableName = 'users';
    const userData = {
      firstName: formState.Namn,
      lastName: formState.Efternamn,
      email: formState['E-postadress'],
      phoneNumber: formState.Telefonnummer,
      password: formState.Losenord,
    };
    const queryParts = restPostRoutes.addRow.query;

    const postRequest = {
      method: 'POST', // Använd POST här
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };

    try {
      const response = await fetch('http://localhost:5174/api/users', postRequest);
      const data = await response.json();


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
          <Card className="card">
            <Card.Body className="text-center">
              <h2>{registrationHeaderText}</h2>
              <Form className="rectangle-form">
                {[
                  'Namn',
                  'Efternamn',
                  'E-postadress',
                  'Bekräfta E-postadress',
                  'Telefonnummer',
                  'Lösenord',
                  'Bekräfta Lösenord',
                ].map((field) => (
                  <Form.Group key={field}>
                    <Form.Label className="placeholderStyle">
                      {field === 'Bekräfta Lösenord' ? 'Bekräfta Lösenord' : field}
                    </Form.Label>
                    <Form.Control
                      type={field === 'Losenord' || field === 'Bekräfta Lösenord' ? 'password' : 'text'}
                      className="form-control"
                      placeholder=""
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
              <Button variant="primary" onClick={handleRegistration} disabled={isRegistering} className='mb-3'>
                {isRegistering ? 'Registrerar...' : 'Bli Medlem'}
              </Button>
              <p className="text-muted">
                Redan Medlem? <Link to="/loggain" className="logga-in-link">Logga in här</Link>
              </p>

            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BliMedlem;
