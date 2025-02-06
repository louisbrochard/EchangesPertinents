import axios from 'axios';

export const processPayment = async (donor) => {
  try {
    const response = await axios.post('/api/payment', donor);
    // Redirection ou traitement après le paiement réussi
    console.log(response.data);
  } catch (error) {
    console.error("Erreur de paiement : ", error);
  }
};
