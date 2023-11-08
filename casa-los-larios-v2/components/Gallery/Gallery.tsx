import React from "react";
import styles from "./Gallery.module.css";

const Gallery: React.FC = () => {
  const images = [
    "/summergetaway.jpg",
    "/summergetaway1.jpg",
  ];

  return (
      <div className={styles.gallery}>
        <h2 className={styles.title}>Apartment Photo Gallery</h2>
        <div className={styles.grid}>
          {images.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
  );
};

export default Gallery;