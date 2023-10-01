// Only import your sass in App (not every component)
import "./sass/main.scss";

// Import some Bootstrap components
import MainMenu from './MainMenu';
import Footer from "./components/Footer/Footer";
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function App() {
  return <>
    <MainMenu />
    <Container className="mt-5">
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
    <footer><Footer /></footer>
  </>;
}