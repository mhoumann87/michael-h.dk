// Copyright
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Speech synthesis function
 */

// Get the elements
const message = new SpeechSynthesisUtterance();
let voices = [];
const select = document.querySelector('[name=voice]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakBtn = document.querySelector('#speak');
const stopBtn = document.querySelector('#stop');
message.text = document.querySelector('[name=text]').value;

// Get the voices from the system
function populateVoices() {
  voices = this.getVoices();
  select.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function setVoice() {
  message.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(message);
  }
}

function setOption() {
  message[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
select.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakBtn.addEventListener('click', toggle);
stopBtn.addEventListener('click', toggle(false));