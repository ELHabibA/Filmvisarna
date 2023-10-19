import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./BioSeats.css";
import FinalizeBooking from "../FinalizeBooking.jsx";
import Booking from "../Booking";

function BioSeats({ sum }) {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [auditoriumId, setAuditoriumId] = useState(1);
    const [seatsData, setSeatsData] = useState([]); 
    //const [sumFromChooseAge, setSumFromChooseAge] = useState(0);
    const [showModal, setShowModal] = useState(false);

 
    useEffect(() => {
        fetch('/api/seats')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Seats Data:', data);  // Log data for debugging
                setSeatsData(data);
            })
            .catch(error => console.error('There was a problem with your fetch operation:', error));
    }, []);

const handleSeatSelection = (seatId) => {
    setSelectedSeats((prevSeats) => {
        if (prevSeats.length < sum) {
           
            return prevSeats.includes(seatId)
                ? prevSeats.filter((id) => id !== seatId)
                : [...prevSeats, seatId];
        } else {
             //Gör något annat än en alert??
            alert("Du kan inte boka fler platser än tillåtet!");
            return prevSeats;
        }
    });
    };
        useEffect(() => {
        if (selectedSeats.length > sum) {
            setSelectedSeats(prevSeats => prevSeats.slice(0, sum));
        }
    }, [sum]);

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
                            variant={selectedSeats.includes(seat.id) ? "primary" : "secondary"}
                            onClick={() => handleSeatSelection(seat.id)}
                            className={`seat-btn ${selectedSeats.includes(seat.id) ? "seat-button-primary" : "seat-button-secondary"}`}
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
            {/* <ChooseAge onSumChange={setSumFromChooseAge} /> */}<p>Sum från ChooseAge: {sum}</p>
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
