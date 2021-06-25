(function () {
  const year = new Date().getFullYear();
  const pos = document.querySelector('#copy');
  (year !== 2018) ?
    pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}` :
    pos.innerHTML = `<i class="far fa-copyright"></i>2018`;
})();

//get the canvas
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

//set the drawing area (the whole canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Set the Drawing style
context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

//Do the drawing
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
  if (!isDrawing) return; //Don't draw if the mouse button isn't activated
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  //move from
  context.moveTo(lastX, lastY);
  //move to
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// TODO make second canvas working as a normal drawing program