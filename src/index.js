import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "it-events-frontend";
import ResultPage from "./pages/ResultPage/ResultPage";
import './index.css'
import MainPage from './pages/MainPage/MainPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import EventsPage from './pages/EventsPage/EventsPage';

const Root = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/events/:id" element={<EventsPage />} />
          <Route path="/results" element={<ResultPage />} />
        </Route>
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/yandex-workshop/'>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);