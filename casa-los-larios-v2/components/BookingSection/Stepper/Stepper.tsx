import React from 'react';
import styles from './Stepper.module.css';

interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => (
  <div className={styles.stepper}>
    <div className={currentStep >= 1 ? styles.activeStep : ''}>1. Booking Details</div>
    <div className={currentStep >= 2 ? styles.activeStep : ''}>2. Confirm & Submit</div>
  </div>
);

export default Stepper;