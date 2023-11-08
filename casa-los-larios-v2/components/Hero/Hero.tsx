import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h2>Welcome to Casa Los Larios</h2>
        <p>Your ideal summer retreat in Torrevieja, Spain.</p>
        <a href="#booking" className={styles.ctaButton}>
          Check Availability
        </a>
      </div>
    </section>
  );
};

export default Hero;