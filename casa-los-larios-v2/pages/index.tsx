import React from 'react';
import Head from "next/head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import ApartmentDetails from '../components/ApartmentDetails/ApartmentDetails';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Casa Los Larios</title>
        <meta
          name="description"
          content="Rent a beautiful summer apartment in Torrevieja, Spain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Hero />
        <ApartmentDetails />
      </main>

      <Footer />
    </div>
  );
};

export default Home;