(function () {
  const year = new Date().getFullYear();
  const pos = document.querySelector('#copy');
  (year === 2018) ?
    pos.innerHTML = `<i class="far fa-copyright"></i>${year}` :
    pos.innerHTML = `<i class="far fa=copyright></i>2018 - ${year}`;
})();

// Get the elements we need to work with
const inputSelectors = document.querySelectorAll('input');

function updateValue() {
  let suffix = this.dataset.suffix || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  console.log(this.value)
}

//Set eventhandler for change
inputSelectors.forEach(input => input.addEventListener('change', updateValue));
//Set eventhandler for mouse move so the value updates all the time
inputSelectors.forEach(input => input.addEventListener('mousemove', updateValue));
