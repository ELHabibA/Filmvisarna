import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function BasicNavbar() {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-film">
          <Nav.Link href="#home">Hem</Nav.Link>
          <Nav.Link href="#movies">Filmer</Nav.Link>
          <Nav.Link href="#tickets">Biljetter</Nav.Link>
          <Nav.Link href="#contact">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicNavbar;
