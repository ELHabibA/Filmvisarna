import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookingConfirmation() {
    return (
        <Container sm md lg className="bg-secondary p-4 rounded square">
            <h1 className="mb-4">Tack för din bokning!</h1>
            <p className="mb-5">Bokningsbekräftelsen har skickats till din mejl.</p>

            <Row className="p-4 rounded square border border-white">
                <Col>
                    <InfoRow title="Titel" content="Oppenheimer" />
                    <InfoRow title="Biljetter" content="2 st vuxna, 2 st barn, 1 st pensionär" />
                    <InfoRow title="Email" content="customer@gmail.com" />
                    <InfoRow title="Pris" content="430 kr" />
                </Col>
                <Col>
                    <InfoRow title="Datum" content="2023-10-05 19:30" />
                    <InfoRow title="Bokningsnummer" />
                    <InfoRow title="Platser" content="A1, A2, A3" />
                </Col>
            </Row>
            <Row>
                <Col className="tradeMarkFooter m-2 mt-4">
                    <Link to="/">
                        <div>
                            <Button>Gå Tillbaka</Button>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

function InfoRow({ title, content }) {
    return (
        <div>
            {title && <div className="fw-bold mb-2">{title}</div>}
            {content && <div className="mb-3">{content}</div>}
        </div>
    );
}

export default BookingConfirmation;
