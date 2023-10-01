import React, { useState, useEffect } from "react";
import auditoriumsData from "./SeatsData.js";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./BioSeats.css";

function BioSeats() {
    const [bookedTickets, setBookedTickets] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        // Mock: Fetching booked tickets from movieSchedule (can be replaced with actual data)
        const selectedShow = JSON.parse(sessionStorage.getItem("selectedShow"));
        const bookedSeatsForShow = []; // For simplicity, this is an empty array; replace with actual booked seats data if needed
        setBookedTickets(bookedSeatsForShow);
    }, []);

    const handleSeatSelection = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
        } else {
            setSelectedSeats((prev) => [...prev, seatId]);
        }
    };

    const renderSeats = () => {
        const seatsPerRow = [8, 9, 10, 10, 10, 10, 12, 12];
        const sortedAuditoriumData = auditoriumsData.sort((a, b) =>
            a.rowNumber !== b.rowNumber ? a.rowNumber - b.rowNumber : a.seatNumber - b.seatNumber
        );

        let seatIndex = 0;

        return seatsPerRow.map((numSeats, rowIndex) => {
            const rowSeats = sortedAuditoriumData.slice(seatIndex, seatIndex + numSeats);
            seatIndex += numSeats;

            return (
                <Row key={rowIndex} className="mb-2 center-seats flex-row">
                    {rowSeats.map((seat) => (
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
            );
        });
    };

    return (
        <Container className="saloon-container mt-5">
            <div className="screen mb-5">Screen</div>
            {renderSeats()}
        </Container>
    );
}

export default BioSeats;
