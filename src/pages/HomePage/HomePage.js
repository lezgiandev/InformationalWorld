import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css'

const Home = () => {
  const navigate = useNavigate();
  const [lastPage, setLastPage] = useState(null);
  const [lastChapter, setLastChapter] = useState(null);

  useEffect(() => {
    const savedPage = localStorage.getItem('lastPage');
    const savedChapter = localStorage.getItem('lastChapter');

    if (savedPage && savedChapter) {
      setLastPage(JSON.parse(savedPage));
      setLastChapter(JSON.parse(savedChapter));
    }
  }, []);

  const handleStartReading = () => {
    if (lastPage && lastChapter) {
      navigate(`/chapter/${lastChapter}/page/${lastPage}`);
    } else {
      navigate(`/chapter/1/page/1`);
    }
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <div className="hero-section">
        <h1 className="hero-title">ИНФОРМАЦИОННЫЙ МИР</h1>
        <p className="hero-subtitle">Погрузитесь в увлекательный мир манги</p>
        
        <div className="reading-options">
          <button className="read-button" onClick={handleStartReading}>
            {lastPage ? 'Продолжить чтение' : 'Начать чтение'}
          </button>
          {lastChapter && (
            <p className="last-page-info">
              Вы остановились на главе: {lastChapter}
            </p>
          )}
          {lastPage && (
            <p className="last-page-info">
              Последняя прочитанная страница: {lastPage}
            </p>
          )}
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3>Тип произведения</h3>
          <p>Манга (японский графический роман)</p>
        </div>
        <div className="feature-card">
          <h3>Дата выпуска</h3>
          <p>2024 год | Зимний сезон</p>
        </div>
        <div className="feature-card">
          <h3>Количество глав</h3>
          <p>4 главы (выпуск продолжается)</p>
        </div>
        <div className="feature-card">
          <h3>Формат издания</h3>
          <p>Чёрно-белый | Традиционный японский стиль</p>
        </div>
        <div className="feature-card">
          <h3>Основной жанр</h3>
          <p>Образовательный | Научно-популярный контент</p>
        </div>
        <div className="feature-card">
          <h3>Статус публикации</h3>
          <p>Онгоинг (серия находится в процессе выпуска)</p>
        </div>
        <div className="feature-card">
          <h3>Возрастной рейтинг</h3>
          <p>12+ (подходит для подростковой аудитории)</p>
        </div>
        <div className="feature-card">
          <h3>Международное название</h3>
          <p>The Information World | ザ・インフォメーション・ワールド</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
