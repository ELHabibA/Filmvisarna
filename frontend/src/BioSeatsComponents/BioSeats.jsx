import React, { useState, useEffect, useMemo } from "react";
import auditoriumsData from "./SeatsData.js";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./BioSeats.css";
import ticketsData from './Tickets.js';

function BioSeats() {
    const [bookedTickets, setBookedTickets] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [auditoriumId, setAuditoriumId] = useState(1);

    const totalTickets = useMemo(() =>
        ticketsData.kids + ticketsData.adults + ticketsData.elderly
        , []);

    useEffect(() => {
        // Här kan man ändra manuellt "Booked seats" (Tillfälligt)
        setBookedTickets([1, 2, 3, 15, 16,44,45,23,61,72,71,77,78]);
    }, []);

    const handleSeatSelection = (seatId) => {
        setSelectedSeats(prev =>
            selectedSeats.includes(seatId)
                ? prev.filter(id => id !== seatId)
                : (selectedSeats.length < totalTickets) ? [...prev, seatId] : prev
        );
    };

    const renderSeats = () => {
        const seatsForCurrentAuditorium = auditoriumsData.filter(seat => seat.auditoriumId === auditoriumId);

        const groupedSeats = seatsForCurrentAuditorium.reduce((acc, seat) => {
            (acc[seat.rowNumber] || (acc[seat.rowNumber] = [])).push(seat);
            return acc;
        }, {});

        for (let row in groupedSeats) {
            groupedSeats[row].sort((a, b) => a.seatNumber - b.seatNumber);
        }

        return Object.keys(groupedSeats).map(rowNumber => (
            <Row key={rowNumber} className="mb-2 center-seats flex-row">
                {groupedSeats[rowNumber].map(seat => (
                    <Col key={seat.id} xs="auto" className="text-center seat-col">
                        <Button
                            variant={selectedSeats.includes(seat.id) ? "primary" : "secondary"}
                            disabled={bookedTickets.includes(seat.id)}
                            onClick={() => handleSeatSelection(seat.id)}
                            className="seat-btn"
                        >
                            {seat.seatNumber}
                        </Button>
                    </Col>
                ))}
            </Row>
        ));
    };

    return (
        <Container className="saloon-container mt-5">
            <div className="screen mb-5">Screen</div>
            {renderSeats()}
            <Button onClick={() => setAuditoriumId(auditoriumId === 1 ? 2 : 1)}>Toggle Auditorium</Button>
        </Container>
    );
}

export default BioSeats;
