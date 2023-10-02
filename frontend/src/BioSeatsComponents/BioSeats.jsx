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
        // Grouping seats by rowNumber
        const groupedSeats = auditoriumsData.reduce((acc, seat) => {
            if (!acc[seat.rowNumber]) {
                acc[seat.rowNumber] = [];
            }
            acc[seat.rowNumber].push(seat);
            return acc;
        }, {});

        // Sorting seats within each row
        for (let row in groupedSeats) {
            groupedSeats[row].sort((a, b) => a.seatNumber - b.seatNumber);
        }

        // Rendering rows based on grouped data
        return Object.keys(groupedSeats).map((rowNumber) => (
            <Row key={rowNumber} className="mb-2 center-seats flex-row">
                {groupedSeats[rowNumber].map((seat) => (
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
        </Container>
    );
}

export default BioSeats;
