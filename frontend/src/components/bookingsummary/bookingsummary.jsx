import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BookingSummary() {
    return (
        <Container>
            <div className="bg-secondary p-4 rounded">
                <Row>
                    <Col sm>
                        <div className="ms-2">
                            <Image src="holder.js/200x200" rounded />
                            <div className="fw-bold mb-3">Titel</div>
                            <div className="mb-4">Oppenheimer</div>
                            <div className="fw-bold mb-3">Datum</div>
                            <div className="mb-4">2023-10-05 19:30</div>
                            <div className="fw-bold mb-3">Biljetter</div>
                            <div className="mb-4">
                                <div>2 st vuxna</div>
                                <div>1 st barn</div>
                                <div>1 st pensionär</div>
                            </div>
                            <div className="fw-bold mb-3">Platser</div>
                            <div className="mb-4">
                                <div>A1, A2, A3</div>
                            </div>
                            <hr />
                            <div className="fw-bold">Totalt: 440 kr</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}

export default BookingSummary;
