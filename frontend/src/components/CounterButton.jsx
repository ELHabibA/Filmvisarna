import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";
import { FaMinus } from "react-icons/fa";

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
       
            <button className="counterButton" onClick={addPerson}><HiPlus /></button>
            <button className="counterButton" onClick={removePerson}><HiMinus /></button> {count} st

       </>         
    );
}

export default CounterButton;