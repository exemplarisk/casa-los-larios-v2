import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FullScreenModal from "./FullScreenModal/FullScreenModal";
import Stepper from "./Stepper/Stepper";
import BookingForm from "./BookingForm/BookingForm";
import styles from "./BookingSection.module.css";
import { useRouter } from "next/router";
import bookedDates from "./bookedDates";

const BookingSection: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    fullName: "",
    email: "",
    guests: 1,
  });

  const pricePerNight = 150;
  const serviceFee = 50;
  const router = useRouter();

  const calculateTotalNights = () => {
    if (!startDate || !endDate) return 0;
    return Math.round(
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
    );
  };

  const calculateTotalCost = () => {
    return calculateTotalNights() * pricePerNight + serviceFee;
  };

  const handleReservationDetailsSubmit = (details: {
    fullName: string;
    email: string;
    guests: number;
  }) => {
    // Save the details and move to the next step
    setBookingDetails(details);
    setStep(2); // Move to confirmation step
  };

  const handleReservationSubmit = (details: {
    fullName: string;
    email: string;
    guests: number;
  }) => {
    setBookingDetails(details);
    const formattedStartDate = startDate ? startDate.toDateString() : "";
    const formattedEndDate = endDate ? endDate.toDateString() : "";
    const emailBody = `Hi! I would like to make a reservation for below dates:\n\nName: ${
      details.fullName
    }\nEmail: ${details.email}\nNumber of Guests: ${
      details.guests
    }\nDates: ${formattedStartDate} - ${formattedEndDate}\nTotal Cost: ${calculateTotalCost().toFixed(
      2
    )} €`;
    const mailtoLink = `mailto:par.m79@hotmail.se?subject=Casa Los Larios - Reservation&body=${encodeURIComponent(
      emailBody
    )}`;

    window.location.href = mailtoLink;
    setModalIsOpen(false);
    setStep(1);
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
            onChange={(date) => setStartDate(date)}
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
            onChange={(date) => setEndDate(date)}
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
          <strong>{totalNights}</strong>
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
          onClick={() => setModalIsOpen(true)}
          disabled={isReserveButtonDisabled}
          className={`${styles.reserveButton} ${
            isReserveButtonDisabled ? styles.disabledButton : ""
          }`}
          title={
            isReserveButtonDisabled
              ? "Please select at least one night to reserve"
              : ""
          }
        >
          Reserve
        </button>
      </div>
      <FullScreenModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <Stepper currentStep={step} />
        {step === 1 && (
          <BookingForm onSubmit={handleReservationDetailsSubmit} />
        )}
        {step === 2 && (
          <div className={styles.confirmationStep}>
            <h2>Confirm Your Booking</h2>
            <div className={styles.bookingDetailsConfirmation}>
              <p>
                <strong>Name:</strong> {bookingDetails.fullName}
              </p>
              <p>
                <strong>Email:</strong> {bookingDetails.email}
              </p>
              <p>
                <strong>Guests:</strong> {bookingDetails.guests}
              </p>
              <p>
                <strong>Check-in:</strong> {startDate?.toDateString()}
              </p>
              <p>
                <strong>Check-out:</strong> {endDate?.toDateString()}
              </p>
              <p>
                <strong>Total Nights:</strong> {calculateTotalNights()}
              </p>
              <p>
                <strong>Total Cost:</strong> {calculateTotalCost().toFixed(2)} €
              </p>
            </div>
            <button
              className={styles.confirmButton}
              onClick={() => handleReservationSubmit(bookingDetails)}
            >
              Submit Reservation
            </button>

            <button className={styles.backButton} onClick={() => setStep(1)}>
              Back
            </button>
          </div>
        )}
      </FullScreenModal>
    </div>
  );
};

export default BookingSection;