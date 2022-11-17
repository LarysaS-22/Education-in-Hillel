console.log ("Hello, World!");

//У папці img є зображення собак. При кожному завантаженні сторінки 
//повинно виводитися випадково обране зображення.

const imgOutput = document.querySelector(".wrapper");

const dogs = ['./img/dog1.jpeg','./img/dog2.jpeg','./img/dog3.jpeg','./img/dog4.jpeg','./img/dog5.jpeg','./img/dog6.jpeg']

const handleImg = (ev)=> {
if(ev.type === "DOMContentLoaded") {
       const randomNumber = Math.floor(Math.random() * dogs.length);
             
       imgOutput.innerHTML = `<img src="${dogs[randomNumber]}" alt="dog"></img>`;
      
    } 
}

document.addEventListener("DOMContentLoaded", handleImg);