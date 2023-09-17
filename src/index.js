import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

const breeds = fetchBreeds()
  .then(response => {
    for (const element of response.data) {
      const option = document.createElement('option');
      option.value = element.id;
      option.innerHTML = element.name;
      breedSelect.appendChild(option);
    }
    breedSelect.style.visibility = 'visible';
    loader.style.visibility = 'hidden';
    error.style.visibility = 'hidden';
  })
  .catch(e => {
    error.style.visibility = 'visible';
  });

breedSelect.addEventListener('change', e => {
  const a = breedSelect.selectedIndex;

  const breedId = breedSelect.options[a].value;

  fetchCatByBreed(breedId);
});
