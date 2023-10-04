import { Outlet } from 'react-router-dom';
import "./sass/main.scss";

// Import some Bootstrap components
import Background from './components/MainSide/Background';
import MainLayout from './MainLayout';
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
            <Container className="col-12">
              <Row>
                <Col>

                  <Outlet />

                </Col>
              </Row>
              <Background />
              <Row>
                <Col>
                  <MainLayout />
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
