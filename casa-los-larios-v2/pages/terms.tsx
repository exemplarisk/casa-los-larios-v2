import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { TermsContent } from "../components/Terms/TermsContent";

function terms() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - Casa Los Larios</title>
        <meta name="description" content="Terms of Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TermsContent />
    </Layout>
  );
};

export default terms;