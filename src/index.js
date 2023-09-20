import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './it-events-template/src/Layout/Layout';
import MainPage from "./pages/MainPage/MainPage";
import './index.css'
import SearchPage from './pages/SearchPage/SearchPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';

const Root = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);