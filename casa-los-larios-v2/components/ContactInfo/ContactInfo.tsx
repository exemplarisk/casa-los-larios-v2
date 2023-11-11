import React from "react";
import styles from "./ContactInfo.module.css";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo: React.FC = () => {
  return (
    <section id="contactSection" className={styles.contactSection}>
      <div className={styles.contactHeader}>
        <h2>Contact Us</h2>
      </div>
      <div className={styles.contactDetails}>
        <div className={styles.contactCard}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
          <span>C. Guapiles 7, 03189, Orihuela, Alicante, Spain</span>
        </div>
        <div className={styles.contactCard}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <a href="mailto:info@casaloslarios.com">info@casaloslarios.com</a>
        </div>
        <div className={styles.contactCard}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <a href="tel:+123-456-7890">+123-456-7890</a>
        </div>
      </div>
      <div className={styles.connectSection}>
        <h3>Connect</h3>
        <div className={styles.socialIcons}>
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
            href="https://www.linkedin.com"
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
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
