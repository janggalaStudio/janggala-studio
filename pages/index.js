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
        <Carousel indicators={true} prevIcon="" nextIcon="" interval={5000}>
          <Carousel.Item>
            {/* <Image
            src="/assets/bg-1.jpg"
            width={500}
            height={200}
            layout="fixed"
            alt="Studio Jenggala"
            sizes="50vx"
          /> */}
            <img
              src="/assets/bg-1.jpg"
              className="home-img d-block"
              alt="Studio Jenggala"
              // style={{ height: "auto" }}
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
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout title={"Jenggala Studio"}>{page}</Layout>;
};
