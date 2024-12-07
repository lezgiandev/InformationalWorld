import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import chaptersData from '../../data/chapters.json';
import { Helmet } from 'react-helmet';
import './style.css'; // Импортируем CSS файл для стилей

const ChapterPage = () => {
  const { chapterId, pageId } = useParams();
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(parseInt(pageId));

  useEffect(() => {
    const chapter = chaptersData.find(ch => ch.chapter === `Глава ${chapterId}`);
    if (chapter) {
      setPages(chapter.pages);
    } else {
      setPages([]);
    }
  }, [chapterId]);

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
      navigate(`/chapter/${chapterId}/page/${currentPage + 1}`);
      localStorage.setItem('lastPage', JSON.stringify(currentPage + 1));
      localStorage.setItem('lastChapter', JSON.stringify(chapterId));
    } else {
      const nextChapterIndex = parseInt(chapterId, 10);
      if (nextChapterIndex < chaptersData.length) {
        const nextChapterId = nextChapterIndex + 1;
        navigate(`/chapter/${nextChapterId}/page/1`);
        localStorage.setItem('lastPage', JSON.stringify(currentPage + 1));
        localStorage.setItem('lastChapter', JSON.stringify(chapterId));
        setCurrentPage(1);
      } else {
        alert('Это последняя глава!');
      }
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate(`/chapter/${chapterId}/page/${currentPage - 1}`);
      localStorage.setItem('lastPage', JSON.stringify(currentPage - 1));
      localStorage.setItem('lastChapter', JSON.stringify(chapterId));
    } else {
      const prevChapterIndex = parseInt(chapterId, 10) - 2;
      if (prevChapterIndex >= 0) {
        const prevChapter = chaptersData[prevChapterIndex];
        const lastPageOfPrevChapter = prevChapter.pages.length;
        navigate(`/chapter/${prevChapterIndex + 1}/page/${lastPageOfPrevChapter}`);
        localStorage.setItem('lastPage', JSON.stringify(currentPage - 1));
        localStorage.setItem('lastChapter', JSON.stringify(chapterId));
        setCurrentPage(lastPageOfPrevChapter);
      } else {
        alert('Это первая глава!');
      }
    }
  };

  return (
    <div className="chapter-container">
      <Helmet>
        <title>{`Глава ${chapterId} страница ${currentPage}`}</title>
      </Helmet>
      <img src={pages[currentPage - 1]} alt={`Page ${currentPage}`} className="chapter-image" />
      <div className="navigation-buttons">
        <button onClick={handlePrev} className="nav-button">Назад</button>
        <button onClick={handleNext} className="nav-button">Вперёд</button>
      </div>
    </div>
  );
}

export default ChapterPage;