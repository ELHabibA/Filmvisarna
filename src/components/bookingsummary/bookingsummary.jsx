import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function BookingSummary() {
    const renderTicketInfo = () => (
        <div>
            <div>2 st vuxna</div>
            <div>1 st barn</div>
            <div>1 st pensionär</div>
        </div>
    );

    const renderSeatInfo = () => (
        <div>
            <div>A1, A2, A3</div>
        </div>
    );

    return (
        <Container>
            <Row>
                <Col sm={12} className="bg-secondary p-3 rounded">
                    <div className="fw-bold mb-3">Titel</div>
                    <div className="mb-4">Oppenheimer</div>
                    <div className="fw-bold mb-3">Datum</div>
                    <div className="mb-4">2023-10-05 19:30</div>
                    <div className="fw-bold mb-3">Biljetter</div>
                    <div className="mb-4">{renderTicketInfo()}</div>
                    <div className="fw-bold mb-3">Platser</div>
                    <div className="mb-4">{renderSeatInfo()}</div>
                    <hr />
                    <div className="fw-bold">Totalt: 440 kr</div>
                </Col>
            </Row>
        </Container>
    );
}

export default BookingSummary;
