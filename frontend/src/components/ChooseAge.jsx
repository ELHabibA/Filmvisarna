import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
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
             
                        
            <Row>
                
               
                <Col className="col-lg-4 bg-secondary rounded p-3">      
                Välj antal vuxna <CounterButton onUpdate={updateAdultValue} />
                Välj antal barn <CounterButton onUpdate={updateKidsValue} />
                Välj antal pensionärer <CounterButton  onUpdate={updateRetiredValue}/>
                </Col>
                
                <p>Ni är {sum} personer. Nr: { adults}</p>
                
            </Row>
        
        </>

    )
}

export default ChooseAge;
