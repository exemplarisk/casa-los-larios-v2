import React, { useState } from "react";
import styles from "./ApartmentDetails.module.css";

const ApartmentDetails = () => {
  const images = [
    "/summergetaway.jpg",
    "/summergetaway1.jpg",
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
            Welcome to Casa Los Larios, your luxurious summer retreat in
            Torrevieja, Spain. Our spacious apartment offers everything you need
            for a relaxing and memorable vacation.
          </p>
          <p>This beautiful apartment features:</p>
          <ul>
            <li>Stunning sea views from the balcony</li>
            <li>Two comfortable bedrooms with ample space</li>
            <li>Fully equipped kitchen for your convenience</li>
            <li>Modern amenities including Wi-Fi and TV</li>
            <li>A private pool for residents</li>
            <li>Easy access to local attractions and dining</li>
            <li>Complimentary welcome basket upon arrival</li>
          </ul>
          <button className={styles.reservationButton}>Book Now</button>
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
                alt={`Casa Los Larios Apartment View ${index + 1}`}
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
