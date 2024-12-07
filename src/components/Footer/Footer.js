import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Информационный мир</h3>
          <p>Манга о информационной безопасности в интернете.</p>
        </div>
        
        <div className="footer-section">
          <h3>Навигация</h3>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/chapters">Главы</Link></li>
            <li><Link to="/title">О тайтле</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Главы манги</h3>
          <ul>
            <li><Link to="/chapter/1/page/1">Глава 1</Link></li>
            <li><Link to="/chapter/2/page/1">Глава 2</Link></li>
            <li><Link to="/chapter/3/page/1">Глава 3</Link></li>
            <li><Link to="/chapter/4/page/1">Глава 4</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Информационный мир. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;