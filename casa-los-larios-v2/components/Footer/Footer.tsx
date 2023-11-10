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
        <section className={styles.footerLogo}>
          <h2 className={styles.brandTitle}>Casa Los Larios</h2>
          <p className={styles.tagline}>Your Ideal Summer Getaway</p>
        </section>
        <address className={styles.contactInfo}>
          <h3>Contact Us</h3>
          <p>Location: Torrevieja, Spain</p>
          <p>
            Email:{" "}
            <a href="mailto:info@casaloslarios.com">info@casaloslarios.com</a>
          </p>
          <p>
            Phone: <a href="tel:+123-456-7890">+123-456-7890</a>
          </p>
        </address>
        <nav className={styles.socialLinks}>
          <h3>Connect</h3>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.linkedin.com/in/jonatan-schultz/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </nav>
        <nav className={styles.legalLinks}>
          <a href="/terms" className={styles.link}>
            Terms of Service
          </a>
          <a href="/privacy-policy" className={styles.link}>
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;