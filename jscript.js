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
const fakeBook = new Book('fake title', 'fakeauthor', 453, 'read')


function addBookToLibrary(Book) {
    myLibrary.push(Book)    
}

addBookToLibrary(theHobbit)
addBookToLibrary(fakeBook)
console.log(myLibrary)

