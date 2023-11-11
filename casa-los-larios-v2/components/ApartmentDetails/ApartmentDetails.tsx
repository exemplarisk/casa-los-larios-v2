import React from "react";
import styles from "./ApartmentDetails.module.css";
import apartmentInfo from "./apartmentInfoData";

const ApartmentDetails = () => {
  return (
    <section className={styles.infoSection}>
      <h2 className={styles.infoHeading}>ABOUT CASA LOS LARIOS</h2>
      <div className={styles.infoGrid}>
        {apartmentInfo.map((info, index) => {
          const Icon = info.icon as React.FunctionComponent<
            React.SVGProps<SVGSVGElement>
          >;
          return (
            <div key={index} className={styles.infoItem}>
              <Icon className={styles.infoIcon} />
              <h3 className={styles.infoTitle}>{info.title}</h3>
              <div className={styles.infoDescription}>{info.description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ApartmentDetails;