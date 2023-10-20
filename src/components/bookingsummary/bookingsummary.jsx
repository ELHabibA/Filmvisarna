import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import populateBookingSummary from "../../Booking";

function BookingSummary({ title, date, ticketType, seats, bookingNumber, price }) {
    title = populateBookingSummary.title;
    date = populateBookingSummary.date;


    return (
        <Container>
            <Row>
                <Col sm={12} className="bg-secondary p-3 rounded">
                    <div className="fw-bold mb-3">Titel</div>
                    <div className="mb-4">{title}</div>
                    <div className="fw-bold mb-3">Datum</div>
                    <div className="mb-4">{date}</div>
                    <div className="fw-bold mb-3">Biljetter</div>
                    <div className="mb-4">{ticketType}</div>
                    <div className="fw-bold mb-3">Platser</div>
                    <div className="mb-4">{seats}</div>
                    <div className="fw-bold mb-3">Bokningsnummer</div>
                    <div className="mb-4">{bookingNumber}</div>
                    <hr />
                    <div className="fw-bold">Totalt: {price} kr</div>
                </Col>
            </Row>
        </Container>
    );
}
export default BookingSummary;
