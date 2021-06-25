// Copyright
const pos = document.getElementById('copy');
const year = new Date().getFullYear();

(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Slide in function
 */

// Get the images
function bounce(func, wait = 20, imediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!imediate) func.apply(context, args);
    };
    var callNow = imediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context.args);
  };
}

const images = document.querySelectorAll('.slide-in');

function checkSlide() {

  images.forEach(image => {
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', bounce(checkSlide));