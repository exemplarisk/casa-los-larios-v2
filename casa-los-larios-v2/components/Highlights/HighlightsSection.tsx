import React from "react";
import styles from "./HighlightsSection.module.css";
import highlightsData from "./highlightsData";

const HighlightCard = ({ image, title, description }) => (
  <div className={styles.highlightCard}>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const HighlightsSection = () => {
  
  return (
    <section className={styles.highlightsSection}>
      <div className={styles.highlightsGrid}>
        {highlightsData.map((highlight, index) => (
          <HighlightCard key={index} {...highlight} />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;