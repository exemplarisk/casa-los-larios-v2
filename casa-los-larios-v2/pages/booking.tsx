import React from 'react'
import BookingSection from '../components/BookingSection/BookingSection'
import Head from "next/head";
import Layout from '../components/Layout/Layout';

function booking() {
  return (
    <Layout>
      <Head>
        <title>Casa Los Larios - Booking</title>
        <meta
          name="description"
          content="Book the apartment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <BookingSection />
      </div>
    </Layout>
  );
}

export default booking