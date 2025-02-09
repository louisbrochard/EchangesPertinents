import React, { useState, useEffect } from 'react';
import QRCodeDisplay from '../components/QRCodeDisplay';
import DonorList from '../components/DonorList';
import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import { getDonations } from '../services/firebase';
import '../styles/home.css';

function Home() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    getDonations(setDonations);
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <div className="left">
          <QRCodeDisplay />
        </div>
        <div className="center">
          <ProgressBar donations={donations} />
        </div>
        <div className="right">
          <DonorList donations={donations} />
        </div>
      </div>
    </div>
  );
}

export default Home;

