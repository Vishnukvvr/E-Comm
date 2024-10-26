import React, { useState } from 'react';
import LoginModal from '../Login/LoginModal';
import './Navbar.css';

const Navbar = ({ onHomeClick, onAboutClick }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closeLoginModal();
  };

  return (
    <header>
      <div className="name">
        <p>E-COMMERCE</p>
      </div>
      <div className={`list-items ${menuActive ? 'active' : ''}`}>
        <ul>
          <li onClick={onHomeClick}>HOME</li>
          <li onClick={onAboutClick}>ABOUT</li>
          <li><a href="#list">CONTACT</a></li>
        </ul>
      </div>
      <div className="header-btns">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
        {isLoggedIn ? (
          <span>Hi</span>
        ) : (
          <button onClick={openLoginModal}>Account</button>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" onClick={toggleMenu}>
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} onLoginSuccess={handleLoginSuccess} />

    </header>
  );
};

export default Navbar;
