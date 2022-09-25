import Layout from "../../components/layout";
import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

function Prewedding() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const source = [
    "/assets/prewedding/prewedding1.jpg",
    "/assets/prewedding/prewedding2.jpg",
    "/assets/prewedding/prewedding3.jpg",
    "/assets/prewedding/prewedding4.jpg",
    "/assets/prewedding/prewedding5.jpg",
    "/assets/prewedding/prewedding6.jpg",
    "/assets/prewedding/prewedding7.jpg",
    "/assets/prewedding/prewedding8.jpg",
    "/assets/prewedding/prewedding9.jpg",
    "/assets/prewedding/prewedding10.jpg",
    "/assets/prewedding/prewedding11.jpg",
    "/assets/prewedding/prewedding12.jpg",
    "/assets/prewedding/prewedding13.jpg",
    "/assets/prewedding/prewedding14.jpg",
    "/assets/prewedding/prewedding15.jpg",
    "/assets/prewedding/prewedding16.jpg",
    "/assets/prewedding/prewedding17.jpg",
    "/assets/prewedding/prewedding18.jpg",
    "/assets/prewedding/prewedding19.jpg",
    "/assets/prewedding/prewedding20.jpg",
    "/assets/prewedding/prewedding21.jpg",
  ];

  return (
    <>
      <div className="title-banner text-center justify-content-center container-fluid align-items-center d-flex">
        <div className="row row-cols-1">
          <div className="col">
            <h3 className="title-text mb-0">GALERI</h3>
          </div>
          <div className="col">
            <h3 className="title-subtitle">FOTO PREWEDDING</h3>
          </div>
        </div>
      </div>
      <div className="container pb-2" style={{ backgroundColor: "white" }}>
        <div className="row row-cols-4 galeri-row">
          {source.map((item, index) => (
            <div className="col galeri-col align-self-center px-1">
              <div className="overlay-container">
                <img
                  src={`/assets/prewedding/prewedding${index + 1}.jpg`}
                  alt="galeri-prewedding"
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

export default Prewedding;

Prewedding.getLayout = function getLayout(page) {
  return <Layout title={"Foto Prewedding | Janggala Studio"}>{page}</Layout>;
};
