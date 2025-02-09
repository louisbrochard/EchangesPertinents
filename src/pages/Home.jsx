import React, { useState, useEffect } from 'react';
import QRCodeDisplay from '../components/QRCodeDisplay';
import DonorList from '../components/DonorList';
import ProgressBar from '../components/ProgressBar';
import { getDonations } from '../services/firebase';

function Home() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    getDonations(setDonations);
  }, []);

  return (
    <div className="home">
      <QRCodeDisplay />
      <ProgressBar donations={donations} />
      <DonorList donations={donations} />
    </div>
  );
}

export default Home;
