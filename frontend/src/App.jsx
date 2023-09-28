// Only import your sass in App (not every component)
import "./sass/main.scss";

// Import some Bootstrap components
import BasicNavbar from "./components/Navbar/Navbar";
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function App() {
  return <>
    <BasicNavbar/>
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Hello!</h1>
          <p>1234</p>
        </Col>
      </Row>
    </Container>
  </>;
}