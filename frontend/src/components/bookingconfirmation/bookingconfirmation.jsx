import { Container, Row, Col, Image } from "react-bootstrap";
import BookingNumber from '../BookingNumber';

function BookingConfirmation() {
    return (
        <Container>

            <Row>
                <Col sm={6} className="bg-secondary p-3 rounded">
                    <Image src="holder.js/200x200" rounded />
                    <div className="fw-bold mb-3">Titel</div>
                    <div className="mb-4">Oppenheimer</div>
                    <div className="fw-bold mb-3">Datum</div>
                    <div className="mb-4">2023-10-05 19:30</div>
                    <div className="fw-bold mb-3">Biljetter</div>
                    <div className="mb-4">
                        
                        <div>Bokningsnummer: <BookingNumber /></div>
                        <div>2 st vuxna</div>
                        <div>1 st barn</div>
                        <div>1 st pensionär</div>
                    </div>
                    <div className="fw-bold mb-3">Platser</div>
                    <div className="mb-4">
                        <div>A1, A2, A3</div>
                    </div>
                    <div className="fw-bold mb-3">Email</div>
                    <div className="mb-4">
                        <div>customer@gmail.com</div>
                    </div>
                    <hr />
                    <div className="fw-bold">Totalt: 440 kr</div>

                </Col>
            </Row>
        </Container>

    )
}

export default BookingConfirmation;
