import React from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import ApartmentDetails from "../components/ApartmentDetails/ApartmentDetails";

function about() {
  return (
    <Layout>
      <Head>
        <title>Casa Los Larios - About</title>
        <meta name="description" content="About Casa-Los-Larios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApartmentDetails />
    </Layout>
  );
}

export default about;
