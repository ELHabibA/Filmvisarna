import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { pages } from '../../main';

function BasicNavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        {/* Navbar Brand with Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.png" // Replace with the correct path to your logo
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Your Logo Alt Text"
          />
        </Navbar.Brand>

        {/* Navbar Toggler for responsive design */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Collapsible Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-film">
            {pages.map((page) => (
              <Nav.Link key={page.path} as={Link} to={page.path}>
                {page.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
