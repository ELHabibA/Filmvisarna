import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./BioSeats.css";
import FinalizeBooking from "../FinalizeBooking.jsx";

function BioSeats({ sum, bookings, selectedMovieTitle, selectedScreeningTime, auditoriumId }) {
    // States
    const [selectedSeats, setSelectedSeats] = useState([]); // Håller koll på vilka säten som har valts
    const [seatsData, setSeatsData] = useState([]); // Håller data om alla säten
    const [showModal, setShowModal] = useState(false); // Kontrollerar om en modal ska visas eller inte

    // Hämtar data om säten när komponenten laddas
    useEffect(() => {
        fetch('/api/seats')
            .then(response => response.json())
            .then(data => setSeatsData(data))
            .catch(error => console.error(error));
    }, []);
    
    // Funktion för att kontrollera om ett säte är bokat
    const isSeatBooked = (seat) => {
        return bookings.some(booking => {
            return booking.movieTitle === selectedMovieTitle &&
                   booking.screeningTime === selectedScreeningTime &&
                   booking.seatNumbers.split(',').includes(String(seat.id));
        });
    };
    
    // Hanterar logiken för att välja och avvälja säten
    const handleSeatSelection = (seatId) => {
        setSelectedSeats((prevSeats) => {
            if (prevSeats.length < sum) {
                return prevSeats.includes(seatId)
                    ? prevSeats.filter((id) => id !== seatId)
                    : [...prevSeats, seatId];
            } else {
                alert("Du kan inte boka fler platser än antalet valda biljetter!");
                return prevSeats;
            }
        });
    };

    // Ser till att antalet valda säten inte överstiger summan
    useEffect(() => {
        if (selectedSeats.length > sum) {
            setSelectedSeats(prevSeats => prevSeats.slice(0, sum));
        }
    }, [sum]);
    
    // Renderar sätena
    const renderSeats = () => {
        const seatsForCurrentAuditorium = seatsData.filter(seat => seat.auditorium_id === auditoriumId);

        const groupedSeats = seatsForCurrentAuditorium.reduce((acc, seat) => {
            (acc[seat.rowNumber] || (acc[seat.rowNumber] = [])).push(seat);
            return acc;
        }, {});

        return Object.keys(groupedSeats).map(rowNumber => (
            <Row key={rowNumber} className="mb-2 center-seats flex-row">
                {groupedSeats[rowNumber].map(seat => (
                    <Col key={seat.id} xs="auto" className="text-center seat-col">
                        <Button
                            variant={selectedSeats.includes(seat.id) ? "primary" : isSeatBooked(seat) ? "dark" : "secondary"}
                            onClick={() => !isSeatBooked(seat) && handleSeatSelection(seat.id)}
                            className={`seat-btn ${selectedSeats.includes(seat.id) ? "seat-button-primary" : "seat-button-secondary"}`}
                            disabled={isSeatBooked(seat)} // Inaktivera knappen om sätet är bokat
                        >
                        </Button>
                    </Col>
                ))}
            </Row>
        ));
    };

    return (
        <Container className="saloon-container mt-5">
            <FinalizeBooking showModal={showModal} setShowModal={setShowModal} />
            <div className="screen mb-5"></div>
            {renderSeats()}
            <Row className="mt-3 justify-content-center">
                <Col xs="auto">
                    <Button onClick={() => setShowModal(true)}>Fortsätt bokningen</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default BioSeats;
