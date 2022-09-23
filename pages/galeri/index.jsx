import Layout from "../../components/layout";
import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

function Galeri() {
  const [loading, setLoading] = useState(true);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const [source, setSource] = useState([]);

  const [data, setData] = useState([]);
  const instagram = async () => {
    try {
      const result = await axios.get();
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const light = () => {
    if (source.length == 0) {
      data.map((item) => {
        source.push(item.media_url);
      });
    }
  };

  useEffect(() => {
    instagram();
  }, []);

  useEffect(() => {
    light();
    setLoading(false);
  }, [data]);

  return (
    <>
      <div className="title-banner text-center justify-content-center container-fluid align-items-center d-flex">
        <div className="row row-cols-1">
          <div className="col">
            <h3 className="title-text mb-0">GALERI</h3>
          </div>
          <div className="col">
            <h3 className="title-subtitle">FOTO TERBARU</h3>
          </div>
        </div>
      </div>
      <div className="container py-3" style={{ backgroundColor: "white" }}>
        {loading ? (
          <div className="justify-content-center d-flex spinner-container align-items-center">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            ></div>
          </div>
        ) : (
          <div className="row row-cols-4 galeri-row">
            {data.map((item, index) => (
              <div
                className="col galeri-col align-self-center px-1"
                key={item.id}
              >
                <div className="overlay-container">
                  <img
                    src={item.media_url}
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
        )}

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

export default Galeri;

Galeri.getLayout = function getLayout(page) {
  return <Layout title={"Foto Terbaru | Janggala Studio"}>{page}</Layout>;
};
