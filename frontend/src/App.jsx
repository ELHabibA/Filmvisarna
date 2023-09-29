// Only import your sass in App (not every component)
import "./sass/main.scss";

// Import some Bootstrap components
import MainMenu from './MainMenu';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BookingForm from "./components/bookingform/bookingform";

export default function App() {
  return <>
    <MainMenu />
    <Container className="mt-5 col-3 ">
      <Row>
        <Col>
       <BookingForm/>
        </Col>
      </Row>
    </Container>
  </>;
}