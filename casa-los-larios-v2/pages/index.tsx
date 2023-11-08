// /pages/index.tsx
import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import ApartmentDetails from "../components/ApartmentDetails/ApartmentDetails";

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Casa Los Larios</title>
        <meta
          name="description"
          content="Rent a beautiful summer apartment in Torrevieja, Spain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <ApartmentDetails />
    </Layout>
  );
};

export default Home;