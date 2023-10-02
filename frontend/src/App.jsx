import { Outlet } from 'react-router-dom';
import "./sass/main.scss";

// Import some Bootstrap components
<<<<<<< Updated upstream
import MainMenu from './MainMenu';
import Footer from "./components/Footer/Footer";
=======

import { Container, Row, Col, Button } from 'react-bootstrap';
>>>>>>> Stashed changes
import BookingForm from "./components/bookingform/bookingform";
import BookingSummary from './components/bookingsummary/bookingsummary';
import FinalizeBooking from './FinalizeBooking';


export default function App() {
  return <>
    <MainMenu />
    <Container className="col-12">
      <Row>
        <Col>
          <FinalizeBooking />
          <Outlet />
        </Col>
      </Row>
    </Container>
    <footer><Footer /></footer>
  </>;
}