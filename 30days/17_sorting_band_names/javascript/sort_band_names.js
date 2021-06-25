// Copyright info
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Sorting band names without articles
 */

// Get the elements
const bandList = document.querySelector('.band-list');
const addBand = document.querySelector('#add-band');
const message = document.querySelector('.msg');

// Setup an array
const bandnames = [
  'The Flaming Lips',
  'Lynyrd Skynyrd',
  'The Jesus and Mary Chain',
  'The The',
  'A Tribe Called Quest',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
  'The Cure'
];

var sortedBands = [];

//function to add new band to the list
function addNewBand(event) {
  // Stop the page from refresh when new is added
  event.preventDefault();

  const newName = addBand.querySelector('input[name=bandname]').value;
  if (newName === '') {
    message.innerText = 'You need to add an band name';
  } else {
    bandnames.push(newName);
    sortBands();
    this.reset();
  }
}

// Remove the articles you want to eliminate
function removeArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}
console.log(removeArticle('The Beatles'));
//function to sort the band names
function sortBands() {
  sortedBands = bandnames.sort((a, b) => removeArticle(a) > removeArticle(b) ? 1 : -1);
  addBands();

}

// Function to fill the list
function addBands() {
  let html = '';
  for (let i = 0; i < sortedBands.length; i++) {
    html += `<li>${sortedBands[i]}</li>`;
  }
  bandList.innerHTML = html;
}

// Eventlistner for new input
addBand.addEventListener('submit', addNewBand);

// Fill the list 
sortBands();