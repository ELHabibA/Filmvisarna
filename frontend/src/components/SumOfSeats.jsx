import React, { useState } from "react";
import ChooseAge from "./ChooseAge";
import BioSeats from "../BioSeatsComponents/BioSeats";

function SumOfSeats() {
    const [sum, setSum] = useState(0);

    return (
        <>
            <ChooseAge setSum={setSum} />
            <BioSeats sum={sum} />
        </>

    );
}

export default SumOfSeats;