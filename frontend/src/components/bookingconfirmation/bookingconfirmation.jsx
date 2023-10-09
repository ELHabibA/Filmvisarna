import { Container, Row, Col, Image } from "react-bootstrap";
import BookingNumber from '../BookingNumber';

function BookingConfirmation() {
    return (
        <Container className="">

            <Row>
                <Col sm={6} md={12} lg={12} className="bg-secondary p-4 rounded"> 
                <h1>Tack för din bokning!</h1>
                
                <p className="fw-italic">Bokningsbekräftelsen har skickats till din mejl.</p>
                    <Image src="holder.js/200x200" rounded />
                    <div className="fw-bold mb-2">Titel</div>
                    <div className="mb-3">Oppenheimer</div>
                    <div className="fw-bold mb-2">Datum</div>
                    <div className="mb-3">2023-10-05 19:30</div>
                    <div className="fw-bold mb-2">Biljetter</div>
                    <div className="mb-3">
                        <div>2 st vuxna</div>
                        <div>1 st barn</div>
                        <div>1 st pensionär</div>
                    </div>
                    <div className="fw-bold mb-2">Bokningsnummer</div>
                    <div className="mb-3">
                        <BookingNumber/>
                    </div>
                    
                    <div className="fw-bold mb-2">Platser</div>
                    <div className="mb-3">
                        <div>A1, A2, A3</div>
                    </div>
                    <div className="fw-bold mb-2">Email</div>
                    <div className="mb-3">
                        <div>customer@gmail.com</div>
                    </div>
                    <hr />
                    <div className="fw-bold">Totalt: 440 kr</div>

                </Col>
            </Row>
        </Container>
        

    )
}


export default BookingConfirmation;
