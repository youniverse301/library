const library = document.getElementById('library')
const pushLibrary = document.createElement('div')
  pushLibrary.classList.add('pushLibrary')
  library.appendChild(pushLibrary);

const form = document.getElementById('form')
const boxTitle = document.getElementById('title')
const boxAuthor = document.getElementById('author')
const boxPages = document.getElementById('pages')
const boxreadStatus = document.querySelector('#status')
const table = document.querySelector('table');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    newBook = new Book(titleValue,authorValue,pagesValue,readValue)
    myLibrary.push(newBook)
    
    console.log("hi");
})

const book2 = new Book('The Hobbit','J.R.R Tolkin','320','read');
let newBook = []
let myLibrary = [book2]
library.innerHTML += '<div class="myLibrary"></div>'

myLibrary.forEach(function(library) {
    console.log(library);
    pushLibrary.append(myLibrary)
})

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

pushLibrary.innerHTML = "hi"


document.getElementById("submitBtn").onclick=function()
            {
                
                var table = document.getElementById("library");
                var row = table.insertRow(-1);
                var title = row.insertCell(0);
                var author = row.insertCell(1);
                var pages = row.insertCell(2);
                var status = row.insertCell(3);
                title.innerHTML = document.getElementById("title").value;
                author.innerHTML = document.getElementById("author").value;
                pages.innerHTML = document.getElementById("pages").value;
                status.innerHTML = document.getElementById("status").value;
                formClear();
                return false;
            }
