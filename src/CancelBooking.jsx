import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";

import { Link } from 'react-router-dom';


function CancelBooking() {
  return (
    <Container sm={true} md={true} lg={true} className="bg-secondary p-4 rounded square">

      <h1 className="mb-4">Avbokning</h1>
      <p className="mb-5">För din säkerhet behöver du fylla i både bokningsnummer och e-postadress.</p>

      <Row className="p-4 rounded square">

        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupBookingnumber">
              <Form.Label>Bokningsnummer</Form.Label>
              <Form.Control type="bookingnumber" placeholder="bokningsnummer.." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>E-postadress</Form.Label>
              <Form.Control type="email" placeholder="e-postadress..." />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className='tradeMarkFooter m-2 mt-4'><Link to="/"><div><Button >Avbryt</Button></div></Link> </Col>
        <Col className='tradeMarkFooter m-2 mt-4'><Link to="/"><div><Button >Avboka</Button></div></Link> </Col>
        </Row>
    </Container>


  )
}


export default CancelBooking;
