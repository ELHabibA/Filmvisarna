import { Container, Card } from 'react-bootstrap';

const cardStyle = { backgroundColor: 'rgba(211, 211, 211, 0.6)', maxWidth: '700px', margin: '0 auto' };

const ContactUs = () => {
  const email = "filmvisarna@gmail.com";
  const phoneNumber = "040-11 22 33";

  return (
    <Container className="mt-5">
      <Card style={cardStyle}>
        <Card.Body>
          <h1>Kontakta oss</h1>
          <p>Om du har några frågor så det bara att höra av dig till oss på:</p>
          <ul>
            <li>Email: {email}</li>
            <li>Telefon: {phoneNumber}</li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ContactUs;