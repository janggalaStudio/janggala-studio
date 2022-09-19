import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="home-logo">
        <Image
          src="/assets/logo.jpg"
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div>
        <Carousel
          slide={false}
          indicators={true}
          prevIcon=""
          nextIcon=""
          interval={5000}
        >
          <Carousel.Item>
            <img
              src="/assets/bg-1.jpg"
              className="home-img d-block"
              alt="Studio Jenggala"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/assets/bg-2.jpg"
              className="d-block home-img"
              alt="Studio Jenggala"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/assets/bg-3.jpg"
              className="d-block home-img"
              alt="Studio Jenggala"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="home-services my-5 container">
        <h3 className="text-center">Janggala Studio</h3>
        <div className="row row-cols-4 mt-5 p-0 justify-content-center">
          <div className="col p-0 m-0">
            <div className="card rounded-0">
              <img
                src="https://images.pexels.com/photos/4205505/pexels-photo-4205505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img rounded-0"
                alt="family-img"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-img-overlay d-flex align-items-end justify-content-center">
                <a href="#" className="stretched-link home-card-title">
                  <h5 className="card-title ">Family</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col p-0 m-0">
            <div className="card rounded-0">
              <img
                src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img rounded-0"
                alt="wedding-img"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-img-overlay d-flex align-items-end justify-content-center">
                <a href="#" className="stretched-link home-card-title">
                  <h5 className="card-title" style={{ color: "black" }}>
                    Weeding
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col p-0 m-0">
            <div className="card rounded-0">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img rounded-0"
                alt="personal-img"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-img-overlay d-flex align-items-end justify-content-center">
                <a href="#" className="stretched-link home-card-title">
                  <h5 className="card-title" style={{ color: "black" }}>
                    Personal
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col p-0 m-0">
            <div className="card rounded-0">
              <img
                src="https://images.pexels.com/photos/1963622/pexels-photo-1963622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="group-img"
                className="card-img rounded-0"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-img-overlay d-flex align-items-end justify-content-center">
                <a href="#" className="stretched-link home-card-title">
                  <h5 className="card-title ">Group</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col p-0 m-0">
            <div className="card rounded-0">
              <img
                src="https://images.pexels.com/photos/901964/pexels-photo-901964.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img rounded-0"
                alt="..."
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-img-overlay d-flex align-items-end justify-content-center">
                <a href="#" className="stretched-link home-card-title">
                  <h5 className="card-title ">Graduation</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col p-0 m-0">
            <div className="card rounded-0">
              <img
                src="/assets/logo.jpg"
                className="card-img rounded-0"
                alt="..."
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-img-overlay d-flex align-items-end justify-content-center">
                <a href="#" className="stretched-link home-card-title">
                  <h5 className="card-title ">New Born</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col p-0 m-0">
            <div className="card rounded-0">
              <img
                src="/assets/logo.jpg"
                className="card-img rounded-0"
                alt="..."
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-img-overlay d-flex align-items-end justify-content-center">
                <a href="#" className="stretched-link home-card-title">
                  <h5 className="card-title ">Home Service</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col p-0 m-0">
            <div className="card rounded-0">
              <img
                src="/assets/logo.jpg"
                className="card-img rounded-0"
                alt="..."
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-img-overlay d-flex align-items-end justify-content-center">
                <a href="#" className="stretched-link home-card-title">
                  <h5 className="card-title ">Maternity</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-why py-5">
        <h3 className="text-center" style={{ color: "black" }}>
          Kenapa Pilih Janggala Studio
        </h3>
        <div className="container">
          <div className="row row-cols-3 mx-0 mt-5 justify-content-center">
            <div className="col home-why-col">
              <div className="card text-center border-0 home-why-card">
                <div className="card-body">
                  <img
                    src="/assets/fast-time.png"
                    className="home-why-icon"
                    alt="fast-time"
                  />
                  <h5 className="card-title home-why-title mt-2">
                    Fast Response
                  </h5>
                  <p className="card-text mt-4 home-why-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col home-why-col">
              <div className="card text-center border-0 home-why-card">
                <div className="card-body">
                  <img
                    src="/assets/photographer.png"
                    className="home-why-icon"
                    alt="expert-team"
                  />
                  <h5 className="card-title home-why-title mt-2">
                    Expert Team
                  </h5>
                  <p className="card-text mt-4 home-why-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col home-why-col">
              <div className="card text-center border-0 home-why-card">
                <div className="card-body">
                  <img
                    src="/assets/thumbs-up.png"
                    className="home-why-icon"
                    alt="greate-service"
                  />
                  <h5 className="card-title home-why-title mt-2">
                    Great Service
                  </h5>
                  <p className="card-text mt-4 home-why-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col home-why-col mt-3">
              <div className="card text-center border-0 home-why-card">
                <div className="card-body">
                  <img
                    src="/assets/studio.png"
                    className="home-why-icon"
                    alt="studio"
                  />
                  <h5 className="card-title home-why-title mt-2">
                    Profesional Studio
                  </h5>
                  <p className="card-text mt-4 home-why-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col home-why-col mt-3">
              <div className="card text-center border-0 home-why-card">
                <div className="card-body">
                  <img
                    src="/assets/stars.png"
                    className="home-why-icon"
                    alt="great-quality"
                  />
                  <h5 className="card-title home-why-title mt-2">
                    Greate Quality
                  </h5>
                  <p className="card-text mt-4 home-why-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-cinematic py-5">
        <h3 className="text-center" style={{ color: "black" }}>
          Video Cinematic
        </h3>
      </div>
      <div className="home-testimony py-5 container-fluid">
        <h3 className="text-center" style={{ color: "black" }}>
          Testimoni
        </h3>
        <div className="row row-cols-4 justify-content-center mt-5">
          <div className="col">
            <div className="card border-0" style={{ height: "25rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Harganya murah kualitas wahhh!!! Foto di studio tema nya gak
                  ngebosenin, pas photo bisa langsung jadi, studio adem, tema
                  selalu up to date, kekinian pkoknya lahh. Fotographer nya
                  ramah jangan sungkan kalo mau tanya harga, bisa dinego.
                  rekomendet bgt buat yg pengen abadikan momen photo atau video
                  sinematic kalian dengan harga murah tapi hasilnya wahh.
                </p>
                <div className="row home-testimony-user align-items-center">
                  <div className="col">
                    <img
                      src="https://lh3.googleusercontent.com/a-/ACNPEu93h4mCWP1GHeFGGVI-1A_UhiRoaR9XIFLBGSxFTw=w60-h60-p-rp-mo-br100"
                      alt=""
                      className="home-testimony-img rounded-circle"
                    />
                  </div>
                  <div className="col-auto">
                    <h6 className="card-title">Angga AD</h6>
                    <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                    <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                    <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                    <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                    <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                    {/* <h6 className="card-subtitle">Mahasiswa</h6> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ height: "25rem" }}>
              <div className="card-body">
                <p className="card-text">
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
                  <div className="col-auto">
                    <h6 className="card-title">Irawati Azjuairiyah</h6>
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
          <div className="col">
            <div className="card border-0" style={{ height: "25rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Fotographer profesional, buat usaha di desanya agar dekat
                  dengan orang yang dicintainya 💝💝💝💝💝💝
                </p>
                <div className="row home-testimony-user align-items-center">
                  <div className="col">
                    <img
                      src="/assets/logo.jpg"
                      alt=""
                      className="home-testimony-img rounded-circle"
                    />
                  </div>
                  <div className="col-auto">
                    <h6 className="card-title">Syarif Hidayat</h6>
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
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout title={"Janggala Studio"}>{page}</Layout>;
};
