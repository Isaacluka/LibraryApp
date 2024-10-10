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

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = readInput.checked? true: false;//read_status;
  this.display = function(title, author, pages, read){
    const bookCard = document.createElement('div');
    bookCard.className = 'bookCard';
  
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = this.title;
  
    const cardBody = document.createElement('h3');
    cardBody.textContent = `${this.title} was written by ${this.author} and is ${this.pages} pages long.`;
  
    const btnDiv = document.createElement('div');
    btnDiv.setAttribute('style', 'display: flex;');
    
    const toggleRead = document.createElement('div');
    toggleRead.setAttribute('style', 'border:.2rem solid #f37500; border-radius: 1rem; font-size: 16px; align-content: centre; padding: .5rem;');
    //toggleRead.setAttribute('style',  'font-size:24px;');
    
    const rmvBtn = document.createElement('div');
  
    
    rmvBtn.innerHTML= '<i class="material-icons" style="font-size:36px;color:#f37500">delete</i>' //'X <i class="fa-solid fa-x"></i>';
    rmvBtn.setAttribute('style', 'color: white;');
    rmvBtn.style.cursor = 'pointer';
    toggleRead.innerHTML= readInput.checked? 'Read': "Not Read";
    toggleRead.addEventListener("click", e=>{
      toggleRead.innerHTML = this.read? "Not Read": "Read";
    })
    console.log(this.read);
  
    btnDiv.appendChild(rmvBtn);
    btnDiv.appendChild(toggleRead);
  
    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardBody);
    bookCard.appendChild(btnDiv);
  
    bookCards.appendChild(bookCard);
  
    rmvBtn.addEventListener("click", e => {
      bookCards.removeChild(bookCard);}
    );
  }
}

function addBookToLibrary(title, author, pages, read) {
  var book = new Book(title, author, pages, read);
  book.display();
  myLibrary.push(book);
  console.log(myLibrary);
  return;
}

addBookToLibrary("The Richest Man in Babylon", "George S. Clason", 184, "true");
addBookToLibrary("Good to Great", "Jim Collin", 320, "true");
addBookToLibrary("Keys to The Deeper Life", "A. W. Tozer", 32, "true");
addBookToLibrary("21 Irrefutable Laws of Leadership", "John C. Maxwell", 336, "true");
addBookToLibrary("The Crucified Life", "A. W. Tozer", 224, "true");


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

