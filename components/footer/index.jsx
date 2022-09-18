import React from "react";

function Footer() {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <div className="row">
            <div className="col mx-3" style={{ color: "white" }}>
              <h3>LOGO</h3>
              <p className="">
                Janggalastudio, Jalan Mangu, Keyongan, Keyongan, Kabupaten
                Boyolali, Jawa Tengah
              </p>
            </div>
            <div className="col mx-3">
              <p style={{ color: "white" }}>MORE INFO</p>
              <div className="row">
                <p className="border-0" style={{ color: "white" }}>
                  <i className="bi-instagram"></i> studiofotoboyolali
                </p>
              </div>
              <div className="row">
                <p style={{ color: "white" }}>
                  <i className="bi-instagram"></i> jenggalastudio
                </p>
              </div>
              <div className="row">
                <p style={{ color: "white" }}>
                  <i className="bi-whatsapp"></i> 0997135659035
                </p>
              </div>
            </div>
            <div className="col max-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0645551238263!2d110.74767561423893!3d-7.458110875576745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a13335200d43f%3A0x49d60cbd12d9bc8b!2sJanggalastudio!5e0!3m2!1sid!2sid!4v1663416555605!5m2!1sid!2sid"
                width="400"
                height="200"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
