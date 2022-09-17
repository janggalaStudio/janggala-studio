import React from "react";
import Head from "next/head";

export default function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            Logo
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-flex flex-row-reverse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav" id="navbarNavDropdown">
              <li className="nav-item px-3" id="navbarNavDropdown">
                <a className="nav-link" href="#" id="navbarNavDropdown">
                  Galeri
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">
                  Alamat
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">
                  Kontak
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
