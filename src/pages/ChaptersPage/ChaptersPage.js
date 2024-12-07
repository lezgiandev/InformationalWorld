import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';

const Chapters = () => {
  return (
    <div className='chapters-container'>
      <Helmet>
        <title>Главы</title>
      </Helmet>
      <h2 className='chapters-title'>Главы</h2>
      <div className='chapters-list'>
        <Link to="/chapter/1/page/1" className='chapter-link'>Пароли</Link>
        <Link to="/chapter/2/page/1" className='chapter-link'>Социальные сети</Link>
        <Link to="/chapter/3/page/1" className='chapter-link'>QR коды</Link>
        <Link to="/chapter/4/page/1" className='chapter-link'>Компьютер внутри нас</Link>
      </div>
    </div>
  );
}

export default Chapters;