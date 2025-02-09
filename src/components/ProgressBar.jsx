import React from 'react';

function ProgressBar({ donations }) {
  const totalDonations = donations.reduce((acc, donor) => acc + parseFloat(donor.amount), 0);
  const goal = 10000; // Montant cible
  const progress = (totalDonations / goal) * 100;

  return (
    <div className="progress-bar">
      <div style={{ width: `${progress}%` }} className="progress"></div>
      <p>{totalDonations}€ / {goal}€</p>
    </div>
  );
}

export default ProgressBar;
