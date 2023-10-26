import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function BookingSummary({ title, date, price, ticketTypes, chosenSeats, seatsForCurrentAuditorium }) {
    const { adults, kids, retired } = ticketTypes;
    const niceTicketTypes = `${adults} st Vuxen, ${kids} st Barn, ${retired} st pensionär`;
    const niceSeats = chosenSeats
        .map(id => seatsForCurrentAuditorium.find(x => x.id === id))
        .map(seat => `Rad: ${seat.rowNumber} Stol: ${seat.seatNumber} | `);

<<<<<<< Updated upstream

    // console.log('Niceseats:', niceSeats)
    // console.log('seatsForCurrentAuditorium:', seatsForCurrentAuditorium)
    // console.log('Chosen seats:', chosenSeats)
=======
>>>>>>> Stashed changes
    return (
        <Container>
            <Row>
                <Col sm={12} className="bg-secondary p-3 rounded">
                    <div className="fw-bold mb-3">Titel</div>
                    <div className="mb-4">{title}</div>
                    <div className="fw-bold mb-3">Datum</div>
                    <div className="mb-4">{date}</div>
                    <div className="fw-bold mb-3">Biljetter</div>
                    <div className="mb-4">{niceTicketTypes}</div>
                    <div className="fw-bold mb-3">Platser</div>
                    <div className="mb-4">{niceSeats}</div>
                    <hr />
                    <div className="fw-bold">Totalt: {price} kr</div>
                </Col>
            </Row>
        </Container>
    );
}
export default BookingSummary;
