import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import { Layout } from "it-events-frontend";
import * as page from "./pages";

const isDev = process.env.NODE_ENV === 'development';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<page.MainPage />} />
      <Route
        path="events/:id"
        element={<page.EventsPage />}
        errorElement={<page.NotFoundPage />}
      />
      <Route path="favorites" element={<page.FavoritePage />} />
      <Route path="results" element={<page.ResultPage />} />
      <Route path="*" element={<page.NotFoundPage />} />
    </Route>
  ),
    {
        basename: isDev ? '/' : process.env.PUBLIC_URL
    }
);

export default router;
