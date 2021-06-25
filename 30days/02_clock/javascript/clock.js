// Set the year on the copyright information
(function () {
  const loc = document.getElementById('copy');
  let year = new Date().getFullYear();

  (year === 2018) ?
    loc.innerHTML = `<i class="far fa-copyright"></i>${year}` :
    loc.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;
})();

// Get all the elements that needs to be used
const background = document.querySelector('body');
const clock = document.querySelector('.clock');
const hands = document.querySelectorAll('.hand');
const hourHand = document.getElementById('hour');
const minHand = document.getElementById('min');
const secHand = document.getElementById('sec');
const digi = document.getElementById('digi');

//To "remove" the rotation of the hands
const offSet = 90;

function runTime() {

  // get the time and set hour, minutes and seconds
  let time = new Date();

  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  //Calculate colors based on time and apply it to the elements
  let bgRed = hour * 11;
  let bgGreen = min * 4;
  let bgBlue = sec * 4;
  let bgColor = `rgb(${bgRed}, ${bgGreen}, ${bgBlue})`;
  let frRed = 255 - bgRed;
  let frGreen = 255 - bgGreen;
  let frBlue = 255 - bgBlue;
  let frColor = `rgb(${frRed}, ${frGreen}, ${frBlue})`;
  background.style.backgroundColor = bgColor;
  clock.style.borderColor = frColor;

  for (let i = 0; i < hands.length; i++) {
    hands[i].style.backgroundColor = frColor;

    //Set the digital clock and display it
    digiSec = (sec < 10) ? `0${sec}` : `${sec}`;
    digiMin = (min < 10) ? `0${min}` : `${min}`;

    digi.innerText = `${hour} : ${digiMin} : ${digiSec}`;
    digi.style.color = frColor;

    //Get the clock to show time

    // Seconds degree and apply transformation
    const secDeg = ((sec / 60) * 360) + offSet;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    // Minut degree and apply transformation
    const minDeg = ((min / 60) * 360) + ((sec / 60) * 6) + offSet;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    // Hours degrees and apply transformation
    const hourDeg = ((hour / 12) * 360) + ((min / 60) * 30) + offSet;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

  };
}

setInterval(runTime, 1000);