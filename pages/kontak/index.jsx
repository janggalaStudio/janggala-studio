import React from "react";
import Layout from "../../components/layout/kontak";

export default function Kontak() {
  return (
    <>
      <div style={{ backgroundColor: "#e9dffa" }}>
        <h3 className="text-center py-5">Hubungi Kami</h3>
      </div>
      <div className="container py-2">
        <div className="row">
          <div className="col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15824.258035221214!2d110.749864!3d-7.4581159999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49d60cbd12d9bc8b!2sJanggalastudio!5e0!3m2!1sid!2sid!4v1663578739274!5m2!1sid!2sid"
              width="800"
              height="450"
              //   style={{ border: "0" }}
              //   style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col">
            <h6>Alamat Lengkap</h6>
            <p className="">
              Jl. Mangu, Keyongan, Kec. Nogosari, Kabupaten Boyolali, Jawa
              Tengah 57378
            </p>
            <h6>Whatsapp</h6>
            <p className="">
              <i className="bi-whatsapp"></i> 0986561389097
            </p>
            <h6>Instagram</h6>
            <p className="">
              <i className="bi-instagram"></i> @studiofotoboyolali
              <br />
              <i className="bi-instagram"></i> @weedingkasbfs
              <br />
              <i className="bi-instagram"></i> @loremipkaidhfnfk
            </p>
            <h6>Email</h6>
            <p className="">
              <i className="bi-envelope"></i> kjasgf@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Kontak.getLayout = function getLayout(page) {
  return <Layout title={"Janggala Studio"}>{page}</Layout>;
};
