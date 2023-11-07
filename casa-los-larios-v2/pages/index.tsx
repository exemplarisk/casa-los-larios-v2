import React from 'react';
import Head from "next/head";
import Header from "../components/Header/Header";
import BookingSection from "../components/BookingSection/BookingSection";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

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
        <BookingSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Home;