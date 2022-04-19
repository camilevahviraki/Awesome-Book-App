const form = document.querySelector('form');
const bookList = document.getElementById('book-list');
const bookArr = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {
    title: document.getElementById('book_title').value,
    author: document.getElementById('author').value,
  };

  if (obj.title === '' || obj.author === '') {
    e.preventDefault();
  } else if (localStorage.length === 0) {
    bookArr.push(obj);
    localStorage.setItem('bookArrObj', JSON.stringify(bookArr));

    location.reload();
  } else {
    const ArrayStored = localStorage.getItem('bookArrObj');
    const ArrayStoredParse = JSON.parse(ArrayStored);
    ArrayStoredParse.push(obj);
    localStorage.setItem('bookArrObj', JSON.stringify(ArrayStoredParse));

    location.reload();
  }
});

const BookStored = JSON.parse(localStorage.getItem('bookArrObj'));

function updateUi() {
  const buttonRemove = document.createElement('button');
  const bookLi = document.createElement('div');
  buttonRemove.innerText = 'Remove';

  for (let i = 0; i < BookStored.length; i += 1) {
    bookLi.innerHTML += `<p>${BookStored[i].title}</br>${BookStored[i].author}</p>
    <button>Remove</button> <hr>`;

    bookList.append(bookLi);
  }

  const removeBtns = document.querySelectorAll('#book-list button');
  removeBtns.forEach((a, i) => {
    a.addEventListener('click', () => {
      BookStored.splice(i, 1);
      localStorage.setItem('bookArrObj', JSON.stringify(BookStored));

      location.reload();
    });
  });
}

window.addEventListener('load', updateUi);
