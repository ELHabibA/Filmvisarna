import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { pages } from '../../main';

function BasicNavbar({ user }) {

  const excludedPaths = [
    '/detaljsidan',
    '/boka/:screeningId',
    '/avbokning',
    '/bokningsbekraftelse',
    '/detaljsidan/:movieId',
    '/finalize-booking'
  ];
  const filteredPages = pages.filter((page) => !excludedPaths.includes(page.path));

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
              {filteredPages.filter(x => user ? x.path !== '/loggain' && x.path !== '/blimedlem' : x.path !== '/minsida').map((page) => (
                <NavLink
                  key={page.path}
                  to={page.path}
                  className="nav-link"
                >
                  {page.label}
                </NavLink>
              ))}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
