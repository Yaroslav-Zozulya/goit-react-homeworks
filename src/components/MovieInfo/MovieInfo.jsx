import { createPosterImg } from 'helpers/createPosterImg';
import { Link } from 'react-router-dom';
export const MovieInfo = ({ movie, location }) => {
  const { title, poster_path, vote_average, genres, overview, release_date } =
    movie;

  const genresList = genres.map(item => item.name).join(', ');
  const releaseDate = release_date.slice(0, 4);
  const voteAverage = vote_average.toFixed(1);
  const poster = createPosterImg(poster_path);

  return (
    <div>
      <div>
        <img src={poster} alt="" />
        <div>
          <h2>
            {title} ({releaseDate})
          </h2>
          <p>User Score: {voteAverage}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresList}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <Link to="cast" state={{ from: location }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location }}>
          Reviews
        </Link>
      </div>
    </div>
  );
};
