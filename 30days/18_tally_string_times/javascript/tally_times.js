//copyright information
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Caltulating the total time
 */

// Get the time nodes
const timeData = Array.from(document.querySelectorAll('[data-time]'));
const showTotal = document.querySelector('#time');

// Filter out the time info and turn them into one sum in seconds
const seconds = timeData
  .map(node => node.dataset.time)
  .map(timeCode => {
    [mins, secs] = timeCode.split(':')
      .map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

// Calsulate total hours, minutes and seconds

let remainingSeconds = seconds;

const hours = Math.floor(remainingSeconds / 3600);
remainingSeconds = remainingSeconds % 3600;

const minutes = Math.floor(remainingSeconds / 60);
remainingSeconds = remainingSeconds % 60;

showTotal.innerText = `${hours}:${minutes}:${remainingSeconds}`;