import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <main className=""></main>

      <footer className="">
        {/* Powered by{" "} */}
        {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
      </footer>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout title={"Jenggala Studio"}>{page}</Layout>;
};
