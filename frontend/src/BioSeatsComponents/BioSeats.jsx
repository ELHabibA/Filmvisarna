import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BioSeats.css';

function BioSeats() {
    // Initialisera alla säten som obokade (false)
    const initialSeats = Array(7).fill(null).map(() => Array(7).fill(false));

    // State för alla säten
    const [seats, setSeats] = useState(initialSeats);

    // Hantera klick på ett säte
    const handleSeatClick = (i, j) => {
        // Skapa en kopia av nuvarande säten
        const newSeats = seats.map(row => row.slice());
        
        // Växla bokningsstatus för det klickade sätet
        newSeats[i][j] = !newSeats[i][j];
        
        // Uppdatera state med de nya sätena
        setSeats(newSeats);
    };

    return (
        <Container>
            {seats.map((row, i) => (
                <Row key={i} className="no-gutters">
                    {row.map((seat, j) => (
                        <Col key={j} xs={1}>
                            <div 
                                className={`seat ${seat ? 'booked' : ''}`}
                                onClick={() => handleSeatClick(i, j)}
                            ></div>
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}

export default BioSeats;
