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
const fakeBook = new Book('title1', 'author', 123, false)
const fakeBook2 = new Book('title2', 'author', 123, false)
const fakeBook3 = new Book('title3', 'author', 123, false)
const fakeBook4 = new Book('title4', 'author', 123, false)
const fakeBook5 = new Book('title5', 'author', 123, false)
const fakeBook6 = new Book('title6', 'author', 123, false)
const fakeBook7 = new Book('title7', 'author', 123, false)
const fakeBook8 = new Book('title8', 'author', 123, false)
const fakeBook9 = new Book('title9', 'author', 123, false)
const fakeBook10 = new Book('title10', 'author', 123, false)
const fakeBook11 = new Book('title11', 'author', 123, false)



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


const grid = document.querySelector('.grid')

let i = 0;
function displayLibrary() {
    while (i < myLibrary.length) {
        let titleDiv = document.createElement('div');
        titleDiv.classList.add('cell')
        titleDiv.setAttribute('data-array-index', [i])
        titleDiv.textContent = myLibrary[i].title 
        grid.appendChild(titleDiv)
        
        let authorDiv = document.createElement('div');
        authorDiv.classList.add('cell')
        authorDiv.setAttribute('data-array-index', [i])
        authorDiv.textContent = myLibrary[i].author 
        grid.appendChild(authorDiv)
        
        let pagesDiv = document.createElement('div');
        pagesDiv.classList.add('cell')
        pagesDiv.setAttribute('data-array-index', [i])
        pagesDiv.textContent = myLibrary[i].pages 
        grid.appendChild(pagesDiv)
        
        let readDiv = document.createElement('div');
        readDiv.classList.add('cell')
        readDiv.setAttribute('data-array-index', [i])
        readDiv.textContent = myLibrary[i].read 
        grid.appendChild(readDiv)
        
        let removeDiv = document.createElement('div')
        removeDiv.classList.add('cell')
        removeDiv.setAttribute('data-array-index', [i])
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove')
        removeBtn.setAttribute('data-array-index', [i])
        removeBtn.textContent = 'x' 
        removeDiv.appendChild(removeBtn)
        grid.appendChild(removeDiv)
    
        i++
    }
}
displayLibrary()



function openForm() {
    document.querySelector('.form-container').style.display = "block"
}

function closeForm() {
    document.querySelector('.form-container').style.display = "none"
}



const submitBtn = document.querySelector('button[type=submit]')
const readInput = document.querySelector('input#read')
let readStatus = false;


readInput.addEventListener('click', function() {
    readInput.classList.toggle('checked')
    if (readInput.classList.value === 'checked') {
        readStatus = true
    } else {
        readStatus = false
    }
})

submitBtn.addEventListener('click', function submitForm(event) {
    event.preventDefault()
    
    let titleInput = document.querySelector('input#title')
    titleInput = titleInput.value

    let authorInput = document.querySelector('input#author')
    authorInput = authorInput.value

    let pagesInput = document.querySelector('input#pages')
    pagesInput = pagesInput.value
    
    let newBook = new Book(titleInput, authorInput, pagesInput, readStatus)
    addBookToLibrary(newBook)

    i = myLibrary.length-1
    displayLibrary()
    
    closeForm()
})


const removeButton = grid.childNodes
console.log(removeButton)

removeButton.forEach((button) => {
    button.addEventListener('click', function() {
        let arrayIndex = this.getAttribute('data-array-index')
        delete myLibrary[arrayIndex]
        let domElements = document.querySelectorAll(`[data-array-index="${arrayIndex}"]`)
        domElements.forEach((element) => {
            element.parentNode.removeChild(element)
        })
    })
})