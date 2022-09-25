import Layout from "../../components/layout";
import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

function Wedding() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const source = [
    "/assets/wedding/wedding1.jpg",
    "/assets/wedding/wedding2.jpg",
    "/assets/wedding/wedding3.jpg",
    "/assets/wedding/wedding4.jpg",
    "/assets/wedding/wedding5.jpg",
    "/assets/wedding/wedding6.jpg",
    "/assets/wedding/wedding7.jpg",
    "/assets/wedding/wedding8.jpg",
    "/assets/wedding/wedding9.jpg",
    "/assets/wedding/wedding10.jpg",
    "/assets/wedding/wedding11.jpg",
  ];

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <div className="title-banner text-center justify-content-center container-fluid align-items-center d-flex">
        <div className="row row-cols-1">
          <div className="col">
            <h3 className="title-text mb-0">GALERI</h3>
          </div>
          <div className="col">
            <h3 className="title-subtitle">FOTO WEDDING</h3>
          </div>
        </div>
      </div>
      <div className="container py-3" style={{ backgroundColor: "white" }}>
        <div className="row row-cols-4 galeri-row">
          {source.map((item, index) => (
            <div className="col galeri-col align-self-center px-1">
              <div className="overlay-container">
                <img
                  src={`/assets/wedding/wedding${index + 1}.jpg`}
                  alt="galeri-wedding"
                  className="galeri-img px-0"
                />
                <div
                  className="overlay"
                  onClick={() => openLightboxOnSlide(index + 1)}
                ></div>
              </div>
            </div>
          ))}

          <FsLightbox
            toggler={lightboxController.toggler}
            sources={source}
            slide={lightboxController.slide}
          />
        </div>
        <Link href="/kontak">
          <button
            type="button"
            className="btn btn-success floating-btn sticky-bottom position-fixed"
          >
            Hubungi Kami
          </button>
        </Link>
      </div>
    </>
  );
}

export default Wedding;

Wedding.getLayout = function getLayout(page) {
  return <Layout title={"Foto Wedding | Janggala Studio"}>{page}</Layout>;
};
