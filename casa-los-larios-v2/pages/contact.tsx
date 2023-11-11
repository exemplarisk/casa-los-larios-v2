import React from "react";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styles from '../components/ContactInfo/ContactInfo.module.css'

function contact() {
  return (
    <Layout>
      <Head>
        <title>Casa Los Larios - Contact</title>
        <meta name="description" content="Contact Casa-Los-Larios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className="overlay">
          <ContactInfo />
        </div>
      </div>
    </Layout>
  );
}

export default contact;