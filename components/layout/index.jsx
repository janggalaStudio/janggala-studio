import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavbarMenu from "../navbar";
import Footer from "../footer";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <NavbarMenu />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
}
