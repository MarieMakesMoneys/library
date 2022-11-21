class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;  
    }

    info() {
            return this.title + " " + this.author + " " + this.pages + " pages " + this.read;
    }

    readToggle() {
        let arrayIndex = myLibrary.indexOf(this);
        const readBtn = document.querySelector(`.read-toggle[data-array-index="${arrayIndex}"`);
        if (this.read === 'read') {
            readBtn.classList.add('read');
            readBtn.classList.remove('notread');
        } else if (this.read === 'unread') {
            readBtn.classList.add('notread');
            readBtn.classList.remove('read');
        }
        console.log(arrayIndex, this.read)
    };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'unread')

let myLibrary = [theHobbit];

console.log(theHobbit.info())




function addBookToLibrary(Book) {
    myLibrary.push(Book)    
}

const grid = document.querySelector('.grid')
let removeButton = document.querySelectorAll('.remove')
let readToggleBtn = document.querySelectorAll('.read-toggle')

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
        let readToggleBtn = document.createElement('button')
        readToggleBtn.classList.add('read-toggle')
        readToggleBtn.setAttribute('data-array-index', [i])
        readToggleBtn.textContent = myLibrary[i].read
        readDiv.appendChild(readToggleBtn)
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
    
        myLibrary[i].readToggle()

        removeButton = document.querySelectorAll('.remove')
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

        readToggleBtn = document.querySelectorAll('.read-toggle')
        readToggleBtn.forEach((button) => {
            button.addEventListener('click', () => {
                let arrayIndex = button.getAttribute('data-array-index')
                const readBtn = document.querySelector(`.read-toggle[data-array-index="${arrayIndex}"`)
                if (myLibrary[arrayIndex].read === 'read') {
                    myLibrary[arrayIndex].read = 'unread'
                    readBtn.textContent = 'unread'
                } else {
                    myLibrary[arrayIndex].read = 'read'
                    readBtn.textContent = 'read'
                }
        
                myLibrary[arrayIndex].readToggle()
            })
        })


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
let readStatus = 'unread';

readInput.addEventListener('click', function() {
    readInput.classList.toggle('checked')
    if (readInput.classList.value === 'checked') {
        readStatus = 'read'
    } else {
        readStatus = 'unread'
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


