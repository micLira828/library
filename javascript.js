
    //Get myLibrary array
   var myLibrary = [];
     const myButton = document.getElementById("add");
 
    //Create a book
    function Book(title, author, numPages){
      this.title = title;
      this.author = author;
      this.numPages = numPages;
    } 

    //Add the book to the array
    function addBookToLibrary(){
        //Put variables for names
        let title = document.forms["addBook"]["name"].value;
        let author = document.forms["addBook"]["author"].value;
        let numPages = document.forms["addBook"]["page_number"].value;
       
        let myBook = new Book(title, author, numPages);
        
        
            // ✅ only runs if value not in array
            myLibrary.push(myBook);
       
        
       }
    
  
       //Create and show all the books
       function displayBooks(){
          for (let i = 0; i < myLibrary.length; i++){
               let bookCover = document.createElement("div");
               bookCover.textContent = myLibrary[i].title + " by " + myLibrary[i].author + " with " + myLibrary[i].pageNum + " pages";
               bookCover.classList.toggle('book_cover');
               document.getElementById("bookShelf").appendChild(bookCover);
          }
       }

      

       myButton.addEventListener("click", function(event) {
        addBookToLibrary();
        displayBooks();
      });

      


     

     
      

      
      

      
      

        
   