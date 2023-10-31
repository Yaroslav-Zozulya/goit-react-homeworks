import { Link } from 'react-router-dom';

export const MoviesListItem = ({ movie, location }) => {
  const { id, name, title } = movie;

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {name || title}
      </Link>
    </li>
  );
};
