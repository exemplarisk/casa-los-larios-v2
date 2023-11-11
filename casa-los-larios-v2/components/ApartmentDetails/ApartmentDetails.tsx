import React, { useState } from "react";
import styles from "./ApartmentDetails.module.css";

const ApartmentDetails = () => {
  const images = [
    "/familia1.jpg",
    "/summergetaway.jpg",
    "/summergetaway1.jpg",
    "/seaview1.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.apartmentDetails}>
      <div className={styles.detailsContent}>
        <div className={styles.detailsText}>
          <h2>About Casa Los Larios</h2>
          <p>
            Located in Torrevieja, Spain, Casa Los Larios
            offers an exquisite getaway with breathtaking sea views. Experience
            the comfort and elegance of our well-appointed apartment.
          </p>
          <ul>
            <li>Stunning vistas from a sun-kissed balcony</li>
            <li>Two pristine bedrooms designed for relaxation</li>
            <li>A culinary-ready kitchen with state-of-the-art appliances</li>
            <li>
              High-speed Wi-Fi and a large-screen TV for your entertainment
            </li>
            <li>An exclusive pool for serene aquatic retreats</li>
            <li>Proximity to gourmet restaurants and local attractions</li>
          </ul>
          <button className={styles.reservationButton}>
            Reserve Your Stay
          </button>
        </div>
        <div className={styles.detailsImage}>
          <div className={styles.imageSlider}>
            <button className={styles.prevButton} onClick={prevImage}>
              &#10094;
            </button>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Casa Los Larios View ${index + 1}`}
                className={
                  index === currentImageIndex
                    ? styles.active
                    : styles.sliderImage
                }
              />
            ))}
            <button className={styles.nextButton} onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentDetails;