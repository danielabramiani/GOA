import React from 'react';
import './Nav.css';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <i className="fas fa-car"></i>
          SuperCar
        </div>
        <div className="nav__menu">
          <ul className="nav__list">
            <li><a href="/" className="nav__link">Home</a></li>
            <li><a href="/cars" className="nav__link">Cars</a></li>
            <li><a href="/about" className="nav__link">About</a></li>
            <li><a href="/contact" className="nav__link">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
