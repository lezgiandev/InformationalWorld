import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Главная</Link></li>
        <li><Link to="/chapters" onClick={toggleMenu}>Главы</Link></li>
        <li><Link to="/title" onClick={toggleMenu}>О тайтле</Link></li>
      </ul>
    </nav>
  );
}

export default Header;