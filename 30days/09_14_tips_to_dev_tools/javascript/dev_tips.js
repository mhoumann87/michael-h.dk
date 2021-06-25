const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ?
pos.innerHTML = `<i class="far fa-copyright"></i>2018`:
  pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

//14 tips

//normal
console.log('Normal log: console.log("Normal"):');
console.log('Normal');
console.log('---------------------------');

//with vars (here var is replaced by an emoji)
console.log('Use variables in  your console:');
console.log("console.log('This is a %s string', '👀');")
console.log('This is a %s string', '👀');
console.log('---------------------------');

//Style your console
console.log('Use styles in your console');
console.log("console.log('%cBig text with red background', 'font-size: 20px; background-color: #FF0000;');");
console.log('%cBig text with red background', 'font-size: 20px; background-color: #FF0000;');
console.log('---------------------------');

//Show a warning
console.log('Show a warning in the console:');
console.log("console.warn('This is a warning');");
console.warn('This is a warning');
console.log('---------------------------');

//Show an error
console.log('Show an error in the console:');
console.log("console.error('Not a real error, but look like one');");
console.error('Not a real error, but look like one');
console.log('---------------------------');

//Show information
console.log('Show information in the console:');
console.log("console.info('England is smaller than New England.');(Do not work in Chrome)");
console.info('England is smaller than New England.');
console.log('---------------------------');

//Test assertions in the console
console.log('You can do testing in the console:');
console.log("const p = document.querySelector('p')");
console.log("console.assert(p.classList.contains('test'), 'Not this time');");
const p = document.querySelector('p');
console.assert(p.classList.contains('test'), 'Not this time');
console.log('---------------------------');

//Counting
console.log('You can count in the console:');
console.log("console.count('What you want to count')");
console.count('Mouse');
console.count('Mouse');
console.count('Cat');
console.count('Cat');
console.count('Mouse');
console.count('Cat');
console.count('Mouse');
console.count('Cat');
console.count('Cat');
console.count('Cat');
console.count('Cat');
console.count('Cat');
console.log('---------------------------');

console.log('const testArray = [{ name: "Tom", pet: "Cat" }, { name: "Sheryl", pet: "Turtle" }, { name: "Jane", pet: "Dog" }];');
console.log('---------------------------');
const testArray = [{
  name: "Tom",
  pet: "Cat"
}, {
  name: "Sheryl",
  pet: "Turtle"
}, {
  name: "Jane",
  pet: "Dog"
}];

//Normal array
console.log('Show the array:');
console.log("console.log(testArray);");
console.log(testArray);
console.log('---------------------------');
//show Array in table
console.log('You can show an array in a table: ');
console.log("console.table(testArray);");
console.table(testArray);
console.log('---------------------------');

//grouping together
console.log("You can group the items in array in the console:");

console.log("testArray.forEach(item =>" + "\n" +
  "{console.groupCollapsed(item.name);" + "\n" +
  "console.log(`This is ${item.name}`);" + "\n" +
  "console.log(`The pet is a ${item.pet}`);" + "\n" +
  "console.groupEnd(item.pet);});");

testArray.forEach(item => {
  console.groupCollapsed(item.name);
  console.log(`This is ${item.name}`);
  console.log(`The pet is a ${item.pet}`);
  console.groupEnd(item.pet);
});
console.log('---------------------------');

//View dom elements
console.log('Get all the information about an element on the page:');
console.log("console.dir(p);");
console.dir(p);
console.log('---------------------------');

//Clear
console.log('Clear the console:');
console.log("console.clear()");

//Timing
console.log('Test how long it takes to get fetch some data');
console.log("console.time('fetching data');" + "\n" +
  "fetch('https://jsonplaceholder.typicode.com/todos/1')" + "\n" +
  ".then(data => data.json())" + "\n" +
  ".then(data => {" + "\n" +
  "console.timeEnd('fetching data');" + "\n" +
  "console.log(data);});");

console.time('fetching data');
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
console.log('---------------------------');