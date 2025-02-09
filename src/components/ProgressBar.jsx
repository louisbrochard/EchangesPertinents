import React from 'react';

function ProgressBar({ donations }) {
  const totalDonations = donations.reduce((acc, donor) => acc + parseFloat(donor.amount), 0);
  const goal = 10000;
  const progress = Math.min((totalDonations / goal) * 100, 100);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress" style={{ height: `${progress}%` }}></div>
      </div>
      <p className="progress-text">{totalDonations}€ / {goal}€</p>
    </div>
  );
}

export default ProgressBar;
