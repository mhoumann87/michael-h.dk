(function () {
  const date = new Date().getFullYear();
  const pos = document.querySelector('#copy');
  (date === 2018) ?
    pos.innerHTML = `<i class="far fa-copyright"></i>2018` :
    pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${date}`;
})();

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

// Present the base data in the people array

function showPeople() {
  const showBasis = document.querySelector('.birth-table');
  let basisHtml = `<table>
                  <tr>
                  <th>Name</th>
                  <th>Birth Year</th>
                  </tr>`;

  for (let i = 0; i < people.length; i++) {
    basisHtml += `<tr><td>${people[i].name}</td><td>${people[i].year}</td></tr>`;
  }

  basisHtml += `</table>`;
  showBasis.innerHTML = basisHtml;
}

(function () {
  showPeople();
})();

// Get the user input and show it in the table
const peopleInput = document.querySelector('#people');
peopleInput.addEventListener('submit', addPost);

function addPost(event) {
  event.preventDefault();
  let error = document.querySelector('#error');
  let name = document.querySelector('#name').value;
  let year = document.querySelector('#year').value;

  //Check input
  if (name === '' || year === '') {
    error.innerText = 'You need to fill both fields';
  }

  people.push({ name: name, year: Number(year) });
  showPeople();
  error.innerText = '';
  peopleInput.reset();
}

//Array.prototype.some() & every
const inputAge = document.querySelector('#inputAge');
const ageError = document.querySelector('#ageError');
inputAge.addEventListener('submit', getSome);

function getSome(event) {
  event.preventDefault();
  const suggestion = Number(document.querySelector('#ageSugestion').value);


  //Check input
  if (suggestion === '') {
    ageError.innerText = 'Please enter an age.';
  } else if (suggestion < 0 || suggestion > 99) {
    ageError.innerText = 'Plase enter an age between 0 and 99';
  }

  const resultSome = document.querySelector('.result-some');

  (people.some(person => ((new Date().getFullYear()) - person.year >= suggestion))) ?
    resultSome.innerText = `The array containg persons over the age of ${suggestion}` :
    resultSome.innerText = `There are no persons over the age of ${suggestion} in the array`;

  const resultEvery = document.querySelector('.result-every');

  (people.every(person => ((new Date()).getFullYear()) - person.year >= suggestion)) ?
    resultEvery.innerText = `Every person in the array are over ${suggestion} years old` :
    resultEvery.innerText = `Not all the people in the array are over the age of ${suggestion}`;

  inputAge.reset();

}


//Array.prototype.find()
//No view for the find() methode, my creavity is too low 

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

const foundComment = comments.find(comment => comment.id === 123523);
console.log(foundComment);

const commentIndex = comments.findIndex(comment => comment.id === 2039842);
console.log(commentIndex);


const newComments = comments.splice(commentIndex, 1);
console.table(comments);
console.log(newComments);

