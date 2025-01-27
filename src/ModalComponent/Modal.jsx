// Modal.js
import React from 'react';
import styles from '../LoginComponent/login.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>X</button>
        {children}
      </div>
    </>,
     document.getElementById('modal-root')
  );
};

export default Modal;
