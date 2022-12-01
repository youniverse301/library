const form = document.getElementById('form')
const boxTitle = document.getElementById('title')
const boxAuthor = document.getElementById('author')
const boxPages = document.getElementById('pages')
const boxreadStatus = document.querySelector('#status')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    formClear();
    newBook = new Book(titleValue,authorValue,pagesValue,readValue)
    myLibrary.push(newBook)
    console.log("hi");
})


const book2 = new Book('The Hobbit','J.R.R Tolkin','320','read');

let myLibrary = [book2]

function Book(title,author,pages,read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    console.log(title + " by " + author + ", " + pages + " pages, " + read)
  }
}

let titleValue;
let authorValue;
let pagesValue;
let readValue;
let book1;

function addBookToLibrary() {
   return titleValue = boxTitle.value,
   authorValue = boxAuthor.value,
   pagesValue = boxPages.value,
   readValue = boxreadStatus.value;
}

function formClear() {
  boxTitle.value = ''
  boxAuthor.value = ''
  boxPages.value = ''
  boxreadStatus.value = ''
}


