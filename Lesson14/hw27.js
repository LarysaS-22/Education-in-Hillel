console.log ("Hello, World!");
//На сторінці інпут та кнопка.
//При натисканні на кнопку - переходимо за посиланням, яке введено у інпут.
//Також треба реалізувати перевірку введеного значення, чи вказаний протокол http/https.
//Якщо протокол не вказаний - додаємо https

const input = document.querySelector('input');
const btn = document.querySelector('button');

const handleClick = () => {
    
    if (input.value.trim() === '') return;
    if(input.value.indexOf('http://')!== 0 || input.value.indexOf('https://')!== 0){
        input.value = 'https://'+ input.value;
    }
   
    window.location.assign('input.value');
    
}

btn.addEventListener('click', handleClick );