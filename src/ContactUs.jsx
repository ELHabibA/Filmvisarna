import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';

const cardStyle = { backgroundColor: 'rgba(211, 211, 211, 0.6)', maxWidth: '700px', margin: '0 auto' };

const ContactUs = () => {
  const email = "filmvisarnanodemailer@gmail.com";
  const phoneNumber = "123-456-7890";

  return (
    <Container className="mt-5">
      <Card style={cardStyle}>
        <Card.Body>
          <h1>Kontakta oss</h1>
          <p>If you have any questions or need assistance, feel free to contact us:</p>
          <ul>
            <li>Email: {email}</li>
            <li>Phone: {phoneNumber}</li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ContactUs;