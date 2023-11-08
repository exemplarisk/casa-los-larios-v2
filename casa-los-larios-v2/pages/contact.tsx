import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
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

      <div>
        <ContactForm />
      </div>
    </Layout>
  );
}

export default contact;
