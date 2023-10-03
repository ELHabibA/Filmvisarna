import { Outlet } from 'react-router-dom';
import "./sass/main.scss";
import MainMenu from './MainMenu';
import Footer from "./components/Footer/Footer";
import { Container, Row, Col } from 'react-bootstrap';
import FinalizeBooking from './FinalizeBooking';
import BasicNavbar from './components/Navbar/Navbar'


export default function App() {
  return (
    <>
      <BasicNavbar />
      <Container className="mt-5 body">
        <Row>
          <Col className="container-main">
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
          </Col>
        </Row>
      </Container>
    </>
  );
}
