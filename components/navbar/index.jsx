import React from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function NavbarMenu() {
  return (
    <>
      <Navbar sticky="top" expand="md" className="navbar-style">
        <Container>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            style={{ width: "200px" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <NavDropdown className="mx-1" title="GALERI">
                  <NavDropdown.Item href="/galeri">
                    Foto Terbaru
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/">Foto Wedding</NavDropdown.Item>
                  <NavDropdown.Item href="/">Foto Family</NavDropdown.Item>
                  <NavDropdown.Item href="/">Foto Personal</NavDropdown.Item>
                  <NavDropdown.Item href="/">Foto Graduation</NavDropdown.Item>
                  <NavDropdown.Item href="/">Foto New Born</NavDropdown.Item>
                  <NavDropdown.Item href="/">Foto Maternity</NavDropdown.Item>
                  <NavDropdown.Item href="/">
                    Foto Home Service
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="mx-1" href="/kontak">
                  KONTAK
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
