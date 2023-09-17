import { fetchBreeds, fetchCatByBreed, fetchCatImage } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

fetchBreeds()
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
  catInfo.innerHTML = '';
  catInfo.style.visibility = 'hidden';
  loader.style.visibility = 'visible';

  const selectedBreedIndex = breedSelect.selectedIndex;
  const breedId = breedSelect.options[selectedBreedIndex].value;

  fetchCatImage(breedId)
    .then(response => {
      const img = document.createElement('img');
      console.log(response);
      const imgUrl = response.data[0].url;
      console.log(imgUrl);
      img.src = imgUrl;
      catInfo.append(img);
      img.maxWidth = 400;
      img.height = 200;
    })
    .catch(e => {
      error.style.visibility = 'visible';
    });

  fetchCatByBreed(breedId);
});
