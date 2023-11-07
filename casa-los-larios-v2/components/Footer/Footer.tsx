import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Casa Los Larios</p>
        <p>Torrevieja, Spain</p>
        <p>Email: info@casaloslarios.com</p>
      </div>
    </footer>
  );
};

export default Footer;