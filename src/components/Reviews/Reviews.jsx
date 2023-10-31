import { moviesAPI } from 'moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      const response = await moviesAPI.getMovieReviews(
        movieId,
        controller.signal
      );
      setReviews(response.results);
    })();

    return () => controller.abort();
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <h3>Sorry. We can't found reviews 🙄</h3>
  );
};

export default Reviews;
