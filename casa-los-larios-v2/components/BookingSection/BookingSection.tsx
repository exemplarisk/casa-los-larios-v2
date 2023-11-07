import React from "react";
import styles from "./BookingSection.module.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingSection: React.FC = () => {
  const [startDate, setStartDate] = React.useState(new Date());

  return (
    <section className={styles.bookingSection}>
      <div className={styles.bookingContent}>
        <div className={styles.bookingInfo}>
          <h2>Book Your Stay</h2>
          <p>Discover the perfect getaway at Casa Los Larios.</p>
        </div>
        <div className={styles.bookingForm}>
          <p>Select your dates:</p>
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
          />
          <button className={styles.bookButton}>Check Availability</button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;