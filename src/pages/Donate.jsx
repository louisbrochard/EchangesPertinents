import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DonationForm from '../components/DonationForm';
import { addDonation } from '../services/firebase';
import { processPayment } from '../services/stripe';

function Donate() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envoi des informations dans Firebase
    await addDonation(formData);

    // Redirection vers la page de paiement
    await processPayment(formData);

    // Rediriger après paiement réussi
    navigate('/');
  };

  return (
    <div className="donate">
      <DonationForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}

export default Donate;
