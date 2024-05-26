import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#A propos">Nirina VELOSONINA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#A propos">À propos</Nav.Link>
            <Nav.Link href="#Projets">Projets</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
