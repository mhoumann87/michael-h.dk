// Get all the elements from the site
const headline = document.getElementById('headline');
const list = document.getElementById('list');
const form = document.getElementById('addBook');
const removeBooks = document.getElementById('removeAll');
let deleteBook = document.getElementsByClassName('removeBook');
let butRead = document.getElementsByClassName('butRead');

// Array to store the book objects
const books = [];

// Show all the books on the site
const showBooks = () => {
  headline.innerHTML = books.length > 0 ? 'Your Books' : 'Add Your Books';

  list.innerHTML = '';
  for (let i = 0; i < books.length; i++) {
    list.innerHTML += `<article class="card"> <h2>${books[i].title}</h2> <p>${
      books[i].author
    }</p>  <span class="${books[i].read ? '' : 'red'}"> ${
      books[i].read ? 'Read' : 'Not Read'
    } </span>
    <div class="button-box">
                      <button class="butRead" data-index="${i}">${
      books[i].read ? 'Not Read' : 'Read'
    } </button>
                      <button class="removeBook" data-index="${i}">Remove book</button>
                      </div>
                      `;
  }
};

// Add a new book to the list
const addBook = e => {
  e.preventDefault();
  // Get the values from the form
  const author = e.target.elements.author.value;
  const title = e.target.elements.title.value;

  //Add the values to the arran and set read to false as default
  books.push({ author, title, read: false });

  // Empty the input fields when the values are added to the array
  e.target.elements.author.value = '';
  e.target.elements.title.value = '';

  // Update everything when the array changes
  setBooks();
  showBooks();
  addEvent();
};

// Remove a single book
const removeBook = e => {
  books.splice(e.target.dataset.index, 1);

  setBooks();
  showBooks();
  addEvent();
};

// Remove all books
const removeAll = () => {
  books.splice(0, books.length);
  setBooks();
  showBooks();
};

const toggleRead = e => {
  let index = e.target.dataset.index;

  books[index].read = !books[index].read;
  setBooks();
  showBooks();
  addEvent();
};

// Set add event listeners on all books
const addEvent = () => {
  deleteBook = document.getElementsByClassName('removeBook');

  for (let i = 0; i < deleteBook.length; i++) {
    deleteBook[i].addEventListener('click', removeBook);
  }

  butRead = document.getElementsByClassName('butRead');

  for (let j = 0; j < butRead.length; j++) {
    butRead[j].addEventListener('click', toggleRead);
  }
};

const getBooks = () => {
  try {
    let json = localStorage.getItem('library');
    let data = JSON.parse(json);
    for (let i = 0; i < data.length; i++) {
      books.push(data[i]);
    }
    console.log(books);
    showBooks();
  } catch (e) {
    // Do nothing
    console.log(e);
  }
};

const setBooks = () => {
  let json = JSON.stringify(books);
  localStorage.setItem('library', json);
};

// Add event listeners that only need added one time
form.addEventListener('submit', addBook);
removeBooks.addEventListener('click', removeAll);

// Make the list of books and add event listeners to all of them
getBooks();
addEvent();
