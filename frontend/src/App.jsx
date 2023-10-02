import { Outlet } from 'react-router-dom';
import MainMenu from './MainMenu';
import Footer from "./components/Footer/Footer";
import "./sass/main.scss";
import BasicNavbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Container, Row, Col } from 'react-bootstrap';
import ChooseAge from './components/ChooseAge';

export default function App() {
  return <>
    <BasicNavbar />
    <Container className="mt-5 body">
      <Row>
        <Col className="container-main">
          <Outlet />
          <ChooseAge />
        </Col>
      </Row>
    </Container>
    <footer><Footer /></footer>
  </>;
}