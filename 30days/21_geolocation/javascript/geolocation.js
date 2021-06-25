//copyright info
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Geo location with retrivel of adress information from OpenCage 
 */

//console.log(config.api_key);

const msg = document.querySelector('.message');
const address = document.querySelector('.address');
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
let here;

function getGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation);
    navigator.geolocation.watchPosition((data) => {
      (data.coords.speed === null) ? speed.textContent = '0': speed.textContent = data.coords.speed;
      arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    }, (err) => {
      console.error(err);
    })
  } else {
    msg.innerHTML = `Your browser do not support geolocation`;
  }
}

function getLocation(position) {

  let url = `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=${config.api_key}`;

  fetch(url, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(response => {
      here = `${response.results[0].components.road} ${response.results[0].components.house_number}, ${response.results[0].components.postcode} ${response.results[0].components.village}, ${response.results[0].components.country}`;
      address.innerHTML = here;
    })
    .catch(err => console.error(err));
}



getGeolocation();