import React from "react";
import Layout from "../../components/layout/kontak";

export default function Kontak() {
  const whatsapp = () => {
    window.open("https://wa.me/85727197499");
  };

  const instagramMain = () => {
    window.open("https://www.instagram.com/studiofotoboyolali/");
  };

  const instagramWedding = () => {
    window.open("https://www.instagram.com/dokumentasisoloboyolali/");
  };

  return (
    <>
      <div className="container-fluid pt-5 title-banner text-center">
        <h3 className="title-text pt-5">HUBUNGI KAMI</h3>
      </div>
      <div className="container py-2">
        <div className="row pt-4">
          <div className="col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15824.258035221214!2d110.749864!3d-7.4581159999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49d60cbd12d9bc8b!2sJanggalastudio!5e0!3m2!1sid!2sid!4v1663578739274!5m2!1sid!2sid"
              width="800"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col pt-4">
            <h6 className="kontak-title">Alamat Lengkap</h6>
            <p className="kontak-text">
              Jl. Mangu, Keyongan, Kec. Nogosari, Kabupaten Boyolali, Jawa
              Tengah 57378
            </p>
            <h6 className="kontak-title pt-2">Whatsapp</h6>
            <button
              onClick={whatsapp}
              type="button"
              className="btn btn-success kontak-text w-100"
            >
              <i className="bi-whatsapp"></i> 0986561389097
            </button>
            <h6 className="kontak-title pt-4">Instagram</h6>
            <button
              onClick={instagramMain}
              type="button"
              className="btn btn-success kontak-text w-100"
            >
              <i className="bi-instagram"></i> @studiofotoboyolali
            </button>
            <button
              onClick={instagramWedding}
              type="button"
              className="btn btn-success kontak-text w-100 my-3"
            >
              <i className="bi-instagram"></i> @dokumentasisoloboyolali
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Kontak.getLayout = function getLayout(page) {
  return <Layout title={"Janggala Studio"}>{page}</Layout>;
};
