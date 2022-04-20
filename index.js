const form = document.querySelector('form');
const bookList = document.getElementById('book-list');
const AllBookSection = document.getElementById('All-Books');
const formSection = document.getElementById('formSection');
const ContactSection = document.getElementById('contact-us');
const bookArr = [];

const dateContainer = document.getElementById('last-modified');
let currentDate = new Date().toString();
const regX = /\s\w+\s\d\d\s\d\d\d\d\s\d\d:\d\d:\d\d\s/g;
currentDate = currentDate.match(regX).join();
const dateOnly = currentDate.slice(0, 12);
const timeOnly = currentDate.slice(13);
let dayTime = currentDate.slice(13, 15);
dayTime = Number(dayTime);
dateContainer.innerHTML = `${dateOnly}, ${timeOnly} ${dayTime >= 12 ? 'pm' : 'am'} `;

const checkItem = localStorage.getItem('bookArrObj');

const ListBtn = document.getElementById('btn1');
const AddNew = document.getElementById('btn2');
const ContactBtn = document.getElementById('btn3');

function ShowPage1() {
  AllBookSection.style.display = 'flex';
  formSection.style.display = 'none';
  ContactSection.style.display = 'none';
}
function ShowPage2() {
  AllBookSection.style.display = 'none';
  formSection.style.display = 'flex';
  ContactSection.style.display = 'none';
}
function ShowPage3() {
  AllBookSection.style.display = 'none';
  formSection.style.display = 'none';
  ContactSection.style.display = 'flex';
}

ListBtn.addEventListener('click', ShowPage1);
AddNew.addEventListener('click', ShowPage2);
ContactBtn.addEventListener('click', ShowPage3);

class UserBook {
  constructor(title1, author1, id1) {
    this.title = title1;
    this.author = author1;
    this.id = id1;
  }

  addBook() {
    if (this.title === '' || this.author === '') {
      alert('Fill all inputs');
    } else if (!checkItem) {
      bookArr.push(this);
      localStorage.setItem('bookArrObj', JSON.stringify(bookArr));
      location.reload();
    } else {
      const ArrayStored = localStorage.getItem('bookArrObj');
      const ArrayStoredParse = JSON.parse(ArrayStored);
      ArrayStoredParse.push(this);
      localStorage.setItem('bookArrObj', JSON.stringify(ArrayStoredParse));
      location.reload();
    }
  }

  removeBook() {
    const removeBtns = document.querySelectorAll('#book-list button');
    const BookStored = JSON.parse(localStorage.getItem('bookArrObj'));
    removeBtns.forEach((a, i) => {
      a.addEventListener('click', () => {
        const BookFiltered = BookStored.filter((book, index) => index !== i);
        this.id = i;
        localStorage.setItem('bookArrObj', JSON.stringify(BookFiltered));
        location.reload();
      });
    });
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleVal = document.getElementById('book_title').value;
  const authorVal = document.getElementById('author').value;
  const Store = JSON.parse(localStorage.getItem('bookArrObj'));
  const idVal = Store.length;

  const SaveBook = new UserBook(titleVal, authorVal, idVal);
  SaveBook.addBook();
});

const BookStored = JSON.parse(localStorage.getItem('bookArrObj'));

function updateUi() {
  const buttonRemove = document.createElement('button');
  const bookLi = document.createElement('div');
  buttonRemove.innerText = 'Remove';

  for (let i = 0; i < BookStored.length; i += 1) {
    function assignClass() {
      if (i % 2 === 0) { return 'greyDiv'; } return 'darkDiv';
    }
    bookLi.innerHTML += `<div class='${assignClass()}'>
      <p class="p_title">"${BookStored[i].title}" </p>
      <p class="p_by">by</p>
      <p class="p_author"> ${BookStored[i].author}</p>
      <button>Remove</button> 
    </div>`;

    bookList.append(bookLi);
  }

  const RemoveBook = new UserBook();
  RemoveBook.removeBook();
}

window.addEventListener('load', updateUi);
