import { Outlet } from 'react-router-dom';
import MainMenu from './MainMenu';
import Footer from "./components/Footer/Footer";
// Only import your sass in App (not every component)
import "./sass/main.scss";

// Import some Bootstrap components
import MainMenu from './MainMenu';
import Footer from "./components/Footer/Footer";
import { Container, Row, Col, Button } from 'react-bootstrap';
import BookingForm from "./components/bookingform/bookingform";
import { Container, Row, Col } from 'react-bootstrap';


export default function App() {
  return <>
    <MainMenu />
    <Container className="mt-5 col-3 ">
      <Row>
        <Col>
          <BookingForm />
          <Outlet />
        </Col>
      </Row>
    </Container>
    <footer><Footer /></footer>
  </>;
}