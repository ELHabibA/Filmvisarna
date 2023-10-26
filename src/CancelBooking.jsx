import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';

function CancelBooking() {
  const [bookingNumber, setBookingNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleCancelBooking = async () => {
    try {
      const response = await (await fetch('/api/bookings', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, bookingNumber }),
      })).json();

      if (response.affectedRows) {
        // Handle success, e.g., show a success message to the user
        setSuccess(true);
        setMessage('Avbokningen lyckades, avbokningsbekräftelse kommer att skickas till din mejl.');
      } else {
        // Handle error, e.g., show an error message to the user
        setSuccess(false);
        setMessage('Avbokningen misslyckades, kontrollera att du angivit rätt bokningsnummer och e-postadress.');

      }
      console.log(response)
    } catch (error) {
      setMessage('An error occurred: ' + error);
      setSuccess(false);
    }

  };

  return (
    <Container className="bg-secondary p-4 rounded square">
      {success ? (
        <>
          {message && (
            <Row>
              <Col>
                <Alert variant="success" >{message}</Alert>
                <Col className='tradeMarkFooter m-2 mt-4'><Link to="/"><div><Button >Återgå</Button></div></Link></Col>
              </Col>
            </Row>
          )}
        </>
      ) : (
        <>
          <Row className="p-4 rounded square">
            <Col>
              <h1 className="mb-4">Avbokning</h1>
              <p className="mb-5">För din säkerhet behöver du fylla i både bokningsnummer och e-postadress.</p>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupBookingnumber">
                  <Form.Label>Bokningsnummer</Form.Label>
                  <Form.Control type="text" placeholder="bokningsnummer.." value={bookingNumber} onChange={(e) => setBookingNumber(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>E-postadress</Form.Label>
                  <Form.Control type="text" placeholder="e-postadress..." value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
              </Form>
            </Col>
            {message && (
              <Row>
                <Col className="p-2">
                  <Alert variant="danger">
                    {message}
                  </Alert>
                </Col>
              </Row>
            )}
            <Row>
              <Col className='tradeMarkFooter m-2 mt-4'><Link to="/"><div><Button >Avbryt</Button></div></Link></Col>
              <Col className='tradeMarkFooter m-2 mt-4'><div><Button onClick={handleCancelBooking}>Avboka</Button></div></Col>
            </Row>
          </Row>
        </>
      )}
    </Container>
  );
}

export default CancelBooking;
