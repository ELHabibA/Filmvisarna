import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BioSeats.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function BioSeats() {
    const [selected, setSelected] = useState(null);

    const handleClick = (i, j) => {
        setSelected([i, j]);
    };
    //Vi gör en array som är 7x7
    return (
        <Container>
            {[...Array(7)].map((_, i) => (
                <Row key={i} className="no-gutters">
                    {[...Array(7)].map((_, j) => (
                        <Col key={j} xs={1}>
                            <div
                                className={`seat ${selected?.[0] === i && selected?.[1] === j ? 'selected' : ''}`}
                                onClick={() => handleClick(i, j)}
                            ></div>
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}

export default BioSeats;
