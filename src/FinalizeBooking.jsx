import BookingForm from "./components/bookingform/bookingform";
import BookingSummary from "./components/bookingsummary/bookingsummary";
import { Modal } from "react-bootstrap";
import { useState } from 'react';


function FinalizeBooking({
    selectedMovieTitle,
    screeningDatetime,
    showModal,
    setShowModal,
    price,
    ticketTypes,
    chosenSeats,
    seatsForCurrentAuditorium
}) {

    const [email, setEmail] = useState('');

    const handleClose = () => setShowModal(false);

    const data = {
        title: { selectedMovieTitle },
        date: { screeningDatetime },
        ticketTypes: { ticketTypes },
        chosenSeats: { chosenSeats },
        seatsForCurrentAuditorium: { seatsForCurrentAuditorium },
        price: { price },
        email: { email }
    }


    /*data = {
        email, screeningId, seatsIds: []
    }*/

    // const response = postData('/api/makeBooking', data)

    return (
        <>
            <Modal show={showModal}>
                <Modal.Header>
                    <BookingSummary
                        title={selectedMovieTitle}
                        date={screeningDatetime}
                        ticketTypes={ticketTypes}
                        chosenSeats={chosenSeats}
                        seatsForCurrentAuditorium={seatsForCurrentAuditorium}
                        price={price}
                        email={setEmail}

                    />
                </Modal.Header>
                <Modal.Body>
                    <BookingForm handleClose={handleClose} setEmail={setEmail} email={email} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default FinalizeBooking;


async function postData(url = "", data = {}) {

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};


