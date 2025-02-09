import React, { useEffect, useState } from 'react';

function DonorList({ donations }) {
  const [visibleDonations, setVisibleDonations] = useState([]);

  useEffect(() => {
    if (donations.length > 0) {
      setVisibleDonations((prev) => [...donations, ...prev]); // Ajoute les nouveaux dons en haut
    }
  }, [donations]);

  return (
    <div className="donor-list">
      <div className="donor-list-wrapper">
        {visibleDonations.map((donor, index) => (
          <div key={index} className="donor-item">
            <span className="donor-name">{donor.name}</span>
            <span className="donor-amount">+{donor.amount}€</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonorList;
