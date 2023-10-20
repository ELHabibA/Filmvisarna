import BookingForm from "./components/bookingform/bookingform";
import BookingSummary from "./components/bookingsummary/bookingsummary";
import { Modal } from "react-bootstrap";
import Booking from "./Booking";




function FinalizeBooking({ selectedMovieTitle, formattedDateTime, showModal, setShowModal }) {


    const handleClose = () => setShowModal(false);


    return (
        <>
            <Modal show={showModal}>
                <Modal.Header>
                    <BookingSummary
                        title={selectedMovieTitle}
                        date={formattedDateTime}
                        ticketType=''
                        seats=''
                        bookingNumber=''
                        price=''

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