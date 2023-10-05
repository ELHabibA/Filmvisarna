import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import "./sass/main.scss";
import BasicNavbar from "./components/Navbar/Navbar";
import { Container, Row, Col } from 'react-bootstrap';

export default function App() {
  return <>
    <BasicNavbar />
    <Container className="mt-5 body">
      <Row>
        <Col className="container-main">
          <Outlet />
        </Col>
      </Row>
    </Container>
    <footer><Footer /></footer>
  </>;
}