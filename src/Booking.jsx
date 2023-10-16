// Detta kan vara boknings-sidan om vi vill det
import React from 'react';
import { useParams } from 'react-router-dom';
import BioSeats from './BioSeatsComponents/BioSeats';

const Booking = () => {
    const { selectedDate } = useParams();

    return (
        <>
            <p>Valt datum: {selectedDate}</p>
            <BioSeats />
        </>
    );
};

export default Booking;
