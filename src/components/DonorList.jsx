import React from 'react';

function DonorList({ donations }) {
  return (
    <div className="donor-list">
      <h2>Mur des dons</h2>
      <ul>
        {donations.map((donor, index) => (
          <li key={index}>
            {donor.name} a donné {donor.amount}€
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DonorList;
