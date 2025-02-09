import React from 'react';
import QRCode from 'react-qr-code';

function QRCodeDisplay() {
  const donateUrl = `${window.location.origin}/donate`;

  return (
    <div className="qr-code">
      <QRCode value={donateUrl} />
    </div>
  );
}

export default QRCodeDisplay;
