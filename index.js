const form = document.querySelector('form');
const bookList = document.getElementById('book-list');
const bookArr = []


form.addEventListener('submit',(e)=>{
    e.preventDefault()
let obj = {
    title: document.getElementById('book_title').value,
    author : document.getElementById('author').value,
}

    
bookArr.push(obj);

let bookArrId = localStorage.length+1;
localStorage.setItem('bookArrObj'+bookArrId,JSON.stringify(obj))

}


)

//Local storage






function updateUi(num){
//   const allBooks = JSON.parse(localStorage)
  for(let i = 0; i < localStorage.length;i++){
     console.log(localStorage[i])
  }
//   console.log(allBooks)
// const {title} = JSON.parse();
// const {author} = JSON.parse(localStorage.getItem('obj'));


//     const bookLi = document.createElement('li');
    
//     bookLi.innerHTML = `<h3>${title}</h3> <br/>
//     <h4>${author}</h4> `
//     // bookLi.textContent = `${obj.title}`
    
//     bookList.appendChild(bookLi)

}

form.addEventListener('submit',updateUi)