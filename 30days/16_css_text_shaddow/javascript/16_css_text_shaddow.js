//* Copyright
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * CSS text shaddow effect
 */

const main = document.querySelector('main');
const text = main.querySelector('h2');
const dist = 500;

function shadow(event) {
  const {
    offsetWidth: width,
    offsetHeight: height
  } = main;
  let {
    offsetX: x,
    offsetY: y
  } = event;

  if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

  const xDist = Math.round((x / width * dist) - (dist / 2));
  const yDist = Math.round((y / height * dist) - (dist / 2));

  text.style.textShadow = `
  ${xDist}px ${yDist}px 0 rgba(255, 0, 255, 0.7),
  ${xDist * -1}px ${yDist}px 0 rgba(0, 255, 255, 0.7),
  ${yDist}px ${xDist * -1}px 0 rgba(0, 255, 0, 0.7),
  ${yDist * -1}px ${xDist}px 0 rgba(0, 0, 255, 0.7)
  `;
}

main.addEventListener('mousemove', shadow);