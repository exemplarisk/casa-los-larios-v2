import React from "react";
import styles from "./BookingSection.module.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingSection: React.FC = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <section className={styles.bookingSection}>
      <h2>Book Your Stay</h2>
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <p>Check availability and reserve your stay at Casa Los Larios.</p>
    </section>
  );
};

export default BookingSection;