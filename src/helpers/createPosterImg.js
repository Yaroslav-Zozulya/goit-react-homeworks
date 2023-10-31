import defaultPoster from '../images/default-img.jpg';

export const createPosterImg = poster => {
  return poster ? `https://image.tmdb.org/t/p/w500/${poster}` : defaultPoster;
};
