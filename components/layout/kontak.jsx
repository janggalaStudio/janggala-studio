import React from "react";
import Head from "next/head";
import Navbar from "../navbar";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <Navbar />
        <main>{props.children}</main>
      </div>
    </>
  );
}
