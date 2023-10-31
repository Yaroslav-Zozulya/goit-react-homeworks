import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTU0ZDFmMzI3ZGNiYzJlMTg1ZGJkNTY2MDI1NDU0YyIsInN1YiI6IjYyNzIyNDgxYzc0ZWJhMGYwZjBkOGM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BVuorFOBP3GW94QIx_RZlSyHgorOAXjXgZ0MMBUG4qs',
  },
});

const getTrendingMovies = async signal => {
  try {
    const response = await axiosInstance.get(`/trending/all/day`, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getMoviesByQuery = async (query, page = 1, signal) => {
  try {
    const response = await axiosInstance.get(`/search/movie`, {
      signal,
      params: { query, page },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getMovieById = async (id, signal) => {
  try {
    const response = await axiosInstance.get(`/movie/${id}}`, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getMovieCredits = async (id, signal) => {
  try {
    const response = await axiosInstance.get(`/movie/${id}/credits`, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getMovieReviews = async (id, signal) => {
  try {
    const response = await axiosInstance.get(`/movie/${id}/reviews`, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const moviesAPI = {
  getTrendingMovies,
  getMoviesByQuery,
  getMovieById,
  getMovieCredits,
  getMovieReviews,
};
