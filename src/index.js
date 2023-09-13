import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');

axios.defaults.headers.common['x-api-key'] =
  'live_MqQKi3Hi1kOt7KytxsmN1IY78gHGByQrszZsUtR4GxeqRmZte8MjwxXbD9HWoq7P';

const breeds = fetchBreeds();
console.log(breeds);

breedSelect.addEventListener('change', e => {
  const a = breedSelect.selectedIndex;

  const breedId = breedSelect.options[a].value;

  fetchCatByBreed(breedId);
});
