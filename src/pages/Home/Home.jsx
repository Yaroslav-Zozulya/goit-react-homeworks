import { useLocation } from 'react-router-dom';
import { moviesAPI } from 'moviesAPI';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    (async function () {
      const movies = await moviesAPI.getTrendingMovies(controller.signal);
      if (movies) {
        setMovies(movies.results);
      }
    })();

    return () => controller.abort();
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      {movies && <MoviesList movies={movies} location={location} />}
    </div>
  );
};

export default Home;
