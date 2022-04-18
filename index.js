const form = document.querySelector("form");
const bookList = document.getElementById("book-list");
const bookArr = [];
let buttnsList = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    title: document.getElementById("book_title").value,
    author: document.getElementById("author").value,
  };
  //  let ArrayStored;
   if(localStorage.length === 0) {
    bookArr.push(obj);
    localStorage.setItem("bookArrObj", JSON.stringify(bookArr));
    location.reload();

   }else {

    const ArrayStored =localStorage.getItem('bookArrObj');
    const ArrayStoredParse = JSON.parse(ArrayStored);
    ArrayStoredParse.push(obj);
    localStorage.setItem("bookArrObj", JSON.stringify(ArrayStoredParse));
    console.log(ArrayStoredParse);

    location.reload();
   }
   
});


const BookStored = JSON.parse(localStorage.getItem('bookArrObj'));


function updateUi() {
  const buttonRemove = document.createElement("button");
  const bookLi = document.createElement("div");
  buttonRemove.innerText = "Remove";


  for (let i = 0; i < BookStored.length; i++) {

    
    bookLi.innerHTML += `<h3>${BookStored[i].title}</h3><h4>${BookStored[i].author}</h4>`;
    bookLi.append(buttonRemove);
    bookList.append(bookLi);
  
  }


  const removeBtns = document.querySelectorAll("#book-list button");
  removeBtns.forEach((a, i) => {

  a.addEventListener("click", () => {
    BookStored.splice(i, 1);
    localStorage.setItem('bookArrObj', JSON.stringify(BookStored));
    console.log("clicked");
    
    location.reload(); 
  });
})
 
}

console.log(BookStored)

 window.addEventListener("load", updateUi);
