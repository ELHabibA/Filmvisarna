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
            onUpdate(numOfSeats - 1);
            return numOfSeats - 1;
        });

    }
    
    return (
        <>
       
            <button onClick={addPerson}>+</button>
            <button onClick={removePerson}>-</button> {count}

       </>         
    );
}

export default CounterButton;