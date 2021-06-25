(function () {
  let pos = document.getElementById('copy');
  let year = new Date().getFullYear();

  (year === 2018) ?
    pos.innerHTML = `<i class="far fa-copyright"></i>2018` :
    pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`
})();

// Data sets used for the page

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Inventors section

// Show all data in a table on the page
const dataSetPos = document.getElementById('invData');

function showData() {
  let invHtml = `<table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Born</th>
    <th>Passed</th>
  </tr>`;
  inventors.forEach(inventor => {
    invHtml += `<tr><td>${inventor.first}</td><td>${inventor.last}</td><td>${inventor.year}</td><td>${inventor.passed}</td></tr>`;
  });

  invHtml += `</table>`;
  dataSetPos.innerHTML = invHtml;
};
showData();

//the filter() method

const invError = document.querySelector('.inv-errror');
const show = document.querySelector('.invGrid');

// Run the function when the form is submitted
document.querySelector('#show-inv').addEventListener('submit', showInventors);

function showInventors(event) {
  //clear the inventor div, if there are any shown there
  show.innerHTML = '';
  //prevent the page from refreshing on submit
  event.preventDefault();

  //get the values the user entered
  let invLow = document.querySelector('#invLow').value;
  let invHigh = document.querySelector('#invHigh').value;

  // clean up in the input
  if (invLow === '' || invHigh === '') {
    // Show error message in either field are empty;
    invError.innerText = 'You neeed to fill both fields';
  } else if (invLow === invHigh) {
    //Show error message if it is the same numbers in both fields
    invError.innerText = 'You need to give two different numbers';
  } else {

    // if the user entered the opposit info switch the numbers
    let yearOne, yearTwo;

    if (invLow > invHigh) {
      yearOne = invHigh;
      yearTwo = invLow;
    } else {
      yearOne = invLow;
      yearTwo = invHigh;
    }

    // Time to do the filtering
    const filteredInventors = inventors.filter(inventor => (inventor.year >= yearOne && inventor.year < yearTwo));

    if (filteredInventors.length < 1) {
      document.querySelector('#show-inv').reset();
      invError.innerText = '';
      invError.innerText = `There are no inventors born between ${yearOne} and  ${yearTwo}`;
    } else {
      document.querySelector('#show-inv').reset();
      invError.innerText = '';
      let html = ``;
      filteredInventors.forEach(inventor => {
        html += `
        <div class="inventor">
          <img src="./images/${inventor.last.toLocaleLowerCase()}.jpg" alt="${inventor.first} ${inventor.last}" />
          <h5>${inventor.first} ${inventor.last}</h5>
          <p>Born ${inventor.year}, passed ${inventor.passed}</p>
          <small>Image from <a href="https://www.wikipedia.org/" target="_blank">Wikipedia</a></small>
        </div>
      `;
      });
      show.innerHTML = html;
    }
  }

}

// Array.prototype.map();

//get the first and lastname of the inventors and show the array
(function () {
  const mappedInventors = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  const divMap = document.querySelector('.showMap');
  let mapText = 'onlyNames = [';

  for (let i = 0; i < mappedInventors.length; i++) {
    if (i !== mappedInventors.length - 1) {
      mapText += "'" + mappedInventors[i] + "', ";
    } else {
      mapText += "'" + mappedInventors[i] + "'"
    }
  }
  mapText += '];'
  divMap.innerText = mapText;
})();

// Array.prototype.reduce()
//Find the age of each inventor

const inventorAge = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

document.querySelector('#resTotalAge').innerText = `inventors.reduce((total, inventor) => {return total + (inventor.passed - inventor.year);}, 0) = ${inventorAge}`;

// count instatces of values in a object
(function () {
  const transportation = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

  // Get the div to show the result
  const countInstance = document.querySelector('#countInstance');
  let transportHtml = ``;

  const transportationInstances = transportation.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});


  let transportArray = Object.keys(transportationInstances)
    .map(function (key) {
      return [String(key), transportationInstances[key]];
    });

  for (i = 0; i < transportArray.length; i++) {
    transportHtml += `<div>${transportArray[i][0]}: ${transportArray[i][1]}</div>`;
  }

  countInstance.innerHTML = transportHtml;

})();

//The sort function
//set eventlistener on form

document.getElementById('choose-sort').addEventListener('change', sortInventors);
const showSortedInventors = document.querySelector('.showSortedInventors');
let sortedInventors = [];
let sortedHtml = ``;

(function () {
  sortedInventors = inventors.sort((a, b) => a.first > b.first ? 1 : -1);
  sortedInventors.forEach(inventor => {
    sortedHtml += `
    <div class="inventor">
      <img src="./images/${inventor.last.toLocaleLowerCase()}.jpg" alt="${inventor.first} ${inventor.last}" />
      <h5>${inventor.first} ${inventor.last}</h5>
      <p>Born ${inventor.year}, passed ${inventor.passed}</p>
      <small>Image from <a href="https://www.wikipedia.org/" target="_blank">Wikipedia</a></small>
    </div>
  `;

    showSortedInventors.innerHTML = sortedHtml;
  });

})();





function sortInventors(event) {

  sortedHtml = '';
  showSortedInventors.innerHTML = sortedHtml;

  switch (event.target.value) {
    case 'last':
      sortedInventors = inventors.sort((a, b) => a.last > b.last ? 1 : -1);
      break;
    case 'year':
      sortedInventors = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
      break;
    case 'passed':
      sortedInventors = inventors.sort((a, b) => a.passes > b.passed ? 1 : -1);
      break;
    case 'age':
      sortedHtml = inventors.sort(function (a, b) {
        const lastInventor = a.passed - a.year;
        const nextInventor = b.passed - b.year;
        return lastInventor > nextInventor ? -1 : 1;
      });
      break;
    default:
      sortedInventors = inventors.sort((a, b) => a.first > b.first ? 1 : -1);
  }



  sortedInventors.forEach(inventor => {
    sortedHtml += `
    <div class="inventor">
      <img src="./images/${inventor.last.toLocaleLowerCase()}.jpg" alt="${inventor.first} ${inventor.last}" />
      <h5>${inventor.first} ${inventor.last}</h5>
      <p>Born ${inventor.year}, passed ${inventor.passed}</p>
      <small>Image from <a href="https://www.wikipedia.org/" target="_blank">Wikipedia</a></small>
    </div>
  `;

    showSortedInventors.innerHTML = sortedHtml;
  });


}
