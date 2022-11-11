console.log ("Hello, World!");

//Слайдер базовий
//Пишемо свій слайдер зображень.

//На сторінці є зображення та кнопки Next, Prev з боків від зображення. 
//При кліку на Next - показуємо наступне зображення. При кліку на Prev -
// попереднє. При досягненні останнього зображення - ховати кнопку Next. 
//Аналогічно з першим зображенням і кнопкою Prev.

//const imgOutput = document.querySelector(".container");

const img = document.querySelector("img");
const prev= document.querySelector(".prev");
const next = document.querySelector(".next");

const dogs = ['./img/dog1.jpeg','./img/dog2.jpeg','./img/dog3.jpeg','./img/dog4.jpeg','./img/dog5.jpeg','./img/dog6.jpeg'];
  
const handlePrev = () => {
    next.style.visibility = "visible";
    const i = dogs.findIndex(dogs => dogs === img.getAttribute("src"));
    if(i > 0){
    img.setAttribute('src', dogs[i - 1]) ;
    img.setAttribute('alt', `dog${i}`) ;
    } else{
        prev.style.visibility = "hidden";
    }
}
 
const handleNext = () => {
    prev.style.visibility = "visible";
    const i = dogs.findIndex(dogs => dogs === img.getAttribute("src"));
    
    if(i+1 < dogs.length){
    img.setAttribute('src', dogs[ i+ 1]) ;
    img.setAttribute('alt', `dog${i + 2}`) ;
    
    } else{
        next.style.visibility = "hidden";
    }
}    

prev.addEventListener("click", handlePrev);
next.addEventListener("click", handleNext);