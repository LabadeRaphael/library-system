var bookStore = []
var areYouEditing=false
var editingIndex;
function saveBook() {
    if (areYouEditing) {
        if (tittle.value=="" ||  author.value=="" || datebought.value=="" ||  price.value=="") {
            document.getElementById("ifempty").innerHTML="<small class=`alert`>kindly fill all the details</small>"
        } else {
            document.getElementById("ifempty").innerHTML=""
            var bookTittle = tittle.value;
            var bookAuthor = author.value;
            var bookDate = datebought.value;
            var bookprice = price.value;
            var bookObj = {tittle:bookTittle,author:bookAuthor,date:bookDate,price:bookprice}
            bookStore[editingIndex]=bookObj
            localStorage.setItem("books",JSON.stringify(bookStore))
            displayBooks()
        }
    } else {
        if (tittle.value=="" ||  author.value=="" || datebought.value=="" ||  price.value=="") {
            document.getElementById("ifempty").innerHTML="<small class=`alert`>kindly fill all the details</small>"
        } else {
            document.getElementById("ifempty").innerHTML=""
            var bookTittle = tittle.value;
            var bookAuthor = author.value;
            var bookDate = datebought.value;
            var bookprice = price.value;
            var bookObj = {tittle:bookTittle,author:bookAuthor,date:bookDate,price:bookprice}
            bookStore.push(bookObj)
            displayBooks()
            localStorage.setItem("books",JSON.stringify(bookStore))   
        }
    }
}
function loadPage(){
    var book = localStorage.getItem("books")
    if (book) {
        bookStore = JSON.parse(book)
        displayBooks()
    } else {
        bookStore = []
    }
}
function displayBooks() {
    display.innerHTML=""
    bookStore.map((eachbook,index)=>{
        display.innerHTML+=`<tr class="text-light bg-danger">
        <td>${index+1}</td>
        <td>${eachbook.tittle}</td>
        <td>${eachbook.author}</td>
        <td>${eachbook.date}</td>
        <td>${eachbook.price}</td>
        <div class="d-flex">
        <td><button class="btn btn-warning btn-sm mx-auto d-block" onclick="edit(${index})">Edit</button></td>
        <td> <button class="btn btn-success btn-sm mx-auto d-block mt-lg-0 mt-2" onclick="deleteBook(${index})">Delete</button></td>
        </div>
        </tr>`
    })
}
const deleteBook = (index) => {
    let answer=confirm("Are you sure")
    if ( answer) {
        bookStore.splice(index,1)
        displayBooks()
        localStorage.setItem("books",JSON.stringify(bookStore))
    }
}
const edit = (index) =>{
    editingIndex=index;
        
    tittle.value = book.tittle
    author.value = book.author
    datebought.value = book.date
    price.value = book.price
    save.innerHTML="UpdateBooks"
    areYouEditing=true
} 