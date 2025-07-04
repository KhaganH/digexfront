import React from 'react';

const Alert = ({ type = 'info', message, onClose, dismissible = false }) => {
  const alertClass = `alert alert-${type}`;
  const classes = dismissible ? `${alertClass} alert-dismissible` : alertClass;

  return (
    <div className={classes} role="alert">
      {message}
      {dismissible && (
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          aria-label="Close"
        ></button>
      )}
    </div>
  );
};

export default Alert;