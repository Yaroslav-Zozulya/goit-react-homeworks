import { Outlet, useLocation, Link, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { Suspense, useState, useEffect } from 'react';
import { moviesAPI } from 'moviesAPI';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/';

  useEffect(() => {
    const controller = new AbortController();

    (async function () {
      const movie = await moviesAPI.getMovieById(movieId, controller.signal);
      setMovie(movie);
    })();

    return () => controller.abort();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef}>
        <BsArrowLeft />
        Back
      </Link>

      {movie && <MovieInfo movie={movie} location={backLinkRef} />}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
