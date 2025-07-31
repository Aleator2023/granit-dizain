import React from 'react';
import '../styles/Header.css';
import logo from '../assets/favicon.png'; // путь к логотипу

const Header = () => {
  return (
    <header className="hero">
      <nav className="navbar">
        <div className="logo-block">
          <img src={logo} alt="Гранит-Дизайн" className="logo-img" />
          <span className="logo-text">Гранит-Дизайн</span>
        </div>
        <ul className="nav-links">
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