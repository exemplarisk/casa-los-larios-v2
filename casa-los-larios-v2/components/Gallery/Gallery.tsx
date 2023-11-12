import React, { useState } from "react";
import styles from "./Gallery.module.css";

const Gallery: React.FC = () => {
  const images = [
    "/familia1.jpg",
    "/summergetaway.jpg",
    "/summergetaway1.jpg",
    "/seaview1.jpg",
    "/seaview2.jpg",
    "/beachwalk1.jpg",
    "/beachfront.jpg",
    "/attraction1.jpg",
    "/aparoutd.jpg",
    "/summergetaway1.jpg",
    "/seaview1.jpg",
    "/familia1.jpg",
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      {activeImage && (
        <div className={styles.modal} onClick={() => setActiveImage(null)}>
          <img
            src={activeImage}
            alt="Enlarged view"
            className={styles.modalContent}
          />
          <span className={styles.close}>&times;</span>
        </div>
      )}
      <div className={styles.gallery}>
        <h2 className={styles.title}>Photo Gallery</h2>
        <div className={styles.grid}>
          {images.map((src, index) => (
            <div
              key={index}
              className={styles.imageWrapper}
              onClick={() => setActiveImage(src)}
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;