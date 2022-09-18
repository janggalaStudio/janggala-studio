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
        <h3 className="text-center">Jenggala Studio</h3>
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
        <h3 className="text-center" style={{ color: "white" }}>
          Kenapa Pilih Jenggala Studio
        </h3>
      </div>
      <div className="home-cinematic py-5">
        <h3 className="text-center" style={{ color: "black" }}>
          Video Cinematic
        </h3>
      </div>
      <div className="home-testimony py-5">
        <h3 className="text-center" style={{ color: "white" }}>
          Testimoni
        </h3>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout title={"Jenggala Studio"}>{page}</Layout>;
};
