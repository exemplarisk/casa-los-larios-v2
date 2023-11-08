import React from "react";
import Gallery from "../components/Gallery/Gallery";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

function gallery() {
  return (
    <Layout>
      <Head>
        <title>Casa Los Larios - Gallery</title>
        <meta name="description" content="Gallery of Casa-Los-Larios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gallery />
    </Layout>
  );
}

export default gallery;