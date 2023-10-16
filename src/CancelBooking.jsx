import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React, { useState } from "react";


function CancelBooking() {
  const [bookingNumber, setBookingNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleCancelBooking = async () => {
    try {
      const response = await fetch('/api/bookings', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, bookingNumber }),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message to the user
        console.log('Booking deleted successfully');
      } else {
        // Handle error, e.g., show an error message to the user
        console.error('Failed to delete booking');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Container sm={true} md={true} lg={true} className="bg-secondary p-4 rounded square">
      <h1 className="mb-4">Avbokning</h1>
      <p className="mb-5">För din säkerhet behöver du fylla i både bokningsnummer och e-postadress.</p>
      <Row className="p-4 rounded square">
        <Col>
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
      </Row>
      <Row>
        <Col className='tradeMarkFooter m-2 mt-4'><Link to="/"><div><Button >Avbryt</Button></div></Link></Col>
        <Col className='tradeMarkFooter m-2 mt-4'><Link to="/"><div><Button onClick={handleCancelBooking}>Avboka</Button></div></Link></Col>
      </Row>
    </Container>
  );
}

export default CancelBooking;