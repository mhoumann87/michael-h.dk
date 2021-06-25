// Copyright info
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Countdown timer - A timer with a row of buttons, where you can choose 
 * between a pre-defined number of seconds, or you have the possibility 
 * to enter your own number of minutes in an input box.
 * The timer shows the countdown as well as the end time.  
 */

//Get the time-left display
const timerDisplay = document.querySelector('.display__time-left');
// Get the show-break-ending display
const breakEnds = document.querySelector('.display__break-end');
// Get the buttons with the preset times using the data-time attribute we set in html
const timeButtons = document.querySelectorAll('[data-time]');
// Get the button to toggle between 12hr and 24hr clock
const toggleTime = document.querySelector('.clock-type');

//Set a global variable for the clock-type and set it default to 24hr
var clockType = 24;
// Set a global variable for the countdown
var countdown;
// save the value of the timestamp if user changes clocktype after counter is set
var timestampBackUp = 0;


function chooseClockType() {
  // A simple toggle function fired when the clock-type button is clicked
  if (clockType === 24) {
    clockType = 12;
  } else {
    clockType = 24;
  }
  // Update the text in the button
  setClockType();
}

function setClockType() {
  // A simple tenary function to set the button text
  (clockType === 24) ? toggleTime.innerHTML = `24hr<br>Clock`: toggleTime.innerHTML = `12hr<br>Clock`;
  // If there is set a timestamp when the clock type changes, reset the break-end display  
  if (timestampBackUp !== 0) {
    displayBreakEnd(timestampBackUp);
  }
}

// Get the seconds value from the preset buttons
function startTimer() {
  //console.log(this.dataset.time);
  // Save the value form the button in a variable as an integer
  const seconds = parseInt(this.dataset.time);
  // Use the value in the function to set the timer
  timer(seconds);
}

// Get the minutes the user enters in the input field
function getMinutes(event) {
  // Prevent the page to update when the mins are submitted
  event.preventDefault();
  // console.log(this.minutes.value);
  // Save the input value in a variable
  const mins = this.minutes.value;
  // Change mins to seconds and use the input value in the function to set the timer
  timer(mins * 60);
  // reset the input field
  this.reset();
}

function timer(seconds) {
  //console.log(seconds);
  // To avoid the user just phshes buttons and start a lot of timers
  // we first clear the timers allready set
  clearInterval(countdown);

  // Get the time when the timer is set
  const now = Date.now();
  // Set the time for when the timer ends
  const then = now + seconds * 1000;
  // Set the backup timestamp
  timestampBackUp = then;
  // Set the countdown timer with the initial seconds
  displayTimeLeft(seconds);
  // Set the break-end time display
  displayBreakEnd(then);

  // Start the countdown timer
  countdown = setInterval(() => {
    // Calculate how many seconds there are left, by subtracting the time now,
    // from the break-end time 
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //console.log(secondsLeft);
    // To prevent the contdown becomes negative, reset the counter when it reaches 0
    if (secondsLeft < 0) {
      clearInterval(countdown);
    }
    // Display the countdown
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  //console.log(seconds);
  //Calculate mins
  const minutes = Math.floor(seconds / 60);
  //calculate the remaning seconds
  const remainderSeconds = seconds % 60;
  //Set the initial value for display to 0
  let display = `0:00`;
  // If there are time left show that time in the display
  if (seconds > 0) {
    // Make the output and add a 0 if seconds are less that zero
    display = `${minutes}:${remainderSeconds <10 ? '0':''}${remainderSeconds}`;
  }
  // Show the count down in the tab in the browser if the time isn't 0
  if (seconds > 0) {
    document.title = display;
  } else {
    document.title = `michael-h.dk - 30 days of JavaScript`;
  }
  // Show the countdown timer
  timerDisplay.textContent = display;
}

function displayBreakEnd(timestamp) {
  //console.log(timestamp);
  //"translate" the break-end
  const end = new Date(timestamp);
  //console.log(end.getHours(), end.getMinutes());
  // Get hours and minutes from the time
  const hour = end.getHours();
  const minutes = end.getMinutes();
  let breakEndOutput;
  // Set the putput based on clock-type and time
  if (clockType === 12) {
    if (hour > 12) {
      breakEndOutput = `Be Back At ${hour - 12}:${minutes < 10? '0':''}${minutes}pm`;
    } else {
      breakEndOutput = `Be Back At ${hour}:${minutes < 10? '0':''}${minutes}am`;
    }
  } else {
    breakEndOutput = breakEndOutput = `Be Back At ${hour}:${minutes < 10? '0':''}${minutes}`;
  }
  breakEnds.textContent = breakEndOutput;
}



//Set the clock typebutton then page loads
setClockType();
//Start the display with 0:00
timer(0);
// Add eventListener to toggle the clock type
toggleTime.addEventListener('click', chooseClockType);

//Add eventlistener to get the preset time
timeButtons.forEach(button => button.addEventListener('click', startTimer));

//Add an eventListener to the form using the neme on the form
document.customForm.addEventListener('submit', getMinutes);