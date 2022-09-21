import React from "react";

function Testimony() {
  return (
    <div className="home-testimony py-5 container-fluid">
      <h3 className="text-center title-text">Testimoni</h3>
      <div
        className="row row-cols-4 g-4 justify-content-center mt-4"
        // style={{ padding: "0 100px" }}
      >
        <div className="col home-testimony-col">
          <div className="card border-0 home-testimony-card">
            <div className="card-body">
              <p className="card-text home-testimony-text">
                Harganya murah kualitas wahhh!!! Foto di studio tema nya gak
                ngebosenin, pas photo bisa langsung jadi, studio adem, tema
                selalu up to date, kekinian pkoknya lahh.
              </p>
              <div className="row home-testimony-user align-items-center">
                <div className="col">
                  <img
                    src="https://lh3.googleusercontent.com/a-/ACNPEu93h4mCWP1GHeFGGVI-1A_UhiRoaR9XIFLBGSxFTw=w60-h60-p-rp-mo-br100"
                    alt=""
                    className="home-testimony-img rounded-circle"
                  />
                </div>
                <div className="col-auto home-testimony-name">
                  <h6 className="card-title home-testimony-name">Angga AD</h6>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col home-testimony-col">
          <div className="card border-0 home-testimony-card">
            <div className="card-body">
              <p className="card-text home-testimony-text">
                Pelayanan sangat memuaskan ramah dan humoris. Hasil fotonya
                sangat memuaskan😍🤩
              </p>
              <div className="row home-testimony-user align-items-center">
                <div className="col">
                  <img
                    src="/assets/logo.jpg"
                    alt=""
                    className="home-testimony-img rounded-circle"
                  />
                </div>
                <div className="col-auto home-testimony-name">
                  <h6 className="card-title home-testimony-name">
                    Irawati Azjuairiyah
                  </h6>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col home-testimony-col">
          <div className="card border-0 home-testimony-card">
            <div className="card-body">
              <p className="card-text home-testimony-text">
                Fotographer profesional, buat usaha di desanya agar dekat dengan
                orang yang dicintainya 💝💝💝💝💝💝
              </p>
              <div className="row home-testimony-user align-items-center">
                <div className="col">
                  <img
                    src="/assets/logo.jpg"
                    alt=""
                    className="home-testimony-img rounded-circle"
                  />
                </div>
                <div className="col-auto home-testimony-name">
                  <h6 className="card-title home-testimony-name">
                    Syarif Hidayat
                  </h6>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
