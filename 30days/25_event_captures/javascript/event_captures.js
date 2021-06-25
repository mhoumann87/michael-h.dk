// Copyright info
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Event Bubbeling -  Demostration of the bubbel effect
 */

// Get all the divs
const bubDivs = document.querySelectorAll('.bubExample');

// When the div is clicked, set or remove the class
// that with css reverses the color for the div
function bubColorChange() {
  if (this.classList.contains('reverseColor')) {
    this.classList.remove('reverseColor');
  } else {
    this.classList.add('reverseColor');
  }

}

bubDivs.forEach(div => div.addEventListener('click', bubColorChange));

/* 
 * Event Capture - Demostration of the Event Capture effect
 */

// The code for are quite simular to the Bubbeling demo, execpt for the
// div clases and the true in the eventListener, so you can read the comments for 
// the bubbeling demo

/* const capDivs = document.querySelectorAll('.capExample');

function capChangeColor() {
  if (this.classList.contains('reverseColor')) {
    this.classList.remove('reverseColor');
  } else {
    this.classList.add('reverseColor');
  }
} */

capDivs.forEach(div => div.addEventListener('click', capChangeColor, {
  capture: true
}));

/* 
 * Propagation - Demostration of the Propagation effect
 */

// The code for are quite simular to the Bubbeling demo, execpt for the
// event.stopPropagation() on the functionn and  in the eventListener, so you can read the comments for 
// the bubbeling demo

const propaDivs = document.querySelectorAll('.propaExample');

function propaChangeColor(event) {
  event.stopPropagation();
  if (this.classList.contains('reverseColor')) {
    this.classList.remove('reverseColor');
  } else {
    this.classList.add('reverseColor');
  }
}

propaDivs.forEach(div => div.addEventListener('click', propaChangeColor));



/* 
 * Once - Demostration of the once option in  the addEventListner function
 */

//Get all the elements for the demo
const moreButton = document.querySelector('#moreTimes');
const moreText = document.querySelector('#moreText');
const onceButton = document.querySelector('#oneTime');
const onceText = document.querySelector('#onceText');

// Make the variables for the counters and output
let more = 0;
let once = 0;
let moreTime;
let oneTime;

//When button is clicked, make the counter go up and print the output to screen
function moreClicks() {
  more = more + 1;
  (more !== 1) ? moreTime = 'times': moreTime = 'time';
  moreText.innerHTML = `You have clicked me ${more} ${moreTime}`;
}

function oneClick() {
  once = once + 1;
  (once !== 1) ? oneTime = 'times': oneTime = 'time';
  onceText.innerHTML = `You have clicked me ${once} ${oneTime}`;
}

// Show the output when the page loads
(more !== 1) ? moreTime = 'times': moreTime = 'time';
moreText.innerHTML = `You have clicked me ${more} ${moreTime}`;

(once !== 1) ? oneTime = 'times': oneTime = 'time';
onceText.innerHTML = `You have clicked me ${once} ${oneTime}`;

//Add the eventlListeners and set the option once for the once-button
moreButton.addEventListener('click', moreClicks);
onceButton.addEventListener('click', oneClick, {
  once: true
});