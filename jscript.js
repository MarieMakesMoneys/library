let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + " " + author + " " + pages + " pages " + read
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
const fakeBook = new Book('title', 'author', 123, false)
const fakeBook2 = new Book('title', 'author', 123, false)
const fakeBook3 = new Book('title', 'author', 123, false)
const fakeBook4 = new Book('title', 'author', 123, false)
const fakeBook5 = new Book('title', 'author', 123, false)
const fakeBook6 = new Book('title', 'author', 123, false)
const fakeBook7 = new Book('title', 'author', 123, false)
const fakeBook8 = new Book('title', 'author', 123, false)
const fakeBook9 = new Book('title', 'author', 123, false)
const fakeBook10 = new Book('title', 'author', 123, false)
const fakeBook11 = new Book('title', 'author', 123, false)



function addBookToLibrary(Book) {
    myLibrary.push(Book)    
}

addBookToLibrary(theHobbit)
addBookToLibrary(fakeBook)
addBookToLibrary(fakeBook2)
addBookToLibrary(fakeBook3)
addBookToLibrary(fakeBook4)
addBookToLibrary(fakeBook5)
addBookToLibrary(fakeBook6)
addBookToLibrary(fakeBook7)
addBookToLibrary(fakeBook8)
addBookToLibrary(fakeBook9)
addBookToLibrary(fakeBook10)
addBookToLibrary(fakeBook11)
//console.log(myLibrary)

const grid = document.querySelector('.grid')

for (let item of myLibrary) {
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('cell')
    titleDiv.textContent = item.title 
    grid.appendChild(titleDiv)
    let authorDiv = document.createElement('div');
    authorDiv.classList.add('cell')
    authorDiv.textContent = item.author 
    grid.appendChild(authorDiv)
    let pagesDiv = document.createElement('div');
    pagesDiv.classList.add('cell')
    pagesDiv.textContent = item.pages 
    grid.appendChild(pagesDiv)
    let readDiv = document.createElement('div');
    readDiv.classList.add('cell')
    readDiv.textContent = item.read 
    grid.appendChild(readDiv)
    let removeDiv = document.createElement('div')
    removeDiv.classList.add('cell',)
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove')
    removeBtn.textContent = 'x' 
    removeDiv.appendChild(removeBtn)
    grid.appendChild(removeDiv)
}

function openForm() {
    document.querySelector('.form-container').style.display = "block"
}

function closeForm() {
    document.querySelector('.form-container').style.display = "none"
}