import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingSection.module.css";

const BookingSection: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
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
  ];

  const isDateBlocked = (date: Date) => {
    return bookedDates.some(
      (bookedDate) => date.getTime() === bookedDate.getTime()
    );
  };

  const calculateTotalNights = () => {
    if (!startDate || !endDate) return 0;
    return (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  };

  const calculateTotalCost = () => {
    return calculateTotalNights() * pricePerNight;
  };

  return (
    <div className={styles.container}>
      <div className={styles.datePickerContainer}>
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
      <div className={styles.summaryContainer}>
        <div className={styles.summaryHeader}>
          <p>
            <strong>Total Nights:</strong> <span>{calculateTotalNights()}</span>
          </p>
          <p>
            <strong>Total Cost:</strong>{" "}
            <span>SEK {calculateTotalCost().toFixed(2)}</span>
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
        <button className={styles.reserveButton}>Reserve</button>
      </div>
    </div>
  );
};

export default BookingSection;