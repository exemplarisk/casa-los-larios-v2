import React, { useState } from "react";
import styles from "./Gallery.module.css";

const Gallery: React.FC = () => {
  const images = [
    "/familia1.jpg",
    "/casaloslarios.jpg",
    "/seaview1.jpg",
    "/seaview2.jpg",
    "/beachwalk1.jpg",
    "/beachfront.jpg",
    "/aparoutd.jpg",
    "/poolviewhero.jpg",
    "/sunsetview.jpg",
    "/attraction1.jpg",
    "/diningroom.jpg",
    "/sofa.jpg",
    "/comfort1.jpg",
    "/terrassa1.jpg",
    "/golf.jpg",
    "/meatmarket.jpg",
    "/gastronomic1.jpg",
    "/gastronomic2.jpg",
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