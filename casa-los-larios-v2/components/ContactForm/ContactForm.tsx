import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
  return (
    <section id="contactSection" className={styles.contactSection}>
      <form
        className={styles.contactForm}
        action="mailto:info@casaloslarios.com"
        method="GET"
        encType="text/plain"
      >
        <h2>Contact Us</h2>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
        />
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Your message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;