(function () {
  let year = new Date().getFullYear();
  document.querySelector('#copy').innerHTML = (year === 2018) ? `<i class="far fa-copyright"></i>2018` : `<i class="far fa-copyright"></i>2018 - ${year}`;
})();

//Get the data
const dataEndpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

//Use fetch() to get the data from the api
fetch(dataEndpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

//Find the matches in the array
function findPlaces(inputName, cities) {
  return cities.filter(place => {
    //see if it is a city or a state
    const regex = new RegExp(inputName, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function showResults() {
  const palcesResult = findPlaces(this.value, cities);
  const html = palcesResult.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="highlight">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="highlight">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  places.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const places = document.querySelector('.places');

searchInput.addEventListener('change', showResults);
searchInput.addEventListener('keyup', showResults);