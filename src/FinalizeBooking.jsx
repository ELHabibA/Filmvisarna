import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookingForm from "./components/bookingform/bookingform";
import BookingSummary from "./components/bookingsummary/bookingsummary";


function FinalizeBooking() {
    return (

        <Container className="mt-5">
            <Row>
                <Col md={6} className="mb-3">
                    <BookingSummary />
                </Col>
                <Col md={6} className="mb-3">
                    <BookingForm />
                </Col>
            </Row>
        </Container>
    )
}

export default FinalizeBooking;
