// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Layout } from "it-events-frontend";
// import ResultPage from "./pages/ResultPage/ResultPage";
// import './index.css'
// import MainPage from './pages/MainPage/MainPage';
// import FavoritePage from './pages/FavoritePage/FavoritePage';
// import EventsPage from './pages/EventsPage/EventsPage';

// const isDev = process.env.NODE_ENV === 'development';

// const Root = () => {
//   return (
//     <div className="page">
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<MainPage />} />
//           <Route path="/favorites" element={<FavoritePage />} />
//           <Route path="/events/:id" element={<EventsPage />} />
//           <Route path="/results" element={<ResultPage />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter basename={isDev ? '/' : process.env.PUBLIC_URL}>
//       <Root />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>);