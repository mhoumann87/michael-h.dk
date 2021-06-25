// Copyright infp
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Video Speed Controller UI
 */

// We are going to make a javascript controlled video speed controller,
// working with a mouse over and a mouse move eventListener.
// It will be possible to control the speed fron 0.5 times up to 4 times
// the mormal speed.

//First we get our elements

// The white container showing the spees
const speed = document.querySelector('.speed');
// The bar showing the actually speed settings
const bar = document.querySelector('.speed-bar');
// And finally the video it self
const video = document.querySelector('.player');

// The function where all the magic happends :)
function setSpeed(event) {
  // We set some values for the minimum and maximum speed change
  const min = 0.4;
  const max = 4;
  // Then we need to get the placement of the mouse on the bar
  // and we have to offset with the top of the bar to the top of the page
  const y = event.pageY - this.offsetTop;
  //console.log(y)
  // Then we need to get the  percent of the bar the mouse in over 
  const decimal = y / this.offsetHeight;
  const percent = Math.round(decimal * 100) + '%';
  //console.log(percent)
  //Then  we need to calsulate the playback rate
  const playbackRate = decimal * (max - min) + min;
  //console.log(playbackRate);
  //We set the visual presentation of the speen in the bar
  bar.style.height = percent;
  // And we set the number on the bar so it show the speed change
  bar.textContent = playbackRate.toFixed(2) + 'x';
  // And we set the speed to the video ifself
  video.playbackRate = playbackRate;
}

// Lastly we attatch the eventListener to the container and yeah!
speed.addEventListener('mousemove', setSpeed);