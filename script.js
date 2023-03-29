let myLibrary = [];


let bookDetails = {};
const addBook = document.querySelector('[name="addBook"]');





addBook.addEventListener('submit',function (event){
    event.preventDefault();
    const books = document.querySelector('.books');    
    const bookTitle = document.querySelector('#book-title');
    const bookAuthor = document.querySelector('#book-author');
    const pages = document.querySelector('#pages');

    bookDetails.bookTitle =  bookTitle.value;
    bookDetails.bookAuthor = bookAuthor.value;
    bookDetails.pages = pages.value;
    bookDetails.status;
    
    myLibrary.push(bookDetails);
    const book = document.createElement('div');
    book.classList.add('book');
    book.setAttribute('style','color:#1d4ed8;font-weight:bold')

    
    const uList = document.createElement('ul');
    uList.setAttribute('style','padding:10px;');
    const item1 = document.createElement('li');
    item1.setAttribute('style','list-style-type:none');
    uList.appendChild(item1);
    const item2 = document.createElement('li');
    item2.setAttribute('style','list-style-type:none');
    uList.appendChild(item2);
    const item3 = document.createElement('li');
    item3.setAttribute('style','list-style-type:none');
    uList.appendChild(item3);
    const item4 = document.createElement('li');
    item4.setAttribute('style','list-style-type:none;margin-bottom:10px;');
    uList.appendChild(item4);
    const item5 = document.createElement('li');
    item5.setAttribute('style','list-style-type:none;');
    uList.appendChild(item5);
    const readStatus = document.createElement('button');
    readStatus.setAttribute('style','padding:2px;height:30px;width:70px;color:white;background-color:orange;');
    readStatus.textContent = 'PENDING';
    readStatus.setAttribute('type','button');
    readStatus.addEventListener('click',function(){
        if(readStatus.textContent=="PENDING"){
            readStatus.textContent="FINISHED";
            readStatus.setAttribute('style','padding:2px;height:30px;width:70px;background-color:green;color:white;');
        }
        else if(readStatus.textContent=="FINISHED"){
            readStatus.textContent="PENDING";
            readStatus.setAttribute('style','padding:2px;height:30px;width:70px;background-color:orange;color:white;');
        }
    });
 
    

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.setAttribute('style','padding:2px;height:30px;width:70px;color:red;position:relative;bottom:0;float:center;left:20%');
    
    deleteBtn.addEventListener('mouseover',() => {
        deleteBtn.setAttribute('style','background-color:red;color:white;padding:2px;height:30px;width:70px;position:relative;bottom:0;float:center;left:20%');
    });

    deleteBtn.addEventListener('mouseleave',() => {
        deleteBtn.setAttribute('style','padding:2px;height:30px;width:70px;color:red;position:relative;bottom:0;float:center;left:20%;')
    });

    deleteBtn.addEventListener('click',function (){
        book.textContent = "";
        book.classList.remove('book');
        books.appendChild(book);
        
    });

    item1.textContent = `* Book-Title: ${bookTitle.value}`;
    item2.textContent = `* Book-Author: ${bookAuthor.value}`
    item3.textContent = `* Pages: ${pages.value}`;
    item4.textContent = `* Status: `;
    item4.appendChild(readStatus);
    item5.appendChild(deleteBtn);

 

    book.appendChild(uList);


    books.appendChild(book); 
        
    
    bookTitle.value = "";
    bookAuthor.value = "";
    pages.value = "";


       
}
);

