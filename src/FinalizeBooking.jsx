import BookingForm from "./components/bookingform/bookingform";
import BookingSummary from "./components/bookingsummary/bookingsummary";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";




function FinalizeBooking(props) {

    const { showModal, setShowModal } = props;

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Fortsätt bokningen
            </Button>
            <Modal show={showModal}>
                <Modal.Header>
                    <BookingSummary />
                </Modal.Header>
                <Modal.Body>
                    <BookingForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Avbryt
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Boka
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FinalizeBooking;
