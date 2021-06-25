// Copyright
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Follow Along Nav
 * When the mouse hover over the menu links, a box with imformation will
 * pop up. As the mouse moves over the different links, the old box oloses,
 * and a new one pops-up
 */

// Get the elemenst in the navbar so we can work with them
const triggers = document.querySelectorAll('.navbar > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

// When tho mouse enters a trigger the background and info in the box will pop-up
// Everything that happends are based on css styles, and all we do with the javascript
// is to change the different classes to the elements
function handleEnter() {
  //first the elements "box" pops-up, nothing to see yet
  this.classList.add('trigger-enter');
  // After 1.5 second the the content pops out but only if the "trigger-enter" class is on the element

  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

  // We also need to have the background showing, and we need ir to be behind the elements,
  // and we would very much like that the background pops-up in the right place,
  // even if somebody changes the layout of the page and move the navbar
  background.classList.add('open');

  //We need to calculate how big the bagground should be, based on the content in 
  //the boxes it should be behind, and where it should be placed based on the navbar
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left /* - navCoords.left */
  };

  console.log(dropdownCoords.top)
  console.log(navCoords.top)
  console.log(coords.top)

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px`);
}


// NOw we would like the pop-up would dissapear
// again when the mouse moves away from the menu element

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

//All there is left is to attach the eventListeners and hope for the best
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));