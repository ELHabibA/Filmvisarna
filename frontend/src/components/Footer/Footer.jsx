import { Container, Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <Container className='container-fluid fixed-bottom'>
                  
            <hr></hr>
            <Row>
                <Col className='tradeMarkFooter m-2'><Link to="/boka"><div><Button >Boka</Button></div></Link> </Col>
                <Col className='tradeMarkFooter m-2'><div><Link to="/kontakt"><Button>Kontakta oss</Button></Link></div></Col>
            </Row>
            <Row className='tradeMarkFooter'><img src="../public/logo.png" className='logoSize mx-auto d-block'></img></Row> 
            <Row className='tradeMarkFooter'>
                <p>Made by: Team 3 - Elia, Habib, Hampus, Tanya, Artur, Simon & Bobby</p>
            </Row>
        </Container>
    );
}