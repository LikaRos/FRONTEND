import { useEffect } from 'react';
import styles from './AuthModal.module.css';

export const Modal = ({ onRequestClose }) => {
  // Use useEffect to add an event listener to the document

  useEffect(() => {
    function onKeyDown(event) {}
    // Prevent scolling
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <div className={styles.modal__backdrop}>
      <div className={styles.modal__container}>
        <h3 className={styles.modal__title}>
          Email verification notification!
        </h3>

        <p>
          Dear new user,
          <br /> To close this modal, please verify your account. Please open
          your email that you mentioned in registartion form and follow by
          instructions.{' '}
        </p>
        <button
          className={styles.modalBtn}
          type="button"
          onClick={onRequestClose}
        >
          Close this modal
        </button>
      </div>
    </div>
  );
};
