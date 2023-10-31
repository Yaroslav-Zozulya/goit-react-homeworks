import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { lazy } from 'react';

// const { Home, Movies, MoviesDetails } = pages;

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('./pages/MoviesDetails/MoviesDetails'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const Cast = lazy(() => import('./components/Cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} end>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
