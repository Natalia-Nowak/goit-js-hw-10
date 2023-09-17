import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_MqQKi3Hi1kOt7KytxsmN1IY78gHGByQrszZsUtR4GxeqRmZte8MjwxXbD9HWoq7P';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

export const fetchBreeds = () => {
  const url = 'https://api.thecatapi.com/v1/breeds';

  return axios.get(url);
};

export const fetchCatByBreed = breedId => {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  const options = {};

  catInfo.innerHTML = '';
  catInfo.style.visibility = 'hidden';
  loader.style.visibility = 'visible';

  fetch(url, options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      const img = document.createElement('img');
      const imgUrl = data[0].url;
      console.log(imgUrl);
      img.src = imgUrl;
      catInfo.append(img);
      img.maxWidth = 400;
      img.height = 200;
    })
    .catch(e => {
      error.style.visibility = 'visible';
    });

  return fetch(`https://api.thecatapi.com/v1/breeds/${breedId}`, options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      const name = document.createElement('h2');
      const description = document.createElement('p');
      const temperament = document.createElement('p');
      const descriptionBlock = document.createElement('div');

      name.innerHTML = data.name;
      description.innerHTML = data.description;
      temperament.innerHTML = data.temperament;

      descriptionBlock.appendChild(name);
      descriptionBlock.appendChild(description);
      descriptionBlock.appendChild(temperament);
      catInfo.append(descriptionBlock);

      catInfo.style.visibility = 'visible';
      loader.style.visibility = 'hidden';
      error.style.visibility = 'hidden';
      catInfo.style.display = 'flex';
      catInfo.style.gap = '20px';
      descriptionBlock.style.width = '500px';
    });
};
