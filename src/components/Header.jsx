import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo Horizons" className="logo" />
      </div>
    </header>
  );
}

export default Header;
