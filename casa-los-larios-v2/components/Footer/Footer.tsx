import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <h2 className={styles.title}>Casa Los Larios</h2>
          <p className={styles.subtitle}>Your Ideal Summer Getaway</p>
        </div>
        <div className={styles.contactInfo}>
          <h3>Contact Information</h3>
          <p>Location: Torrevieja, Spain</p>
          <p>Email: info@casaloslarios.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className={styles.socialLinks}>
          <h3>Follow Us</h3>
          <a href="#" target="_blank" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.linkedin.com/in/jonatan-schultz/"
            target="_blank"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" target="_blank" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;