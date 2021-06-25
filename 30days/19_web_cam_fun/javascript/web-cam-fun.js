//copyright
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
year === 2018 ?
  (pos.innerHTML = `<i class="far fa-copyright"></i>2018`) :
  (pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`);

/* 
 * Web cam fun
 */

//Get all the elements on the page
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const strip = document.querySelector('.strip');
const choose = document.querySelector('form');
const controls = document.querySelector('.controls');


const ctx = canvas.getContext('2d');
const levels = {};
let effect = 'photoBooth';

choose.addEventListener('change', setEffect);

function setEffect(event) {
  effect = event.target.value;
  setControls();
  paintToCanvas();
}

function setControls() {
  if (effect === 'redEffect') {
    controls.innerHTML = `<h4>Red Effect</h4> `;
  } else if (effect === 'rgb') {
    controls.innerHTML = `<h4>RGB Effect</h4> `;
  } else {
    controls.innerHTML = `<button class="takePhoto">Take Photo</button>`;
  }
}

function getVideo() {
  navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      strip.innerHTML = `<h4>You need to have a webcam connected to use this page</h4>`;
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  if (effect === 'photoBooth') {
    takePhoto();
  }

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);

    if (effect === 'redEffect') {
      pixels = redEffect(pixels);
    }

    if (effect === 'rgb') {
      pixels = rgb(pixels);
    }

    ctx.putImageData(pixels, 0, 0);

  });
}

function takePhoto() {
  document.querySelector('.takePhoto').addEventListener('click', function () {

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'image');
    link.innerHTML = `<img src="${data}" alt="Image from Photo Booth">`;
    strip.insertBefore(link, strip.firstChild);
  });
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200;
    pixels.data[i + 1] = pixels.data[i + 1] - 50;
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
  }
  return pixels;
}

function rgb(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0];
    pixels.data[i + 500] = pixels.data[i + 1];
    pixels.data[i - 550] = pixels.data[i + 2];
  }
  return pixels;
}


setControls();
getVideo();
video.addEventListener('canplay', paintToCanvas);