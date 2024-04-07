import React from 'react';
import styles from './FullScreenModal.module.css'; // Create and style accordingly

interface FullScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const FullScreenModal: React.FC<FullScreenModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.fullScreenModal}>
      <div className={styles.modalContent}>
        {children}
        <div className={styles.actionsContainer}>
          <button onClick={onClose} className={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullScreenModal;