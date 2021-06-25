// Copyright info
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * The old arcade game from 1976 Whac-A-Mole, where you hit the "mole" popping
 * up of a hole in a box. Here updated fot the web.
 * The graphics for the hole and the mole by https://wesbos.com/
 */

//First we get all the elements on the page we will work with
// Get the buttons for difficulties
const difficult = document.querySelectorAll('.mode');
//Get game-over div
const gameOver = document.querySelector('.game-over');
// Get the start button
const startButton = document.querySelector('.start');
// Get the div for the highscore list
const highScoreDiv = document.querySelector('.high-score');
// Get the high-score from localstorage if there is any
const highScore = JSON.parse(localStorage.getItem('highScore')) || [];
// Get the divs with the holes
const holes = document.querySelectorAll('.hole');
// Get all the moles
const moles = document.querySelectorAll('.mole');
// Get the score counter
const socreCounter = document.querySelector('.score');
// Get the list for the highscore
const highScoreList = document.querySelector('.hs-list');

// Variable for the dificulty level, start default on mormal mode
var diff = 2;
// Set a variable for the score in the game
var score = 0;
// Variable to check of the game is running
var gameRun = false;
// Set a variable to store the value of last hole chosen
let lastHole;

function setDiff(event) {
  //console.log(event.target.dataset.diff)
  // Get the chosen difficulty level from the button chosed,
  // and parse the value in to a number
  diff = parseInt(event.target.dataset.diff);
  //Romove the black border on the active button
  // and set it to the chosen button (normal mode default from start)
  difficult.forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
  this.classList.add('active');
}

// Get a random-time time for how long th mole is visaible
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Find a random hole to show the mole
function randomHole(holes) {
  // Get a random id based on the arrayu  of holes
  const idx = Math.floor(Math.random() * holes.length);
  // Set a variable with the hole
  const hole = holes[idx];
  //console.log(hole);
  // To be sure to get a new hole every time,
  // check to see if it is the same hole as last time,
  // and if it is, chose a new hole
  if (hole === lastHole) {
    return randomHole(holes);
  }
  // Set last hole to the chosen hole
  lastHole = hole;
  return hole;
}

function showMole() {
  // Variable to store the time
  let time;
  // Get a random time based on the difficulty level
  if (diff === 1) {
    time = randomTime(800, 1500);
  } else if (diff === 2) {
    time = randomTime(400, 1000);
  } else {
    time = randomTime(150, 600);
  }
  const hole = randomHole(holes);
  // Show the mole "in" the chosen hole
  hole.classList.add('up');
  // Remove the mole after the random time
  setTimeout(() => {
    hole.classList.remove('up');
    // Check to see if the game still is running
    // and if it is, show the next mole
    if (gameRun) showMole();
  }, time);

  //console.log(time);
}

function startGame() {
  // Reset the score
  score = 0;
  showScore();
  // When the user pushes the start button, game over dissapears
  gameOver.classList.add('no-show');
  // Set gameRun to true
  gameRun = true;
  //show the moles
  showMole();
  // End the game after a perset time (15 sec)
  setTimeout(() => endGame(), 15000);
}

function hitMole(event) {
  // If it isn't a  real mouseclick no point
  if (!event.isTrusted) return;
  // if it is a real mouseclick, give a point,
  //set the score board and remove the mole
  //check to see if the game is running before you add the score
  if (gameRun) {
    score++;
    showScore();
  }
  this.parentNode.classList.remove('up');
}

function showScore() {
  socreCounter.textContent = score;
}

function populateHighScore() {
  // Check to see if there is a high score list
  //and if there is show it on the page
  if (highScore.length !== 0) {
    highScoreDiv.classList.add('high-score-show');
    //Get the higest scores to the top of the list
    const sortedHiScore = highScore.sort((a, b) => b - a);
    //console.log(sortedHiScore);
    //Put the list on the page
    let html = ``;
    for (let i = 0; i < sortedHiScore.length; i++) {
      html += `<li>${sortedHiScore[i]}</li>`;
    }
    highScoreList.innerHTML = html;
  }
}

function endGame() {
  let endScore = score;
  //console.log('game-over');
  //Show game-over message
  gameOver.classList.remove('no-show');
  // Set gameRun to false
  gameRun = false;
  if (score !== 0) {
    highScore.push(endScore);
    localStorage.setItem('highScore', JSON.stringify(highScore));
    populateHighScore();
  }
}


//Set score counter when page loads
showScore();
// Show highscore list if there are any
populateHighScore();

//Set eventListener to the start button
startButton.addEventListener('click', startGame);
// Set an eventListener to the difficulty buttons
difficult.forEach(button => button.addEventListener('click', setDiff));
// Set eventListener, so we can reegistrer if the mole is hit
moles.forEach(mole => mole.addEventListener('click', hitMole));