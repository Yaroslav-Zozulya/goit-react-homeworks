import { useEffect, useState } from 'react';

import { moviesAPI } from 'moviesAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation, useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const controller = new AbortController();
    (async () => {
      const response = await moviesAPI.getMoviesByQuery(
        searchQuery,
        1,
        controller.signal
      );
      setMovies(response.results);
    })();

    setSearchParams({ query: searchQuery });

    return () => controller.abort();
  }, [searchQuery, setSearchParams, searchParams]);

  useEffect(() => {
    const { query } = Object.fromEntries([...searchParams]);

    if (query) {
      setSearchQuery(query);
      setInputValue(query);
    }
  }, [searchParams]);

  const handleFormSubmit = e => {
    e.preventDefault();

    const query = e.target.name.value;

    setSearchParams({ query });
    setSearchQuery(query);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>{movies && <MoviesList movies={movies} location={location} />}</div>
    </div>
  );
};
export default Movies;
