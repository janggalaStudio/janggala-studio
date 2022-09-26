import Layout from "../../components/layout";
import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

function NewBorn() {
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
    "/assets/new_born/new_born1.jpg",
    "/assets/new_born/new_born2.jpg",
    "/assets/new_born/new_born3.jpg",
    "/assets/new_born/new_born4.jpg",
    "/assets/new_born/new_born5.jpg",
  ];

  return (
    <>
      <div className="title-banner text-center justify-content-center container-fluid align-items-center d-flex">
        <div className="row row-cols-1">
          <div className="col">
            <h3 className="title-text mb-0">GALERI</h3>
          </div>
          <div className="col">
            <h3 className="title-subtitle">FOTO NEW BORN</h3>
          </div>
        </div>
      </div>
      <div className="container pb-2" style={{ backgroundColor: "white" }}>
        <div className="row row-cols-4 galeri-row">
          {source.map((item, index) => (
            <div className="col galeri-col align-self-center px-1">
              <div className="overlay-container">
                <img
                  src={`/assets/new_born/new_born${index + 1}.jpg`}
                  alt="galeri-terbaru"
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

export default NewBorn;

NewBorn.getLayout = function getLayout(page) {
  return <Layout title={"Foto New Born | Janggala Studio"}>{page}</Layout>;
};
