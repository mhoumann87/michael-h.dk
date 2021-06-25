(function () {
  let year = new Date().getFullYear();
  document.querySelector('#year').innerText = year;
  document.querySelector('#copy').innerHTML = (year === 2018) ? `<i class="far fa-copyright"></i>2018` : `<i class="far fa-copyright"></i>2018 - ${year}`;
})();

const photos = document.querySelectorAll('.photo');

function toggleOpen() {
  console.log('clicked');
  this.classList.toggle('open');
}

function toggleActive(event) {
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

photos.forEach(photo => photo.addEventListener('click', toggleOpen));
photos.forEach(photo => photo.addEventListener('transitionend', toggleActive));