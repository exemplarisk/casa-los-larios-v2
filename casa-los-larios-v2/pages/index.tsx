import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import HighlightsSection from "../components/Highlights/HighlightsSection";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Casa Los Larios</title>
        <meta name="description" content="Welcome to Casa-Los-Larios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <HighlightsSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Home;