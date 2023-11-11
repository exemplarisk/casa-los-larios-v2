import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingSection.module.css";
import Modal from "react-modal";
import bookedDates from "./bookedDates";

Modal.setAppElement("#root");

const BookingSection: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const pricePerNight = 150;
  const serviceFee = 50;

  const calculateTotalNights = () => {
    if (!startDate || !endDate) return 0;
    return (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  };

  const calculateTotalCost = () => {
    return calculateTotalNights() * pricePerNight + serviceFee;
  };

  const initReservation = () => {
    setModalIsOpen(true);
  };

  const handleReservationSubmit = (userData) => {
    // Process user data and send an email
    console.log("User Data:", userData);
    setModalIsOpen(false);
  };

  const totalNights = calculateTotalNights();
  const isReserveButtonDisabled = totalNights <= 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Book Your Stay</h1>
      <div className={styles.calendarContainer}>
        <div className={styles.datePickerSection}>
          <h3 className={styles.datePickerLabel}>Check-in</h3>
          <DatePicker
            selected={startDate}
            onChange={setStartDate}
            startDate={startDate}
            endDate={endDate}
            selectsStart
            minDate={new Date()}
            excludeDates={bookedDates}
            inline
          />
        </div>
        <div className={styles.datePickerSection}>
          <h3 className={styles.datePickerLabel}>Check-out</h3>
          <DatePicker
            selected={endDate}
            onChange={setEndDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            excludeDates={bookedDates}
            inline
          />
        </div>
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.costItem}>
          <span>Price per Night:</span>
          <strong>{pricePerNight.toFixed(2)} €</strong>
        </div>
        <div className={styles.costItem}>
          <span>Total Nights:</span>
          <strong>{calculateTotalNights()}</strong>
        </div>
        <div className={styles.costItem}>
          <span>Service Fee:</span>
          <strong>{serviceFee.toFixed(2)} €</strong>
        </div>
        <div className={styles.totalCostLine}>
          <span>Total Cost:</span>
          <strong>{calculateTotalCost().toFixed(2)} €</strong>
        </div>
        <button
          onClick={initReservation}
          className={`${styles.reserveButton} ${
            isReserveButtonDisabled ? styles.disabledButton : ""
          }`}
          disabled={isReserveButtonDisabled}
          title={
            isReserveButtonDisabled
              ? "Please select at least one night to reserve"
              : ""
          }
        >
          Reserve
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Enter Booking Details"
        className={styles.modal}
      >
        <h2>Enter Booking Details</h2>
        <div className={styles.orderSummary}>
          <p>
            <span>Total Nights:</span>
            <span>{calculateTotalNights()} nights</span>
          </p>
          <p>
            <span>Price per Night:</span>
            <span>{pricePerNight.toFixed(2)} €</span>
          </p>
          <p>
            <span>Service Fee:</span>
            <span>{serviceFee.toFixed(2)} €</span>
          </p>
          <p>
            <span>Total Cost:</span>
            <span>{(calculateTotalCost() + serviceFee).toFixed(2)} €</span>
          </p>
        </div>
        <form onSubmit={handleReservationSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          {}
          <button type="submit">Submit Reservation</button>
        </form>
        <button
          onClick={() => setModalIsOpen(false)}
          className={`${styles.button} ${styles.closeButton}`}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default BookingSection;
