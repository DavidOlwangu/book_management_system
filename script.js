let books = [];

function addBooks(){

    //Collects values entered into the form
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;

    //Check if above containers have value and if pgNo. has a number
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        
        //Book object with properties that stores user entered data
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        
        books.push(book); //Book object details pushed into book array adding books into collection
        showbooks(); //Called to display newly added books
        clearInputs(); //Resets all input fields
    } else {
        alert ('Please fill in all fields correctly');
    }
}

function showbooks(){
    const booksDiv = books.map((book, index) =>`<h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})"> EDIT </button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join(''); //Concates all HTML elements generated for each bk into a single string.
}

function editbook(index){
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); //Remove old entry
    showbooks(); //Refresh list
}

function clearInputs(){
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}