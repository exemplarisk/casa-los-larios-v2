import React from "react";
import styles from "./HighlightsSection.module.css";

const HighlightCard = ({ image, title, description }) => (
  <div className={styles.highlightCard}>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const HighlightsSection = () => {
  const highlights = [
    {
      image: "/summergetaway.jpg",
      title: "Luxurious Comfort",
      description:
        "Experience the ultimate in comfort with our fully equipped, modern apartments.",
    },
    // ... other highlights
  ];

  return (
    <section className={styles.highlightsSection}>
      <div className={styles.highlightsGrid}>
        {highlights.map((highlight, index) => (
          <HighlightCard key={index} {...highlight} />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;