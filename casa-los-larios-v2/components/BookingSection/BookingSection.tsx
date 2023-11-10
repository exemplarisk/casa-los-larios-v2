import React from "react";
import styles from "./BookingSection.module.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const BookingSection: React.FC = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const bookedDates = [
    new Date("2023-12-25"),
    new Date("2023-12-26"),
    new Date("2023-12-27"),
    new Date("2023-11-19"),
    new Date("2023-11-20"),
    new Date("2023-11-29"),
    new Date("2023-11-30"),
  ];

  const getTotalNights = (start, end) => {
    const diffInTime = end.getTime() - start.getTime();
    return diffInTime / (1000 * 3600 * 24); // Difference in days
  };

  const highlightedDates = {
    "highlighted-dates": bookedDates,
  };

  const checkAvailability = () => {
    let isUnavailable = bookedDates.some(
      (bookedDate) => startDate <= bookedDate && bookedDate <= endDate
    );

    if (isUnavailable) {
      Swal.fire({
        title: "Unavailable Dates Selected",
        text: "Unfortunately, one or more of the chosen dates are not available. Please try different dates.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#008f68",
      });
    } else {
      Swal.fire({
        title: "Dates Available!",
        text: "The chosen dates are available. Please contact us below for booking.",
        icon: "success",
        confirmButtonText: "SURE THING",
        confirmButtonColor: "#008f68",
      }).then((result) => {
        if (result.isConfirmed) {
          document
            .getElementById("contactSection")
            ?.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
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
              excludeDates={bookedDates}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              highlightDates={highlightedDates}
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
              excludeDates={bookedDates}
              minDate={startDate}
              dateFormat="dd/MM/yyyy"
              highlightDates={highlightedDates}
            />
          </div>
          {startDate && endDate && (
            <div className={styles.bookingSummary}>
              <h3>Your Stay:</h3>
              <p>Check-in: {startDate.toLocaleDateString()}</p>
              <p>Check-out: {endDate.toLocaleDateString()}</p>
              <p>Total Nights: {getTotalNights(startDate, endDate)}</p>
            </div>
          )}
          <button onClick={checkAvailability} className={styles.bookButton}>
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;