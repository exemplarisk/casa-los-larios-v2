import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingSection.module.css";
import Modal from "react-modal";
import bookedDates from "./bookedDates";
import { useRouter } from "next/router";

Modal.setAppElement("#root");

const BookingSection: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [emailConfirmationModalOpen, setEmailConfirmationModalOpen] =
    useState<boolean>(false);

  const [showBookingSummary, setShowBookingSummary] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    fullName: "",
    email: "",
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

  const initReservation = () => {
    setModalIsOpen(true);
  };

  const handleEmailSentConfirmation = () => {
    setEmailConfirmationModalOpen(false);
    setShowBookingSummary(true);
  };

  const handleReservationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { fullName, email } = bookingDetails;
    const formattedStartDate = new Date(startDate).toDateString();
    const formattedEndDate = new Date(endDate).toDateString();
    const emailBody = `Hi! I would like to make a reservation for below dates:\n\nName: ${fullName}\nEmail: ${email}\nDates: ${formattedStartDate} - ${formattedEndDate}\nTotal Cost: ${calculateTotalCost().toFixed(
      2
    )} €`;
    const mailtoLink = `mailto:par.m79@hotmail.se?subject=Casa Los Larios - Reservation&body=${encodeURIComponent(
      emailBody
    )}`;

    window.location.href = mailtoLink;
    setModalIsOpen(false);
    setEmailConfirmationModalOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const totalNights = calculateTotalNights();
  const isReserveButtonDisabled = totalNights <= 0;

  return (
    <div className={styles.container}>
      {showBookingSummary ? (
        <div className={styles.bookingSummary}>
          <h2>Your reservation request has been sent!</h2>
          <p>
            Your reservation for {calculateTotalNights()} nights from{" "}
            {startDate?.toLocaleDateString()} to {endDate?.toLocaleDateString()}{" "}
            is yet to be confirmed.
          </p>
          <p>
            A confirmation email with an invoice will be sent to you once we
            have confirmed your reservation!
          </p>
          <button
            onClick={() => {
              setShowBookingSummary(false);
              setModalIsOpen(false);
              router.push("/");
            }}
            className={styles.homeButton}
          >
            Home
          </button>
        </div>
      ) : (
        <>
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
                <span>{calculateTotalNights()}</span>
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
                <span>{calculateTotalCost().toFixed(2)} €</span>
              </p>
              <p style={{ marginTop: "2em", color: "gray" }}>
                <span>Confirming this will open your email client.</span>
                Please send us the reservation email and we can begin processing
                your reservation
              </p>
            </div>
            <form onSubmit={handleReservationSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleInputChange}
              />
              <button type="submit" className={styles.submitButton}>
                Submit Reservation
              </button>
            </form>
            <button
              onClick={() => setModalIsOpen(false)}
              className={styles.closeButton}
            >
              Close
            </button>
          </Modal>
          <Modal
            isOpen={emailConfirmationModalOpen}
            onRequestClose={() => setEmailConfirmationModalOpen(false)}
            contentLabel="Confirm Email Sent"
            className={styles.confirmationModal}
          >
            <h2>Email Confirmation</h2>
            <p>Please confirm that you have sent the reservation email.</p>
            <button
              onClick={handleEmailSentConfirmation}
              className={styles.confirmButton}
            >
              I have sent the email
            </button>
            <button
              onClick={() => setEmailConfirmationModalOpen(false)}
              className={styles.closeButton}
            >
              Close
            </button>
          </Modal>
        </>
      )}
    </div>
  );
};

export default BookingSection;