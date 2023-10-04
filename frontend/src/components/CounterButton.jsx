import React, { useState } from "react";
//import { Container, Row, Col } from "react-bootstrap";

function CounterButton({onUpdate}) {
    let [count, setCount] = useState(0);

    function addPerson() {
        setCount(numOfSeats => {
            
            onUpdate(numOfSeats + 1); 
            return numOfSeats + 1;
        });

    }
  
    function removePerson() {
        setCount(numOfSeats => {
            const updatedSeats = numOfSeats > 0 ? numOfSeats - 1 : 0
            onUpdate(updatedSeats)
            return updatedSeats;
        });

    }
    
    return (
        <>
       
            <button className="counterButton" onClick={addPerson}>+</button>
            <button className="counterButton" onClick={removePerson}>-</button> {count}

       </>         
    );
}

export default CounterButton;