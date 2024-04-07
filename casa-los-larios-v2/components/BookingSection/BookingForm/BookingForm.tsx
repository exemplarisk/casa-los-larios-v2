import React, { useState } from 'react';
import styles from './BookingForm.module.css'; // Create and style accordingly

interface BookingFormProps {
  onSubmit: (details: { fullName: string; email: string; guests: number }) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [details, setDetails] = useState({
    fullName: '',
    email: '',
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.bookingForm}>
      <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
      <select name="guests" required onChange={handleChange}>
        <option value="">Number of Guests</option>
        {Array.from({ length: 8 }, (_, i) => i + 1).map(n => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <button type="submit" className={styles.submitButton}>Submit Reservation</button>
    </form>
  );
};

export default BookingForm;