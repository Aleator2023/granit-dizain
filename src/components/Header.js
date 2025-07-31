import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/favicon.png';
import menuIcon from '../assets/menu-icon.svg'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="hero">
      <nav className="navbar">
        <div className="logo-block">
          <img src={logo} alt="Гранит-Дизайн" className="logo-img" />
          <span className="logo-text">Гранит-Дизайн</span>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menuIcon} alt="Меню" />
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about">О компании</a></li>
          <li><a href="#products">Продукция</a></li>
          <li><a href="#reviews">Отзывы клиентов</a></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;