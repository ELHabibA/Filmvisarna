import { Outlet } from 'react-router-dom';
import MainMenu from './MainMenu';
import Footer from "./components/Footer/Footer";
// Only import your sass in App (not every component)
import "./sass/main.scss";

// Import some Bootstrap components
import { Container, Row, Col } from 'react-bootstrap';

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