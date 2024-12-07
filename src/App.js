import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/HomePage';
import Chapters from './pages/ChaptersPage/ChaptersPage';
import Title from './pages/TitlePage/TitlePage';
import Reader from './pages/ReaderPage/ReaderPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/title" element={<Title />} />
            <Route path="/chapter/:chapterId/page/:pageId" element={<Reader />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;