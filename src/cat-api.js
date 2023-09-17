import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_MqQKi3Hi1kOt7KytxsmN1IY78gHGByQrszZsUtR4GxeqRmZte8MjwxXbD9HWoq7P';

export const fetchBreeds = () => {
  const url = 'https://api.thecatapi.com/v1/breeds';
  return axios.get(url);
};
export const fetchCatImage = breedId => {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return axios.get(url);
};

export const fetchCatByBreed = breedId => {
  return axios.get(`https://api.thecatapi.com/v1/breeds/${breedId}`);
};
