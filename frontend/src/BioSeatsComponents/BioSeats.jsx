import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BioSeats.css';

const CinemaSeat = ({ isAvailable, toggleSeat }) => {
    return (
        <div
            className={`seat ${isAvailable ? 'available' : 'booked'}`}
            onClick={toggleSeat}
        ></div>
    );
};

function CinemaLayout() {
    // Initialize all seats as available (true in this case, to match the first code's convention)
    const initialSeats = Array(7).fill(null).map(() => Array(7).fill(true));

    // State for all seats
    const [seats, setSeats] = useState(initialSeats);

    // Handle click on a seat
    const handleSeatClick = (i, j) => {
        // Create a copy of the current seats
        const newSeats = seats.map(row => row.slice());

        // Toggle booking status for the clicked seat
        newSeats[i][j] = !newSeats[i][j];

        // Update state with the new seats
        setSeats(newSeats);
    };

    return (
        <Container className="container">
            <h2 className="title">Bio BokingSeat</h2>
            {seats.map((row, i) => (
                <Row key={i}>
                    {row.map((seat, j) => (
                        <Col key={j} xs={1} md="auto">
                            <CinemaSeat
                                isAvailable={seat}
                                toggleSeat={() => handleSeatClick(i, j)}
                            />
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}

export default CinemaLayout;
