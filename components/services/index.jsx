import React from "react";
import Link from "next/link";

function Services() {
  return (
    <div className="home-services my-5 container">
      <h3 className="text-center title-text">Janggala Studio</h3>
      <div className="row row-cols-4 g-3 mt-5 p-0 justify-content-center">
        <div className="col home-service-col">
          <Link
            href="/galeri/family"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="https://lh3.googleusercontent.com/fife/AAbDypDFc2oe9ROiV8d2TgwwaYqbzmTzKeyOEN-6H1YJipEsIxKUmnDchoOpaRoUm3LgOmpjahbsq3EmWitbGdSUHLBXJxjoDYpIZnJPMdsWzSa8Fvkp1bBs5oYBabTQtIh2DUSiKwrbnsNUXIJ5VAsZf-Wvuboqcwf6djgK72uWErX8FI4mJGQcaBE2xL1r6yzNeMP7-668gk36eaOG3gd3q7bk09sMfBtVUxwquiwMAlhR5geKhFIIdJwt_7AqLCNyUz1JMTpqEs_AoBHqsZVY5SnCjq5C7mJiq2nkGaq39B1ao6ibHcvoRh2_zk-y5xxhuLXJcydyPJ3V4OM5kesY76Fdysd2hnVdpJ3ve6e1CCOqRrDn7J2O5DIdohVRYR-FBcPMOSaZTIs3v-0izrX2A0x0R04cFL9_56wN6kvdPNzw4NkzSk0qk4RdpDCiRhVzsfDqee9cq8KbdVBX94SBq__FbOoIlT7Ptmqvcs-sDfHOp9HMKJWo9vzUUzGsSkSm_MVFC7DT2MEkenIyDkZozmaGXfeLP1zDzbZxduWXX9Mx5fYikCbCOi31NQhd1GEF6dTRQnsTCjpea5HsETqxSX6V2oSDBBNXnOAf5GMgAHuTN6WM8pgIHWcjFxoOPxOYJKVQOxe4_n3s9wGdWlp1rbue_xbHngKoEssXgn38jVh_8cN8_wcX37CIoVr3frYIlOdH2r0dWyKyYVabKybrDkiJgbQ-fVkonLLQQMfVbL3AfMZw7vNeqqEf1lkbViWBVU8OUBiDHKWTTG4jQKfurEV-UDyuq7M1txGsIttnrcyB_oW9hcUuGIdg6hZpsrhFGmtSwGSlY05yDEmn-DpT7YN-uoTNl2oKep57d4z8l-QFQQ713AzMUzt6B99gPyVHO4mkv7nCgkEShcw5qAVRFXgMZlKMF8K8KEwRSoRHqqPw8c95BewwddkqqPoxumcPwEf_iwWc3dOb0YPvmvl7uwoYsWni2VzVsO27HpJskFLlohkC7l0MUg7uwVFi11bV3CN2DvPB_-RvAjla6MLrtjDM2blzNuVZDcfIv0xB32C53hJAbfIeYApg75z7TVzZgT_XbMsVkl_UvvSDJG1itbjg-Wu_uc0SI6j0Aq9g-LHjCF3U2cI0C_v4yBOYKib_QcnNewHsUZy9mW34YV9TH2oGkLwF3U3dBp4XYPtaX15pknw5fMSZYllSBiYfitqr3n4mcDfpkSlNcPemQn-U1sQE2x548I-VOUVVIXgoM1N0GYWdHYZpb8rqIfZtSif_MwM6Dyd8lay3QtunLWdZDenH5n6K75mayaW22WFuV5nWV_ShqGzxfPm8LPmdykBFSI4LPNgWHsLKX9s7N68eJ26PXBNQ7S_gu90iYiFVvZ65WSzuUm-lcDBpBGQRtefYtV2M4CieAeZuao_kB6xSC4jKWXD-2KaS6ISZVUJjx_G0aR-jSh2P_5cwb6WonqcbF_U4OW5aNrpVT0o380NOa6yuRNWJmtacDIrkCJMbhW1TD4SvKaCXzUJN99EcqU7Lj6xlJLh6yJoi0E3LBwqrTt5Ozn79F6a-X45dy45VnC329jdspvyKNcGl8LwhtqP3hS9MBFLTEYjNnYTDlokDipy4y1Rp=w2000-h1082"
                className="card-img rounded-0 home-service-img"
                alt="family-img "
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Family
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/wedding"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="/assets/wedding/wedding6.jpg"
                className="card-img rounded-0 home-service-img"
                alt="wedding-img "
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Wedding
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/prewedding"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="/assets/prewedding/prewedding21.jpg"
                className="card-img rounded-0 home-service-img"
                alt="prewedding-img "
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Prewedding
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/engagement"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="/assets/engagement/engagement6.jpg"
                alt="engagement-img"
                className="card-img rounded-0 home-service-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Engagement
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/graduation"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="https://images.pexels.com/photos/901964/pexels-photo-901964.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img rounded-0 home-service-img"
                alt="graduation-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Graduation
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/new-born"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="/assets/logo.jpg"
                className="card-img rounded-0 home-service-img"
                alt="new-born-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  New Born
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/home-service"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="/assets/logo.jpg"
                className="card-img rounded-0 home-service-img"
                alt="home-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Home Service
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col home-service-col">
          <Link
            href="/galeri/maternity"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src="/assets/logo.jpg"
                className="card-img rounded-0 home-service-img"
                alt="maternity-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Maternity
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
