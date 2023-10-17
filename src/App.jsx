import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import "./sass/main.scss";
import BasicNavbar from "./components/Navbar/Navbar";
import Background from './components/MainSide/Background';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';

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
            </Container>
            <footer><Footer /></footer>
          </Col>
        </Row>
      </Container>
    </>
  );
}
