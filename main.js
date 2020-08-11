// book constructor
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI constructor
class UI {
  // add book to list method
  addBookToList(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
    list.appendChild(row);
  }

  // clear fields method
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  // showAlert method
  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    // get the parent
    const container = document.querySelector('.container');
    const form = document.getElementById('book-form');

    container.insertBefore(div, form);

    // set timeout 3s 
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  // delete book method
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
}

// UI.prototype.addBookToList = function(book) {
//   const list = document.getElementById('book-list');
//   const row = document.createElement('tr');
//   row.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.isbn}</td>
//     <td><a href="#" class="delete">X</a></td>
//   `;
//   list.appendChild(row);
// }

// UI.prototype.clearFields = function() {
//   document.getElementById('title').value = '';
//   document.getElementById('author').value = '';
//   document.getElementById('isbn').value = '';
// }

// UI.prototype.showAlert = function(message, className) {
//   const div = document.createElement('div');
//   div.className = `alert ${className}`;
//   div.appendChild(document.createTextNode(message));
//   // get the parent
//   const container = document.querySelector('.container');
//   const form = document.getElementById('book-form');

//   container.insertBefore(div, form);

//   // set timeout 3s 
//   setTimeout(() => {
//     document.querySelector('.alert').remove();
//   }, 3000);
// }

// UI.prototype.deleteBook = function(target) {
//   if(target.className === 'delete') {
//     target.parentElement.parentElement.remove();
//   }
// }

// event listener
document.getElementById('book-form').addEventListener('submit', e => {
  // get the values from form
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
  
  const book = new Book(title, author, isbn);
  const ui = new UI();

  if(title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    ui.addBookToList(book);
    ui.showAlert('Book added!', 'success')
    ui.clearFields();
  }

  e.preventDefault();
});

document.querySelector('#book-list').addEventListener('click', e => {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('Book removed!', 'success');
  e.preventDefault();
})

