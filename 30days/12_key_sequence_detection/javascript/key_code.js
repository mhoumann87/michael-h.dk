const pos = document.querySelector('#copy');
const year = new Date().getFullYear();

(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * The page script
 */
const code = 'webdev';

// Set up the help text on the page
const revealButton = document.getElementById('reveal');
const printCode = document.getElementById('codePrint');
//Set the text for the button
revealButton.innerText = 'Reveal Code';
printCode.innerText = '';
let reveal = false;

//Function to change button text and reveal the code
function revealCode() {
  reveal = !reveal;
  (reveal) ? revealButton.innerText = 'Hide Code': revealButton.innerText = 'Reveal Code';
  (reveal) ? printCode.innerText = printCode.innerText = code: printCode.innerText = '';
}

// When button is clicked, reveal the code if it is not shown
revealButton.addEventListener('click', revealCode);

// Set up the code detection
// Array to store the key presses
const keyPress = [];

//function for the key sequence detection
function detectInput(event) {

  keyPress.push(event.key);

  keyPress.splice(-code.length - 1, keyPress.length - code.length);
  if (keyPress.join('').includes(code)) {
    cornify_add();
  }
}

//Add a eventlistener to the page
window.addEventListener('keyup', detectInput);