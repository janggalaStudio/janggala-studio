import React from "react";

function Footer() {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <div className="row m-0 justify-content-center d-flex">
            <div className="col-md-3 px-3 mb-3" style={{ color: "white" }}>
              <h3 className="footer-title">JANGGALA STUDIO</h3>
              <p className="footer-content mt-4">
                Jl. Mangu, Keyongan, Kec. Nogosari, Kabupaten Boyolali, Jawa
                Tengah 57378
              </p>
            </div>
            <div className="col-md-3 px-3">
              <h3 style={{ color: "white" }} className="footer-title">
                MORE INFO
              </h3>
              <div className="row footer-content mt-4">
                <p className="border-0" style={{ color: "white" }}>
                  <i className="bi-instagram"></i> @studiofotoboyolali
                </p>
              </div>
              <div className="row footer-content">
                <p style={{ color: "white" }}>
                  <i className="bi-instagram"></i> @dokumentasisoloboyolali
                </p>
              </div>
              <div className="row footer-whatsapp">
                <p style={{ color: "white" }}>
                  <i className="bi-whatsapp"></i> +{process.env.WHATSAPP}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
