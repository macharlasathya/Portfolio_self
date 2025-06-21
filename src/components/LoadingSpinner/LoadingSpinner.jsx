import React from 'react';
import './LoadingSpinner.css'; // Import the CSS file

const LoadingSpinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="spinner-outer"></div>
        <div className="spinner-inner"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;