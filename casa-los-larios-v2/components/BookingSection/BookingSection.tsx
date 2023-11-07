import React from "react";
import styles from "./BookingSection.module.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const BookingSection: React.FC = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const checkAvailability = () => {
    Swal.fire({
      title: "Dates Available!",
      text: "The chosen dates are available. Please contact us below for booking.",
      icon: "success",
      confirmButtonText: "Contact Us",
      confirmButtonColor: "#008f68",
    }).then((result) => {
      if (result.isConfirmed) {
        document
          .getElementById("contactSection")
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  return (
    <section className={styles.bookingSection}>
      <div className={styles.bookingContent}>
        <div className={styles.bookingInfo}>
          <h2>Book Your Stay</h2>
          <p>
            Discover the perfect getaway at Casa Los Larios. Select your
            preferred dates to see availability.
          </p>
        </div>
        <div className={styles.bookingForm}>
          <div className={styles.datePicker}>
            <p>Check-in:</p>
            <ReactDatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className={styles.datePicker}>
            <p>Check-out:</p>
            <ReactDatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <button onClick={checkAvailability} className={styles.bookButton}>
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;