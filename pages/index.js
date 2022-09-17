import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div className="home-banner container-fluid p-0">
      <Carousel indicators={true} prevIcon="" nextIcon="" interval={5000}>
        <Carousel.Item>
          <Image
            // className="home-carousel"
            src="/assets/bg-1.jpg"
            width={500}
            height={300}
            layout="responsive"
            sizes="100vw"
          />
          {/* <img
            className="d-block w-100"
            src="/assets/bg-1.jpg"
            alt="First slide"
            layout="responsive"
          /> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image
            // className="home-carousel"
            src="/assets/bg-2.jpg"
            width={500}
            height={300}
            layout="responsive"
            // sizes="100vw"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            // className="home-carousel"
            src="/assets/bg-3.jpg"
            width={500}
            height={300}
            layout="responsive"
            // sizes="100vw"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout title={"Jenggala Studio"}>{page}</Layout>;
};
