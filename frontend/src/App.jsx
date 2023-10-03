// Only import your sass in App (not every component)
import "./sass/main.scss";

// Import some Bootstrap components
import MainMenu from './MainMenu';
import Footer from "./components/Footer/Footer";
import "./sass/main.scss";
import BasicNavbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BioSeats from './BioSeatsComponents/BioSeats.jsx'
import { Container, Row, Col } from 'react-bootstrap';

export default function App() {
  return <>
    <BasicNavbar />
    <Container className="mt-5 body">
      <Row>
        <Col>
                  <h1>Hello!</h1>
                  <BioSeats />
          <p>There you are...</p>
        </Col>
      </Row>
    </Container>
    <footer><Footer /></footer>
  </>;
}