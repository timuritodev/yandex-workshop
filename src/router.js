import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "it-events-frontend";
import ResultPage from "./pages/ResultPage/ResultPage";
import MainPage from "./pages/MainPage/MainPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import EventsPage from "./pages/EventsPage/EventsPage";

// const isDev = process.env.NODE_ENV === "development";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="events/:id" element={<EventsPage />} />

      <Route path="favorites" element={<FavoritePage />} />
      <Route path="results" element={<ResultPage />} />
    </Route>
  ),
  { basename: process.env.PUBLIC_URL }
);

export default router;
