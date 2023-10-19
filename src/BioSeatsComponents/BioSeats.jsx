import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./BioSeats.css";
import { Link } from 'react-router-dom';
import ChooseAge from '../components/ChooseAge';
import FinalizeBooking from "../FinalizeBooking.jsx";

function BioSeats() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [auditoriumId, setAuditoriumId] = useState(1);
    const [seatsData, setSeatsData] = useState([]); 
    const [sumFromChooseAge, setSumFromChooseAge] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [bookings, setBookings] = useState([]); // Ny state-variabel för bokningar

    useEffect(() => {
        fetch('/api/seats')
            .then(response => response.json())
            .then(data => setSeatsData(data))
            .catch(error => console.error(error));

        fetch('/api/bookingsNice')
            .then(response => response.json())
            .then(data => setBookings(data))
            .catch(error => console.error(error));
    }, []);

  const isSeatBooked = (seat) => {
    const booked = bookings.some(booking => {
        const isSameAuditorium = booking.name === "Stora Salongen"; // Modify as needed
        const isSameScreeningTime = booking.screeningTime === "2023-10-08T08:00:00.000Z"; // Modify as needed
        const isSeatBooked = booking.seatNumbers.split(',').includes(String(seat.id));
        
        if (isSameAuditorium && isSameScreeningTime && isSeatBooked) {
            console.log(`Seat ${seat.id} is booked`);
        }
        
        return isSameAuditorium && isSameScreeningTime && isSeatBooked;
    });

    if (!booked) {
        console.log(`Seat ${seat.id} is not booked`);
    }
    
    return booked;
};
    const handleSeatSelection = (seatId) => {
        setSelectedSeats((prev) =>
            prev.includes(seatId)
                ? prev.filter((id) => id !== seatId)
                : [...prev, seatId]
        );
    };

    const renderSeats = () => {
        // Modified this line to match the attribute name from the data
        const seatsForCurrentAuditorium = seatsData.filter(seat => seat.auditorium_id === auditoriumId);

        // Log for debugging purposes
        console.log('Seats for current auditorium:', seatsForCurrentAuditorium);

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
                            {seat.id}
                        </Button>
                    </Col>
                ))}
            </Row>
        ));
    };

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
