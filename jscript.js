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
const fakeBook = new Book('fake le', 'fakeauthfdfhor', 453, false)
const fakeBook2 = new Book('f title', 'fakddfhdfhuthor', 43, true)
const fakeBook3 = new Book('fffhhfitle', 'fakstjrrjtdjdor', 53, true)


function addBookToLibrary(Book) {
    myLibrary.push(Book)    
}

addBookToLibrary(theHobbit)
addBookToLibrary(fakeBook)
addBookToLibrary(fakeBook2)
addBookToLibrary(fakeBook3)
//console.log(myLibrary)

const grid = document.querySelector('.grid')

for (let item of myLibrary) {
    let titleDiv = document.createElement('div');
    titleDiv.textContent = item.title 
    grid.appendChild(titleDiv)
    let authorDiv = document.createElement('div');
    authorDiv.textContent = item.author 
    grid.appendChild(authorDiv)
    let pagesDiv = document.createElement('div');
    pagesDiv.textContent = item.pages 
    grid.appendChild(pagesDiv)
    let readDiv = document.createElement('div');
    readDiv.textContent = item.read 
    grid.appendChild(readDiv)
    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'X' 
    grid.appendChild(removeBtn)
}