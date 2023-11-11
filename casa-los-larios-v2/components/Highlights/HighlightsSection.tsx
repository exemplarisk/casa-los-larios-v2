import React, { useState } from "react";
import styles from "./HighlightsSection.module.css";
import highlightsData from "./highlightsData";
import ImageModal from "../ImageModal/ImageModal";

const HighlightsSection = () => {
  const [modalContent, setModalContent] = useState({
    image: null,
    title: null,
  });

  const openModal = (image, title) => {
    setModalContent({ image, title });
  };

  const closeModal = () => {
    setModalContent({ image: null, title: null });
  };

  return (
    <section className={styles.highlightsSection}>
      <div className={styles.highlightsGrid}>
        {highlightsData.map((highlight, index) => (
          <div key={index} className={styles.highlightCard}>
            <img
              src={highlight.image}
              alt={highlight.title}
              onClick={() => openModal(highlight.image, highlight.title)}
              style={{ cursor: "pointer" }}
            />
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
      {modalContent.image && (
        <ImageModal
          isOpen={!!modalContent.image}
          image={modalContent.image}
          title={modalContent.title}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default HighlightsSection;
