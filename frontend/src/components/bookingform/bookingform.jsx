import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function BookingForm() {
  return (
    // First name form with description and input
    <Form>
        <div class ="bg-secondary w-100 p-5 rounded">
        <h1 className="mb-5">Bokning</h1>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>Förnamn</Form.Label>
        <Form.Control type="firstName"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Efternamn</Form.Label>
        <Form.Control type="lastName"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmailAdress">
        <Form.Label>E-postaddress</Form.Label>
        <Form.Control type="emailAdress"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Telefonnummer</Form.Label>
        <Form.Control type="phoneNumber"/>
      </Form.Group>
      <Form.Group>
      <Button variant="primary" type="submit">
        Boka
      </Button>
      </Form.Group>
      </div>
    </Form>
  );
}




export default BookingForm;