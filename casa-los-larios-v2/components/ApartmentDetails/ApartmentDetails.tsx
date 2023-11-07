// components/ApartmentDetails/ApartmentDetails.tsx
import React from "react";
import styles from "./ApartmentDetails.module.css";

const ApartmentDetails: React.FC = () => {
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
          </ul>
        </div>
        <div className={styles.detailsImage}>
          <img src="/summergetaway.jpg" alt="Casa Los Larios Apartment" />
        </div>
      </div>
    </section>
  );
};

export default ApartmentDetails;