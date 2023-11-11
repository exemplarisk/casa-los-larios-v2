import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { PrivacyContent } from "../components/Policy/Privacy/PrivacyContent";

function privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - Casa Los Larios</title>
        <meta name="description" content="Terms of Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrivacyContent />
    </Layout>
  );
}

export default privacy;
