import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


function BookingConfirmation() {
    return (
        <Container sm={true} md={true} lg={true} className="bg-secondary p-4 rounded square">

            <h1 className="mb-4">Tack för din bokning!</h1>
            <p className="mb-5">Bokningsbekräftelsen har skickats till din mejl.</p>

            <Row className="p-4 rounded square border border-white">
            

            
                <Col> 
                    <div className="fw-bold mb-2">Titel</div>
                    <div className="mb-3">Oppenheimer</div>
                    <div className="fw-bold mb-2">Biljetter</div>
                    <div className="mb-3">
                        <div>2 st vuxna, 2 st barn, 1st pensionär</div>
                    </div>
                    <div className="fw-bold mb-2">Email</div>
                    <div className="mb-3">
                        <div>customer@gmail.com</div>
                    </div>
                    <div className="fw-bold mb-2">Pris</div>
                    <div className="mb-3">
                        <div>430 kr </div>
                    </div>
                </Col>

                <Col>
                    <div className="fw-bold mb-2">Datum</div>
                    <div className="mb-3">2023-10-05 19:30</div>

                    <div className="fw-bold mb-2">Bokningsnummer</div>
                    <div className="mb-3">
                        {/* <BookingNumber/> */}
                    </div>

                    <div className="fw-bold mb-2">Platser</div>
                    <div className="mb-3">
                        <div>A1, A2, A3</div>
                    </div>
                </Col>
            </Row>
            <Row>
            <Col className='tradeMarkFooter m-2 mt-4'><Link to="/"><div><Button >Gå Tillbaka</Button></div></Link> </Col></Row>
        </Container>
        

    )
}


export default BookingConfirmation;
