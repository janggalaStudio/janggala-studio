import React from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";

export default function NavbarMenu() {
  return (
    <>
      <Navbar
        sticky="top"
        expand="md"
        className="navbar-style"
        variant="dark"
        bg="dark"
        // style={{backgroundColor: 'black'}}
      >
        <Container>
          <Navbar.Brand href="/">
            {/* <Image
              src="/assets/logo/janggala_transparan1.png"
              alt="Logo.img"
              width={40}
              height={30}
              style={{ objectFit: "fill" }}
            /> */}
            <img
              src="/assets/logo/janggala_transparan1.png"
              alt="Logo.img"
              style={{ objectFit: "fill", width: "40px", height: "auto" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            style={{ width: "200px" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                <img
                  src="/assets/logo/janggala_transparan1.png"
                  alt="Logo.img"
                  style={{ objectFit: "fill", width: "40px", height: "auto" }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <NavDropdown
                  className="mx-1"
                  title="GALERI"
                  // style={{ color: "white" }}
                >
                  <NavDropdown.Item href="/galeri" className="navbar-item">
                    Foto Terbaru
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/wedding"
                    className="navbar-item"
                  >
                    Foto Wedding
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/family"
                    className="navbar-item"
                  >
                    Foto Family
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/personal"
                    className="navbar-item"
                  >
                    Foto Personal
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/graduation"
                    className="navbar-item"
                  >
                    Foto Graduation
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/new-born"
                    className="navbar-item"
                  >
                    Foto New Born
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/maternity"
                    className="navbar-item"
                  >
                    Foto Maternity
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/home-service"
                    className="navbar-item"
                  >
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
