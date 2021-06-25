//set copyright date
const copy = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? copy.innerHTML = `<i class="far fa-copyright"></i>2018`: copy.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

// Get all checkboxes
const checkBoxes = document.querySelectorAll('.list-item input[type="checkbox"]');
let lastChecked;

function handleCheck(event) {

  let inBetween = false;

  if (event.shiftKey && this.checked) {
    checkBoxes.forEach(checkBox => {
      if (checkBox === this || checkBox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkBox.checked = true;
      }
    });
  }
  lastChecked = this;
}



checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));