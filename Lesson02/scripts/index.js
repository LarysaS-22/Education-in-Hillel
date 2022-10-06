gitconsole.log("Hello, World!");

//1.Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація)

const guestName = prompt("Hello! Please enter your name", "");
const guestColor = prompt("Please enter your favorite color", "");
const guestFood = prompt("Please enter favorite food", "");

const guest = guestName+" likes  "+guestColor+" color and "+guestFood+"!";

console.log(guest);

//шаблонні рядки

const guest1 =`${guestName} likes__  ${guestColor} color and ${guestFood}!`;
console.log(guest1);


//2. Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пропуск


let number = 12345;
let str;
str = number.toString();

console.log(str.charAt(0)+" "+str.charAt(1)+" "+str.charAt(2)+" "+str.charAt(3)+" "+str.charAt(4));
