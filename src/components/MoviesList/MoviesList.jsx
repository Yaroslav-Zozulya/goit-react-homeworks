import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';

export const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MoviesListItem key={movie.id} movie={movie} location={location} />
      ))}
    </ul>
  );
};
