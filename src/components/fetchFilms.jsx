import axios from 'axios';
import PropTypes from 'prop-types';

const KEY = '5df8195cde59490a98b624cfb815be7a';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const getQuery = async searchQuery => {
  // console.log(searchQuery);
  const response = await axios.get(`search/movie?api_key=${KEY}&query=${searchQuery}`
  );
  // console.log(response);
  return response.data;
};

export const getDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  return response.data;
};


export const getCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
  return response.data.results;
};

getTrending.propTypes = {
  search: PropTypes.string.isRequired,
};