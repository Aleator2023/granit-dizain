import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content" id="contacts">
        <p>© ИП Глушкова Марина Леонидовна</p>
        <p>Свердловская область, г. Красноуральск, ул. Дзержинского, 1Б</p>
        <p>Телефон: <a href="tel:+79222277400">+7 922 227 74 00</a></p>
      </div>
    </footer>
  );
}

export default Footer;