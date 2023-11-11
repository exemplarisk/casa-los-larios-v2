import React from "react";
import styles from "./ApartmentDetails.module.css";
import apartmentInfo from "./apartmentInfoData";

const ApartmentDetails = () => {
  return (
    <section className={styles.infoSection}>
      <h2 className={styles.infoHeading}>WHAT YOU NEED TO KNOW</h2>
      <div className={styles.infoGrid}>
        {apartmentInfo.map((info, index) => (
          <div key={index} className={styles.infoItem}>
            <info.icon className={styles.infoIcon} />
            <h3 className={styles.infoTitle}>{info.title}</h3>
            <p className={styles.infoDescription}>{info.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApartmentDetails;