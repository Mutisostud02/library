let myLibrary = [{"Book-title":"The little mermaid",
"Book-author":"Billy Chapman",
Pages:200,
}];



function Book () {
    //constructor
}
let books = document.querySelector('.books');
const addBook = document.querySelector('[name="addBook"]')
let bookTitle = document.querySelector('#book-title');
let bookAuthor = document.querySelector('#book-author');
let pages = document.querySelector('#pages');
let finishedReading;
let book = {};
let radio = document.getElementsByName('yes-no');

function addBookToLibrary () {
   
   book["book-title"] = bookTitle.value;
   book["book-author"] = bookAuthor.value;
   book["pages"] = pages.value;
  
for(let i = 0;i < radio.length;i++){
   if (radio[i].checked) {
     book["finishedReading"] = radio[i].value;
   }
}

   myLibrary.push(book);
   return console.log(book,myLibrary);

   
}
addBook.addEventListener('submit',function (event){
    this.event = addBookToLibrary();
    event.preventDefault();
}
);

for(let i=0;i<myLibrary;i++){
    console.log("meee");

}