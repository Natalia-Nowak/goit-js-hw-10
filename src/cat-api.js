const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

export const fetchBreeds = () => {
  const url = 'https://api.thecatapi.com/v1/breeds';
  const options = {};

  breedSelect.style.visibility = 'hidden';
  loader.style.visibility = 'visible';

  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const names = [];
      console.log(data);
      for (const element of data) {
        names.push(element.name);
        const option = document.createElement('option');
        option.value = element.id;
        option.innerHTML = element.name;
        breedSelect.appendChild(option);
      }
      breedSelect.style.visibility = 'visible';
      return names;
    });
};

export const fetchCatByBreed = breedId => {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  const options = {};

  catInfo.innerHTML = '';

  fetch(`https://api.thecatapi.com/v1/breeds/${breedId}`, options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      const name = document.createElement('h2');
      const description = document.createElement('p');
      const temperament = document.createElement('p');
      name.innerHTML = data.name;
      description.innerHTML = data.description;
      temperament.innerHTML = data.temperament;

      catInfo.append(name);
      catInfo.append(description);
      catInfo.append(temperament);
    });

  return fetch(url, options)
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
      img.maxWidth = 500;
      img.height = 400;
    });
};
