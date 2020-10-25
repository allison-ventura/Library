let library = [];

/*const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
 e.preventDefault();*/

 //Get values from HTML
 var title = document.getElementById('title').value;
 var author = document.getElementById('author').value;
 var number = document.getElementById('pages').value;
 var readY =document.getElementById('y').value;
 var readN =document.getElementById('n').value;
// const book1 = new info('The Hobbit', 'J.R.R. Tolkien', '256 pages', 'not read yet');
// console.log(book1);

//Check if the values are empty

if (!title || !author || number !== -1 || !readY|| !readN) {
  let id = 0;
  let readY = document.getElementById('y').value;
  let readN = document.getElementById('N').value;

} else {
  alert('empty fields');
}

/*if (
    title != '' &&
    author != '' &&
    number != '' &&
    readY != '' &&
    readN != '' &&
    !Number.isNaN(parseInt(pages))
  ) {
    let id = 0;
    let readY = document.getElementById('y').value;
    let readN = document.getElementById('N').value;

    if (library.length > 0) {
      let lastBookId = library[library.length - 1].id;
      id = lastBookId + 1;
    }

    addBookToLibrary(new book(id, title, author, parseInt(pages), read, false));

    display();
  } else {
    alert('Empty fields');
  }*/

 /* form.reset();
});*/


function book(title, author, number, ) {
    this.title = title;
    this.author = author;
    this.number = number;
   
}

function addBookToLibrary(book) {
    library.push(book);
}

function createHTMLwithClassName(element , className) {
    let placeHolder = document.createElement(element);
    placeHolder.classList.add(className);

    return placeHolder;
}

const booksRow = document.querySelector('.books__row');
function bookHTML(book) {
    let bookCol = createHTMLwithClassName('div', 'books__col');
    bookCol.dataset.id = book.id;

    let bookCard = createHTMLElementWithClassName('div', 'books__book');

    //book info
    let bookInfo = createHTMLwithClassName('div',  'book_book--detail');

    let title = createHTMLElementWithClassName('p', 'book__title');
    title.textContent = book.title;

    let author = createHTMLElementWithClassName('p', 'book__author');
    author.textContent = `By ${book.author}`;

    let number = createHTMLElementWithClassName('p', 'book__pages');
    pages.textContent = `Page Count: ${book.number}`;

    //Book Buttons 
    let bookButtons = createHTMLElementWithClassName(
        'div',
        'books__book--buttons'
      );
    
      /*let readStatus = createHTMLElementWithClassName(
        'button',
        'books__book--buttons-read'
      );
      readStatus.addEventListener('click', () => {
        changeReadStatus(book.id);
      });
      if (book.read) {
        readStatus.classList.add('active');
        readStatus.textContent = "I've read this";
      } else {
        readStatus.textContent = "Didn't read this";
      }*/
    
      let deleteButton = createHTMLElementWithClassName(
        'button',
        'books__book--buttons-delete'
      );
      deleteButton.addEventListener('click', () => {
        deleteBook(book.id);
      });
      deleteButton.textContent = 'Delete';
    
      bookButtons.appendChild(readStatus);
      bookButtons.appendChild(deleteButton);
      bookInfo.appendChild(title);
      bookInfo.appendChild(author);
      bookInfo.appendChild(pages);
      bookCard.appendChild(bookCover);
      bookCard.appendChild(bookInfo);
      bookCard.appendChild(bookButtons);
      bookCol.appendChild(bookCard);
      booksRow.appendChild(bookCol);
    

}


function deleteBook(bookId) {
    let book = document.querySelector(`[data-id="${bookId}"]`);
    let bookIndex = library.findIndex((book) => book.id === bookId);
    library.splice(bookIndex, 1);
    booksRow.removeChild(book);
  }
  
  function changeReadStatus(bookId) {
    const bookButton = document.querySelector(
      `[data-id="${bookId}"] .books__book--buttons-read`
    );
    bookButton.classList.toggle('active');
    if (bookButton.textContent === "I've read this") {
      bookButton.textContent = "Didn't read this";
    } else if (bookButton.textContent === "Didn't read this") {
      bookButton.textContent = "I've read this";
    }
  
    const bookIndex = library.findIndex((book) => book.id === bookId);
    library[bookIndex].read = !library[bookIndex].read;
  }
  
  function display() {
    for (let book of library) {
      if (!book.displayed) {
        book.displayed = true;
        bookHTMLMarkup(book);
      }
    }
  }
  
  function randomNumber(num) {
    return Math.floor(Math.random() * num + 1);
  }
  
  display();