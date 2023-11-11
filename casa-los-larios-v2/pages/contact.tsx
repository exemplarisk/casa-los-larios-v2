import React from "react";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

function contact() {
  return (
    <Layout>
      <Head>
        <title>Casa Los Larios - Contact</title>
        <meta name="description" content="Contact Casa-Los-Larios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactInfo/>
    </Layout>
  );
}

export default contact;