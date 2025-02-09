import React from 'react';
import QRCode from 'react-qr-code';
import '../styles/qrCode.css';

function QRCodeDisplay() {
  const donateUrl = `${window.location.origin}/donate`;

  return (
    <div className="qr-code">
      <QRCode value={donateUrl} size={256} />
    </div>
  );
}

export default QRCodeDisplay;
