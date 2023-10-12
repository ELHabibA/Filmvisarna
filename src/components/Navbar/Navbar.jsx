import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { pages } from '../../main';

function BasicNavbar() {

  const filteredPages = pages.filter((page) => page.path !== '/detaljsidan');

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Container> 
            <Nav className="navbar-film">
              {filteredPages.map((page) => (
                <Nav.Link key={page.path} as={Link} to={page.path}>
                  {page.label}
                </Nav.Link>
              ))}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
