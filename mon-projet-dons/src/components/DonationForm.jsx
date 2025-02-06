import React from 'react';

function DonationForm({ formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Nom :
        <input type="text" name="name" value={formData.name} onChange={onChange} required />
      </label>
      <label>
        Email :
        <input type="email" name="email" value={formData.email} onChange={onChange} required />
      </label>
      <label>
        Montant :
        <input type="number" name="amount" value={formData.amount} onChange={onChange} required />
      </label>
      <button type="submit">Faire un don</button>
    </form>
  );
}

export default DonationForm;
