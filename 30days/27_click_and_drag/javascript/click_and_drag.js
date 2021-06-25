// Copyright info
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * We hava a div with 25 divs inside, you can scroll through them with the
 * arrow keys, just like you can do on every website. This function will make it
 * possible to "grap" the divs and drag them with the mouse. All visual effects are in
 * the CSS file. All we do here, is adding some classes to the elements.
 */

// First we are going to get the divs
const slider = document.querySelector('.items');

// We need some variables that can hold the values we are working with
let isDown = false; // Value for the mousebutton
let startX; // Where were the mouse when the button were pushed
let scrollLeft; // Picking up the mouse movement

function pushTheButton(event) {
  // When we push the mouse button

  // we set the isDown to true
  isDown = true;
  // We add some styles to the div
  slider.classList.add('active');
  // We grap the position of the mouse
  startX = event.pageX - slider.offsetLeft;
  // We get the info about haw many pixels the mouse have moved
  scrollLeft = slider.scrollLeft;
}

function mouseOut() {
  // When the mouse leave the area

  // We set the isDown to false
  isDown = false;
  // We remove the style we added to the div
  slider.classList.remove('active');
}

function stopButtonPush() {
  // When we stop pushing the mouse button (same as the 
  //mouseOut() function)

  //we set the isDown to false
  isDown = false;
  //And we remove the styles we added
  slider.classList.remove('active');
}

function scrollEffect(event) {
  //When we have the mouse button pushed, and move the
  //mouse, the divs will scroll, following the mouse mevement

  //If the mouse button isn't pushed of the mouse
  //is outside the div, we don't care about what is happening
  if (!isDown) return;
  // To prevent we do anything else with the mouse click
  // than the scroll
  event.preventDefault();
  // Get the position of the mouse
  const x = event.pageX - slider.offsetLeft;
  // Calculate how many pixels the mouse have moved
  //(Here we can add a bigger movement by multiplying the result)
  const walk = x - startX;
  // We add the distance to the divs and we have much rejoicing
  slider.scrollLeft = scrollLeft - walk;
}

// Finally we connect the eventListeners to our functions
slider.addEventListener('mousedown', pushTheButton);
slider.addEventListener('mouseleave', mouseOut);
slider.addEventListener('mouseup', stopButtonPush);
slider.addEventListener('mousemove', scrollEffect);