import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom/client'

import { Button, Col } from 'react-bootstrap';

export default function Footer() {
    return <>
        <Container className="fixed-bottom footer" expand="xl" fluid>
            <hr></hr>
            <Row>
                <Col><div> <Button>Boka</Button></div></Col>
                <Col><div><Button>Kontakta oss</Button></div></Col>
            </Row>

            <Row>
                <p className='tradeMarkFooter'>Made by: Team 3 - Elia, Habib, Hampus, Tanya, Artur, Simon & Bobby</p>
            </Row>  

        </Container>
       
    </>;
}

