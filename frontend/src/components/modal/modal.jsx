import React from 'react';
import './modal.css';


export default function Modal({ children, open, onClose }) {
  if (!open) {
    return null;
  }

  const target = () => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={target}>
      <div className="modal-content">{children}</div>
    </div>
  );
}
