import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CounterButton from "./CounterButton";


//BEhöver lägga till en count per biljettyp
//Eller en räknare per grupp som sen räknas ihop.
function ChooseAge() {

    const [sum, setSum] = useState(0);
    const [adults, setAdults] = useState(0);
    const [kids, setKids] = useState(0);
    const [retired, setRetired] = useState(0);

    useEffect(() => {
        setSum(adults + kids + retired);
    }, [adults, kids, retired]);

    
    function updateAdultValue(newValue) {
        setAdults(newValue);
    }

    function updateKidsValue(newValue) {
        setKids(newValue);
    }

    function updateRetiredValue(newValue) {
        setRetired(newValue);
    }

    return (
        <>
             
            <Container className="col-lg-6 bg-secondary rounded p-3">
                <Row><Col>Välj antal vuxna</Col><Col><CounterButton onUpdate={updateAdultValue} /></Col></Row>
                <hr />
                <Row><Col>Välj antal barn </Col><Col><CounterButton onUpdate={updateKidsValue} /></Col></Row>
                <hr />
                <Row><Col>Välj antal pensionärer</Col><Col><CounterButton onUpdate={updateRetiredValue} /></Col></Row>
                <hr />
                <p>Ni är {sum} personer. Nr: { adults}</p>
            </Container>
            
        
        </>

    )
}

export default ChooseAge;
