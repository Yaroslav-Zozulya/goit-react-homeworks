import { useState } from 'react';
import { moviesAPI } from 'moviesAPI';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import defaultImg from '../../images/default-img.jpg';
const Cast = () => {
  const [actors, setActors] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      const response = await moviesAPI.getMovieCredits(
        movieId,
        controller.signal
      );

      setActors(response.cast);
    })();

    return () => controller.abort();
  }, [movieId]);

  return (
    <ul>
      {actors.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                : defaultImg
            }
            alt={name}
          />
          <h3>{name}</h3>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
