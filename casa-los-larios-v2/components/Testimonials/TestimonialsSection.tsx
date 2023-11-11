import React from "react";
import styles from "./TestimonialsSection.module.css";
import testimonials from "./testimonialsData";

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>Guest Testimonials</h2>
      <div className={styles.testimonialsWrapper}>
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className={styles.testimonial}>
            <p className={styles.quote}>{testimonial.quote}</p>
            <footer className={styles.author}>{testimonial.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;