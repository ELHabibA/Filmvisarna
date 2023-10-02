import { Outlet } from 'react-router-dom';
import MainMenu from './MainMenu';
import Footer from "./components/Footer/Footer";
import "./sass/main.scss";
import BasicNavbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Container, Row, Col } from 'react-bootstrap';

export default function App() {
  return <>
    <BasicNavbar/>
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