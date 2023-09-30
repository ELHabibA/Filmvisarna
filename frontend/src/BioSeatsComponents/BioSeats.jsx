import React, { useState, useEffect } from "react";
// Importing the provided JSON data
import auditoriumsData from "./SeatsData.js";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
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
        const rows = {};
        auditoriumsData.forEach((seat) => {
            if (!rows[seat.rowNumber]) {
                rows[seat.rowNumber] = [];
            }
            rows[seat.rowNumber].push(seat);
        });

        return Object.values(rows).map((rowSeats, idx) => (
            <Row key={idx} className="mb-2">
                {rowSeats.map((seat) => (
                    <Col key={seat.id} className="text-center">
                        <Button
                            variant={selectedSeats.includes(seat.id) ? "primary" : "secondary"}
                            disabled={bookedTickets.includes(seat.id)}
                            onClick={() => handleSeatSelection(seat.id)}
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
        </Container>
    );
}

export default BioSeats;