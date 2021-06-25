// Copyright info
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();

(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Speech Recognition 
 */

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', event => {
  //console.log(event.results);
  const transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcript;

  if (event.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }

});

recognition.addEventListener('end', recognition.start);

recognition.start();