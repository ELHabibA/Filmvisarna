import React, { useState } from "react";

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
            <h1>Välj antal besökare</h1>
            <div>
                <p>{count}</p>
                <button onClick={addPerson}>+</button>
                <button onClick={removePerson}>-</button>
            </div>
        </>
    );
}

export default ChooseAge;
