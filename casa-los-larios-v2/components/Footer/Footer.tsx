import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.548187631296!2d-0.7429988846775689!3d37.940984279729584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6307ceef5fb59d%3A0x66c4257a68279c08!2sCalle%20Guapiles%2C%207%2C%2003189%20Orihuela%2C%20Alicante%2C%20Spanien!5e0!3m2!1ssv!2sse!4v1625486117153!5m2!1ssv!2sse";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <section className={styles.footerLogo}>
          <h2 className={styles.brandTitle}>Casa Los Larios</h2>
          <p className={styles.tagline}>Your Ideal Summer Getaway</p>
        </section>
        <address className={styles.contactInfo}>
          <h3>Contact Us</h3>
          <p>Location: C. Guapiles 7, 03189, Orihuela, Alicante, Spain</p>
          <p>
            Email:{" "}
            <a href="mailto:info@casaloslarios.com">info@casaloslarios.com</a>
          </p>
          <p>
            Phone: <a href="tel:+123-456-7890">+123-456-7890</a>
          </p>
        </address>
        <div className={styles.mapContainer}>
          <iframe
            className={styles.mapIframe}
            src={mapSrc}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        <nav className={styles.socialLinks}>
          <h3>Connect</h3>
          <a
            href="https://www.facebook.com/pages/Casa-Los-Larios/1681075912157305"
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
          <a href="/privacypolicy" className={styles.link}>
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;