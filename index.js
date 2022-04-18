const form = document.querySelector("form");
const bookList = document.getElementById("book-list");
const bookArr = [];
let buttnsList = [];
let bookId;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    title: document.getElementById("book_title").value,
    author: document.getElementById("author").value,
  };

  bookArr.push(obj);

  let bookId = localStorage.length;
  localStorage.setItem("bookArrObj" + bookId, JSON.stringify(obj));
});

//Local storage

const BookStored = [];

function updateUi(num) {
  const buttonRemove = document.createElement("button");
  const bookLi = document.createElement("div");
  buttonRemove.innerText = "Remove";

  for (let i = 0; i < localStorage.length; i++) {
    const ParsedBookData = JSON.parse(localStorage.getItem("bookArrObj" + i));
    BookStored.push(ParsedBookData);
  }
  // console.log(BookStored);

  for (let a = 0; a < BookStored.length; a++) {
    const bookTitle = BookStored[a].title;
    const bookAuthor = BookStored[a].author;

    bookLi.innerHTML = `<h3>${bookTitle}:</h3><h4>${bookAuthor}</h4>`;

    // bookLi.textContent = `${obj.title}`

    bookList.append(bookLi, buttonRemove);
  }

  console.log(BookStored);
}

function displayBooks() {
  const bookLi = document.createElement("div");
  const buttonRemove = document.createElement("button");
  buttonRemove.innerText = "Remove";

  var ParsedBookData;

  for (let i = 0; i < localStorage.length; i++) {
    ParsedBookData = JSON.parse(localStorage.getItem("bookArrObj" + i));
    BookStored.push(ParsedBookData);
  }

  for (let a = 0; a < BookStored.length; a++) {
    const bookTitle = BookStored[a].title;
    const bookAuthor = BookStored[a].author;
    // const id = uuid()

    bookLi.innerHTML += `<h3>${bookTitle}:</h3><h4>${bookAuthor}</h4>`;
    bookLi.id =
      // bookLi.insertAdjacentHTML('beforeend', bookLi.append(buttonRemove));
      // console.log(buttonRemove);

      bookLi.append(buttonRemove);
    bookList.append(bookLi);

    const removeBtns = document.querySelectorAll("#book-list button");
    removeBtns.forEach((a, i) => {
      let tempArr = Object.keys(localStorage);
      a.addEventListener("click", (e) => {
        console.log(e);

        // localStorage.
        console.log(i, tempArr);

        localStorage.removeItem(BookStored[i]);
      });
    });
  }
}

console.log(localStorage);
// for(let i = 0; i < buttnsList.length; i++){
//   console.log(buttnsList[i])
// }

window.addEventListener("load", displayBooks);

form.addEventListener("submit", updateUi);
