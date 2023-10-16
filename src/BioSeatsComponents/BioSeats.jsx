import React, { useState, useEffect, useMemo } from "react";
import auditoriumsData from "./SeatsData.js";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./BioSeats.css";
import ticketsData from './Tickets.js';
import { Link } from 'react-router-dom';
import ChooseAge from '../components/ChooseAge';
import FinalizeBooking from "../FinalizeBooking.jsx";

function BioSeats() {
    // State får att hålla reda på bokade platser, valda platser och auditorium ID
    const [bookedTickets, setBookedTickets] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [auditoriumId, setAuditoriumId] = useState(1);

    const [showModal, setShowModal] = useState(false);

    const [sumFromChooseAge, setSumFromChooseAge] = useState(0);

    // Beräknar totalt antal biljetter med useMemo f�r att undvika on�diga ber�kningar
    const totalTickets = useMemo(() =>
        ticketsData.kids + ticketsData.adults + ticketsData.elderly
        , []);

    const seatsSelected = selectedSeats.length > 0;

    useEffect(() => {
        console.log('Sum from ChooseAge:', sumFromChooseAge);
        setBookedTickets([]);
    }, [sumFromChooseAge]);


    const handleSeatSelection = (seatId) => {
        setSelectedSeats((prev) =>
            prev.includes(seatId) // Om platsen redan är vald, avmarkera den
                ? prev.filter((id) => id !== seatId)
                : prev.length < sumFromChooseAge
                    ? [...prev, seatId]
                    : prev
        );
    };

    const renderSeats = () => {
        // Filtrera ut platserna f�r det aktuella auditoriet
        const seatsForCurrentAuditorium = auditoriumsData.filter(seat => seat.auditoriumId === auditoriumId);

        // Gruppera platserna per rad
        const groupedSeats = seatsForCurrentAuditorium.reduce((acc, seat) => {
            (acc[seat.rowNumber] || (acc[seat.rowNumber] = [])).push(seat);
            return acc;
        }, {});

        // Sortera platserna per rad
        for (let row in groupedSeats) {
            groupedSeats[row].sort((a, b) => a.seatNumber - b.seatNumber);
        }

        // Rendera platserna som knappar
        return Object.keys(groupedSeats).map(rowNumber => (
            <Row key={rowNumber} className="mb-2 center-seats flex-row">
                {groupedSeats[rowNumber].map(seat => (
                    <Col key={seat.id} xs="auto" className="text-center seat-col">
                        <Button
                            variant={selectedSeats.includes(seat.id) ? "primary" : "secondary"}
                            onClick={() => handleSeatSelection(seat.id)}
                            className={`seat-btn ${selectedSeats.includes(seat.id) ? "seat-button-primary" : "seat-button-secondary"}`}
                        >
                            {/*seat.seatNumber*/}
                        </Button>
                    </Col>
                ))}
            </Row>
        ));
    };

    // Rendera screen och knappar 
    return (
        <Container className="saloon-container mt-5">
            <FinalizeBooking showModal={showModal} setShowModal={setShowModal} />
            <ChooseAge onSumChange={setSumFromChooseAge} />
            <div className="screen mb-5"></div>
            {renderSeats()}
            <Row className="mt-3 justify-content-center">
                <Col xs="auto">
                    <Button onClick={() => setAuditoriumId(auditoriumId === 1 ? 2 : 1)}>Toggle Auditorium</Button>
                </Col>
                <Col xs="auto">
                    <Button onClick={() => setShowModal(true)}>Fortsätt bokningen</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default BioSeats;
