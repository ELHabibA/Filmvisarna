import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CounterButton from "./CounterButton";
import { updateValue } from "../utilities/UpdateValue";
import useSetSumAndPrice  from "../utilities/useSetSumAndPrice";


function ChooseAge({ onSumChange }) {
    
    const [adults, setAdults] = useState(0);
    const [kids, setKids] = useState(0);
    const [retired, setRetired] = useState(0);
    const [sum, setSum] = useState(0);
    
    useSetSumAndPrice(adults, kids, retired, onSumChange);
    let price = (adults * 140 + kids * 80 + retired * 120);

    return (
        <>
             
            <Container className="col-lg-6 bg-secondary rounded p-3">
                <p className="text-center">Välj biljetter</p>
                <Row><Col>Vuxen 140kr:</Col><Col><CounterButton onUpdate={(newValue) => updateValue('adults', newValue, setAdults, setKids, setRetired)}  max={sum}/></Col></Row>
                <hr />
                <Row><Col>Barn 80kr:</Col><Col><CounterButton onUpdate={(newValue) => updateValue('kids', newValue, setAdults, setKids, setRetired)} max={sum}/></Col></Row>
                <hr />
                <Row><Col>Pensionär 120kr:</Col><Col><CounterButton onUpdate={(newValue) => updateValue('retired', newValue, setAdults, setKids, setRetired)} max={sum}/></Col></Row>
                <hr />
                <p>Du vill beställa {adults + kids + retired} biljetter</p>
                Totala priset: {price.toLocaleString('sv-SE')} kr
            </Container>
            
        </>

    )
}

export default ChooseAge;
