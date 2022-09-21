import Layout from "../../components/layout";
import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Galeri() {
  const [data, setData] = useState([]);
  const instagram = async () => {
    try {
      const result = await axios.get();
      setData(result.data.data);
      //   console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  useEffect(() => {
    instagram();
  }, []);

  return (
    <>
      <div className="title-banner text-center container-fluid">
        <div className="row">
          <h3 className="title-text mb-0 mt-5 pt-5">GALERI</h3>
        </div>
        <div className="row">
          <h3 className="title-subtitle mb-0 my-0 py-0">FOTO TERBARU</h3>
        </div>
      </div>
      <div className="container py-3" style={{ backgroundColor: "white" }}>
        <div className="row row-cols-4 galeri-row">
          {data.map((item) => (
            <div
              className="col galeri-col px-1 align-self-center"
              key={item.id}
            >
              <img
                src={item.media_url}
                alt="galeri-terbaru"
                className="galeri-img"
              />
            </div>
          ))}
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

export default Galeri;

Galeri.getLayout = function getLayout(page) {
  return <Layout title={"Galeri | Janggala Studio"}>{page}</Layout>;
};
