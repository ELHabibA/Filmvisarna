import BookingForm from "./components/bookingform/bookingform";
import BookingSummary from "./components/bookingsummary/bookingsummary";
import { Modal } from "react-bootstrap";
import Booking from "./Booking";




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


    const handleClose = () => setShowModal(false);
    console.log(chosenSeats)

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
                        bookingNumber=''
                        price={price}

                    />
                </Modal.Header>
                <Modal.Body>
                    <BookingForm handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FinalizeBooking;