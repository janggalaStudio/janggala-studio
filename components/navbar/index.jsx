import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Logo</a>
          </Link>

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
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav" id="navbarNavDropdown">
              <li className="nav-item px-3" id="navbarNavDropdown">
                <a className="nav-link" href="#" id="navbarNavDropdown">
                  Galeri
                </a>
              </li>
              <li className="nav-item px-3">
                <Link href="/alamat">
                  <a className="nav-link">Kontak</a>
                </Link>
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
