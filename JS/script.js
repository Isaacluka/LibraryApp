const dialog = document.querySelector('dialog');
const libraryDiv = document.querySelector('.libraryPage');
const NewBookBtn = document.getElementById('newBook');
const addBtn = document.querySelector('dialog .addBtn');
const cancelBtn = document.querySelector('dialog .cancelBtn');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read')
const bookCards = document.querySelector('.bookCards');



const myLibrary = [];

function Book(title, author, pages, read_status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read_status = read_status;
  this.display = createCard(this.title, this.author, this.pages);
}

function addBookToLibrary(title, author, pages, read) {
  var book = new Book(title, author, pages, read);
  myLibrary.push(book);
  console.log(myLibrary);
  return;
}

function createCard(title, author, pages){
  const bookCard = document.createElement('div');
  bookCard.className = 'bookCard';

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = title;

  const cardBody = document.createElement('h3');
  cardBody.textContent = `${title} was written by ${author} and is ${pages} pages long.`;

  const btnDiv = document.createElement('div');
  const rmvBtn = document.createElement('button');
  const toggleRead = document.createElement('button');

  rmvBtn.innerHTML= '<i class="fa-solid fa-x"></i>';
  rmvBtn.setAttribute('style', 'color: white;');


  //btnDiv.appendChild(rmvBtn);
  //btnDiv.appendChild(toggleRead);

  bookCard.appendChild(cardTitle);
  bookCard.appendChild(cardBody);
  bookCard.appendChild(btnDiv);

  //return bookCard;
  bookCards.appendChild(bookCard);
}

function displayBooks(){
  myLibrary.forEach(book =>{
    book.display();
    console.log(book.title);
  })

}

addBookToLibrary("The Richest Man in Babylon", "George S. Clason", 184, "on");
addBookToLibrary("Good to Great", "Jim Collin", 320, "on");
addBookToLibrary("Keys to The Deeper Life", "A. W. Tozer", 32, "on");
addBookToLibrary("21 Irrefutable Laws of Leadership", "John C. Maxwell", 336, "on");
addBookToLibrary("The Crucified Life", "A. W. Tozer", 224, "on");


// Dialog Tag Code
NewBookBtn.addEventListener('click', () =>{
  dialog.showModal();
})


addBtn.addEventListener('click', e =>{
  e.preventDefault();
  
  // remember to work on read status
  if(!titleInput.value || !authorInput.value || !pagesInput.value){
    alert("Please fill out all required fields.");
    return;
  }
  addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
  dialog.close();
  }  
)

cancelBtn.addEventListener('click', e =>{
  e.preventDefault();
  dialog.close();
})



