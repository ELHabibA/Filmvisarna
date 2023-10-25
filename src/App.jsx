import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import "./sass/main.scss";
import BasicNavbar from "./components/Navbar/Navbar";
import Background from './components/MainSide/Background';
import { Container, Row, Col } from 'react-bootstrap';
import MovieFetch from './components/MovieFetch';
import { useState, useEffect } from 'react';

export default function App() {
  const movies = MovieFetch();

  // check if user is logged and store in state var
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      let userData = await (await fetch('/api/login')).json();
      setUser(userData.error ? null : userData);
    })();
  }, []);

  return !movies.length ? null : (
    <>
      <BasicNavbar user={user} />
      <Container className="mt-5 body">
        <Row>
          <Col className="container-main">
            <Container className="col-12">
              <Row>
                <Col>
                  <Outlet context={{ movies, setUser, user }} />
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
