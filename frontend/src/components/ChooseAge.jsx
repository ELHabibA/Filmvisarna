import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


//BEhöver lägga till en count per biljettyp
//Eller en räknare per grupp som sen räknas ihop.
function ChooseAge() {
    let [count, setCount] = useState(0);

    function addPerson() {
        setCount(count + 1);
    }

    function removePerson() {
        setCount(count - 1);
    }
    
    return (
        <>
            <Row>
                <h3>Välj biljetter</h3>
                <div className='bg-secondary rounded p-3'>
                    
                    <Col className=" col-lg-2">
                        
                        Välj antal vuxna:
                            <button onClick={addPerson}>+</button>
                            <button onClick={removePerson}>-</button> {count}
                        </Col>
                     <Row>
                        <Col className='mt-3 mb-3'>
                            <Col className=" col-lg-2">
                        
                        Välj antal barn:
                            <button onClick={addPerson}>+</button>
                            <button onClick={removePerson}>-</button> {count}
                        </Col>
                        </Col></Row>
                    
                    
                    
                
                </div>
            </Row>
        </>
    );
}

export default ChooseAge;
