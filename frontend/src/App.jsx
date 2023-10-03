import { Outlet } from 'react-router-dom';
import MainMenu from './MainMenu';
import Footer from "./components/Footer/Footer";
// Only import your sass in App (not every component)
import "./sass/main.scss";

// Import some Bootstrap components
import Background from './components/MainSide/Background';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MainLayout from './MainLayout';


export default function App() {
  return (
    <>
      <MainMenu />
      <Container className="mt-5">
        <Row>
          <Col>
            <Background />
          </Col>
        </Row>
        <Row>
          <Col>
            <MainLayout />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}





