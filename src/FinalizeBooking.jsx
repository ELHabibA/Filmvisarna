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
    seatsForCurrentAuditorium,
    screeningId
}) {

    const [email, setEmail] = useState('');

    const handleClose = () => setShowModal(false);

    async function book(e) {
        e.preventDefault(); // do not reload page
        const data = {
            email,
            screeningId: +screeningId,
            seatIds: chosenSeats,
            seatTypes: Object.fromEntries(
                Object.entries(ticketTypes).map(([key, val]) => {
                    let dict = { adults: 1, kids: 2, retired: 3 };
                    return [dict[key] + '', val];
                }))
        }
        let result = await postData('/api/makeBooking', data);
    
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
                    <BookingForm handleClose={handleClose} setEmail={setEmail} email={email} book={book} />
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


