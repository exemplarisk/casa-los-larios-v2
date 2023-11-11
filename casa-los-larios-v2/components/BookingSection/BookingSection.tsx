import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingSection.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const BookingSection: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const pricePerNight = 150;

  const bookedDates = [
    new Date("2023-12-25"),
    new Date("2023-12-26"),
    new Date("2023-12-27"),
    new Date("2023-11-19"),
    new Date("2023-11-20"),
    new Date("2023-11-29"),
    new Date("2023-11-30"),
    new Date("2024-01-08"),
    new Date("2024-01-09"),
    new Date("2024-01-10"),
    new Date("2024-01-11"),
    new Date("2024-01-12"),
  ];;

  const calculateTotalNights = () => {
    if (!startDate || !endDate) return 0;
    return (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  };

  const calculateTotalCost = () => {
    return calculateTotalNights() * pricePerNight;
  };

  const openModal = () => {
    if (!startDate || !endDate) {
      alert("Please select both check-in and check-out dates.");
      return;
    }
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // Perform actions after modal opens if necessary
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const initiatePayment = () => {
    // Simulate payment initiation logic
    console.log("Payment initiated");
    closeModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.datePickers}>
        <div className={styles.datePickerContainer}>
          <h3 className={styles.datePickerTitle}>Check-in</h3>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            endDate={endDate}
            selectsStart
            minDate={new Date()}
            excludeDates={bookedDates}
            inline
            monthsShown={1}
          />
        </div>
        <div className={styles.datePickerContainer}>
          <h3 className={styles.datePickerTitle}>Check-out</h3>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            excludeDates={bookedDates}
            inline
            monthsShown={1}
          />
        </div>
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryHeader}>
          <p>
            <strong>Total Nights:</strong> <span>{calculateTotalNights()}</span>
          </p>
          <p>
            <strong>Total Cost:</strong>{" "}
            <span>{calculateTotalCost().toFixed(2)} €</span>
          </p>
        </div>
        <div className={styles.dateSelection}>
          <p>
            <strong>Check-in:</strong>{" "}
            <span>
              {startDate ? startDate.toLocaleDateString() : "Select date"}
            </span>
          </p>
          <p>
            <strong>Check-out:</strong>{" "}
            <span>
              {endDate ? endDate.toLocaleDateString() : "Select date"}
            </span>
          </p>
        </div>
        <button onClick={openModal} className={styles.reserveButton}>
          Reserve
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Booking Details Form"
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <h2>Booking Details</h2>
          <button onClick={closeModal}>close</button>
          {/* Form fields for booking details */}
          <button onClick={initiatePayment}>Confirm Reservation</button>
        </Modal>
      </div>
    </div>
  );
};

export default BookingSection;