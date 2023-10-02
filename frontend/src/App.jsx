import "./sass/main.scss";
import BioSeats from './BioSeatsComponents/BioSeats.jsx'
import MainMenu from './MainMenu';
import Footer from "./components/Footer/Footer";
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function App() {
    return <>
        <header></header>
        <main>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <MainMenu />
                        <BioSeats />
                    </Col>
                    
                </Row>
               
            </Container>
        </main>
    <footer></footer>
  </>;
}